import React, { useContext, useEffect } from 'react';

import { API } from "aws-amplify";

import {
  updateProject as updateProjectMutation,
} from "../graphql/mutations";

import { RenderContext } from '../context/RenderContext'
import { AuthContext } from "../context/AuthContext";
import { ProjectContext } from "../context/ProjectContext";
import { UserContext } from "../context/UserContext";
import { EntryContext } from "../context/EntryContext";

export const UsedHoursContext = React.createContext();

const UsedHoursContextProvider = ({children}) => {
  const { userInfo } = useContext(AuthContext);
  const renderContext = useContext(RenderContext);
  const projectContext = useContext(ProjectContext);
  const userContext = useContext(UserContext);
  const entryContext = useContext(EntryContext);

  useEffect(() => {
    if (entryContext.entryData === entryContext.startEntryForm) return;
    else {
      updateProjectUsedHours(entryContext.entryData);
    }
    // eslint-disable-next-line
  }, [entryContext.entry]);

  // =================
  // Update Properties
  // =================

  async function updateProjectUsedHours(entryData) {
    function getDept(entryUserId) {
      const deptUser = userContext.users.filter((item) => item.id === entryUserId)[0];
      return deptUser.department;
    }

    const dept = (renderContext.entryUserId !== renderContext.startEntryUserId) ? 
      getDept(renderContext.entryUserId.entryUserId) :
      getDept(userInfo.username);

    function getUsedHours(projectId) {
      const usedTime = entryContext.entry
        .filter((item) => item.project.id === projectId)
        .filter((item) => item.user.department === dept)
        .map((item) => item.time)
        .reduce((a, b) => a + b, 0);
      return usedTime;
    }

    if (
      entryContext.entryData.prevProjectId &&
      entryContext.entryData.entryProjectId !== entryContext.entryData.prevProjectId
    ) {
      try {
        await API.graphql({
          query: updateProjectMutation,
          variables: {
            input: {
              id: entryContext.entryData.prevProjectId,
              [`usedTime${dept}`]: getUsedHours(entryContext.entryData.prevProjectId),
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await API.graphql({
        query: updateProjectMutation,
        variables: {
          input: {
            id: entryContext.entryData.entryProjectId,
            [`usedTime${dept}`]: getUsedHours(entryContext.entryData.entryProjectId),
          },
        },
      });
      entryContext.setEntryData(entryContext.startEntryForm);
      projectContext.fetchProjects();
    } catch (error) {
      console.log(error);
    }
  }

  const state = {updateProjectUsedHours};

  return <UsedHoursContext.Provider value={state}>{children}</UsedHoursContext.Provider>

};

export default UsedHoursContextProvider;