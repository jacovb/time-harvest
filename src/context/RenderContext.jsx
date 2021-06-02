import React, {useContext, useState, useEffect} from 'react';

import { API } from "aws-amplify";
import { AuthContext } from "../context/AuthContext";

import { listProjects, listUsers, listEntrys } from "../graphql/queries";

import {
  createProject as createProjectMutation,
  deleteProject as deleteProjectMutation,
  updateProject as updateProjectMutation,
  createUser as createUserMutation,
  deleteUser as deleteUserMutation,
  createEntry as createEntryMutation,
  deleteEntry as deleteEntryMutation,
  updateEntry as updateEntryMutation,
} from "../graphql/mutations";

import useModal from "../hooks/useModal";

const startForm = {
  projectNo: "",
  name: "",
  allowTimeTechnical: "",
  allowTimeCoordination: "",
  allowTimeEngineering: "",
  allowTimeConstruction: "",
  status: "",
};

const startUserForm = {
  name: "",
  surname: "",
  email: "",
  department: "",
  admin: false,
};

const startEntryUserId = {
  entryUserId: "",
  entryUserDept: "",
};

const startEntryForm = {
  entryProjectId: "",
  date: "",
  description: "",
  time: "",
};

const startSelectFilter = {
  status: "",
  id: "",
  entryUserId: "",
  month: "",
  week: "",
};

export const RenderContext = React.createContext();

const RenderContextProvider = ({children}) => {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [entry, setEntry] = useState([]);
  const [formData, setFormData] = useState(startForm);
  const [userData, setUserData] = useState(startUserForm);
  const [entryData, setEntryData] = useState(startEntryForm);
  const [entryUserId, setEntryUserId] = useState(startEntryUserId);
  const [selectFilter, setSelectFilter] = useState(startSelectFilter);
  const { isShowing, toggle } = useModal();
  const [index, setIndex] = useState(null);

  const { userInfo, isSignedIn } = useContext(AuthContext);

  useEffect(() => {
    fetchProjects();
    fetchUsers();
    fetchEntries();
  }, []);

  useEffect(() => {
    if (entryData === startEntryForm) return;
    else {
      updateProjectUsedHours(entryData);
    }
    // eslint-disable-next-line
  }, [entry]);

  // useEffect(() => {
  //   setEntryUserId({ ...entryUserId, entryUserId: userInfo.username });
  // }, [isSignedIn])

  // ===============
  // List Properties
  // ===============

  async function fetchProjects() {
    try {
      const apiData = await API.graphql({ query: listProjects });
      setProjects(apiData.data.listProjects.items);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchUsers() {
    try {
      const apiData = await API.graphql({ query: listUsers });
      setUsers(apiData.data.listUsers.items);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchEntries() {
    try {
      const apiData = await API.graphql({ query: listEntrys });
      setEntry(apiData.data.listEntrys.items);
    } catch (error) {
      console.log(error);
    }
  }

  // =================
  // Create Properties
  // =================

  async function createProject() {
    if (!formData.projectNo || !formData.name) return;
    if (projects.some((item) => item.projectNo === formData.projectNo)) {
      alert("Project Number Already Exists ");
    } else {
      try {
        await API.graphql({
          query: createProjectMutation,
          variables: { input: formData },
        });
        setProjects([...projects, formData]);
        setFormData(startForm);
        fetchProjects();
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function createUser() {
    if (!userData.name) return;
    try {
      await API.graphql({
        query: createUserMutation,
        variables: { input: userData },
      });
      setUsers([...users, userData]);
      setUserData(startUserForm);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }

  async function createEntry() {
    // if (!entryData.date || entryUserId.entryUserId === "") return;
    entryData.entryUserId = userInfo.username;
    console.log(entryData);
    try {
      await API.graphql({
        query: createEntryMutation,
        variables: { input: entryData },
      });
      fetchEntries();
      toggle();
    } catch (error) {
      console.log(error);
    }
  }

  // =================
  // Update Properties
  // =================

  async function updateProjectUsedHours(entryData) {
    function getDept(entryUserId) {
      const deptUser = users.filter((item) => item.id === entryUserId)[0];
      return deptUser.department;
    }

    // console.log(getDept(entryUserId.entryUserId));
    const dept = getDept(userInfo.username);

    function getUsedHours(projectId) {
      const usedTime = entry
        .filter((item) => item.project.id === projectId)
        .filter((item) => item.user.department === dept)
        .map((item) => item.time)
        .reduce((a, b) => a + b, 0);
      return usedTime;
    }

    if (
      entryData.prevProjectId &&
      entryData.entryProjectId !== entryData.prevProjectId
    ) {
      try {
        await API.graphql({
          query: updateProjectMutation,
          variables: {
            input: {
              id: entryData.prevProjectId,
              [`usedTime${dept}`]: getUsedHours(entryData.prevProjectId),
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
            id: entryData.entryProjectId,
            [`usedTime${dept}`]: getUsedHours(entryData.entryProjectId),
          },
        },
      });
      setEntryData(startEntryForm);
      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProject({ id }) {
    const newProjectsArray = [...projects];
    setIndex(projects.findIndex((item) => item.id === id));
    newProjectsArray[index] = formData;
    setProjects(newProjectsArray);
    try {
      await API.graphql({
        query: updateProjectMutation,
        variables: {
          input: {
            id: formData.id,
            name: formData.name,
            projectNo: formData.projectNo,
            status: formData.status,
            allowTimeTechnical: formData.allowTimeTechnical,
            allowTimeCoordination: formData.allowTimeCoordination,
            allowTimeEngineering: formData.allowTimeEngineering,
            allowTimeConstruction: formData.allowTimeConstruction,
          },
        },
      });
      setFormData(startForm);
      toggle();
      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateEntry(entryData) {
    try {
      await API.graphql({
        query: updateEntryMutation,
        variables: {
          input: {
            id: entryData.id,
            entryProjectId: entryData.entryProjectId,
            date: entryData.date,
            description: entryData.description,
            time: entryData.time,
          },
        },
      });
      toggle();
      fetchEntries();
    } catch (error) {
      console.log(error);
    }
  }

  // =================
  // Delete Properties
  // =================

  async function deleteProject({ id }) {
    const newProjectsArray = projects.filter((proj) => proj.id !== id);
    setProjects(newProjectsArray);
    try {
      await API.graphql({
        query: deleteProjectMutation,
        variables: { input: { id } },
      });
      fetchProjects();
      toggle();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser({ id }) {
    const newUsersArray = users.filter((user) => user.id !== id);
    setUsers(newUsersArray);
    try {
      await API.graphql({
        query: deleteUserMutation,
        variables: { input: { id } },
      });
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteEntry({ id }) {
    // get deleted entry's Project ID - this is needed to update Project Used Hours
    const getProjectId = entry.filter((item) => item.id === id);
    setEntryData({ ...entryData, entryProjectId: getProjectId[0].project.id });

    // delete entry from DynamoDB and fetch all entries when done
    try {
      await API.graphql({
        query: deleteEntryMutation,
        variables: { input: { id } },
      });
      fetchEntries();
      toggle();
    } catch (error) {
      console.log(error);
    }
  }

  // ==============
  // Event Handlers
  // ==============

  function handleAddData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleAddUser(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleAddEntry(e) {
    setEntryData({ ...entryData, [e.target.name]: e.target.value });
  }

  function handleFilter(e) {
    setSelectFilter({ ...selectFilter, [e.target.name]: e.target.value });
  }

  // function handleSetEntryUser(e) {
  //   let user = users.filter((item) => item.id === e.target.value)[0];
  //   setEntryUserId({
  //     ...entryUserId,
  //     [e.target.name]: e.target.value,
  //     entryUserDept: user.department,
  //   });
  // }
  
  const state = {
    projects,
    createProject,
    updateProject,
    deleteProject,
    users,
    createUser,
    deleteUser,
    entry,
    createEntry,
    updateEntry,
    deleteEntry,
    formData,
    setFormData,
    isShowing,
    toggle,
    startForm,
    startEntryForm,
    startSelectFilter,
    entryData,
    setEntryData,
    // entryUserId,
    // setEntryUserId,
    selectFilter,
    setSelectFilter,
    userData,
    handleFilter,
    handleAddData,
    handleAddUser,
    handleAddEntry,
    // handleSetEntryUser,
  };
  
  return <RenderContext.Provider value={state}>{children}</RenderContext.Provider>
};

export default RenderContextProvider;