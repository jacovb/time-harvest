import React, { useContext, useState, useEffect } from 'react';

import { API } from "aws-amplify";
import { listProjects } from "../graphql/queries";
import {
  createProject as createProjectMutation,
  deleteProject as deleteProjectMutation,
  updateProject as updateProjectMutation,
} from "../graphql/mutations";

import { RenderContext } from '../context/RenderContext'

const startForm = {
  projectNo: "",
  name: "",
  allowTimeTechnical: "",
  allowTimeCoordination: "",
  allowTimeEngineering: "",
  allowTimeConstruction: "",
  status: "",
};

export const ProjectContext = React.createContext();

const ProjectContextProvider = ({children}) => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState(startForm);
  const [index, setIndex] = useState(null);

  const renderContext = useContext(RenderContext);

  useEffect(() => {
    fetchProjects();
  }, []);

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

  // =================
  // Update Properties
  // =================

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
      renderContext.toggle();
      fetchProjects();
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
      renderContext.toggle();
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


  const state = {
    projects,
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
    handleAddData,
    formData,
    setFormData,
    startForm,
  };

  return <ProjectContext.Provider value={state}>{children}</ProjectContext.Provider>

};

export default ProjectContextProvider;