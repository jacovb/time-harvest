import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { API } from "aws-amplify";

import { listProjects, listUsers, listEntrys } from "./graphql/queries";

import {
  createProject as createProjectMutation,
  deleteProject as deleteProjectMutation,
  updateProject as updateProjectMutation,
  createUser as createUserMutation,
  deleteUser as deleteUserMutation,
  createEntry as createEntryMutation,
} from "./graphql/mutations";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import NewProjects from "./components/NewProjects";
import Timesheets from "./components/Timesheets";
import Reports from "./components/Reports";
import Users from "./components/Users";

import useModal from "./hooks/useModal";

const startForm = {
  projectNo: "",
  name: "",
  allowedHours: "",
  status: "",
};

const startUserForm = {
  name: "",
};

const startEntryUserId = {
  entryUserId: "",
};

const startEntryForm = {
  entryProjectId: "",
  date: "",
  description: "",
  time: 0,
};

function App() {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [entry, setEntry] = useState([]);
  const [formData, setFormData] = useState(startForm);
  const [userData, setUserData] = useState(startUserForm);
  const [entryData, setEntryData] = useState(startEntryForm);
  const [entryUserId, setEntryUserId] = useState(startEntryUserId);
  const { isShowing, toggle } = useModal();
  const [index, setIndex] = useState(null);

  useEffect(() => {
    fetchProjects();
    fetchUsers();
    fetchEntries();
  }, []);

  async function fetchProjects() {
    const apiData = await API.graphql({ query: listProjects });
    setProjects(apiData.data.listProjects.items);
  }

  async function fetchUsers() {
    const apiData = await API.graphql({ query: listUsers });
    setUsers(apiData.data.listUsers.items);
  }

  async function fetchEntries() {
    const apiData = await API.graphql({ query: listEntrys });
    setEntry(apiData.data.listEntrys.items);
  }

  async function createProject() {
    if (!formData.projectNo || !formData.name) return;
    if (projects.some((item) => item.projectNo === formData.projectNo)) {
      alert("Project Number Already Exists ");
    } else {
      await API.graphql({
        query: createProjectMutation,
        variables: { input: formData },
      });
      setProjects([...projects, formData]);
      setFormData(startForm);
      fetchProjects();
    }
  }

  async function createUser() {
    if (!userData.name) return;
    await API.graphql({
      query: createUserMutation,
      variables: { input: userData },
    });
    setUsers([...users, userData]);
    setUserData(startUserForm);
    fetchUsers();
  }

  async function createEntry() {
    if (!entryData.date) return;
    entryData.entryUserId = entryUserId.entryUserId;
    console.log(entryData);
    await API.graphql({
      query: createEntryMutation,
      variables: { input: entryData },
    });

    setEntry([...entry, entryData]);
    fetchEntries();
    setEntryData(startEntryForm);
  }

  async function updateProjectUsedHours({ entryProjectId }) {
    console.log(entryData);
    console.log(entry);
    const newProjectsArray = [...projects];
    const idx = projects.findIndex((item) => item.id === entryProjectId);

    newProjectsArray[idx].usedHours = entry
      .filter((item) => item.project.id === entryProjectId)
      .map((item) => item.time)
      .reduce((a, b) => a + b, 0);

    setProjects(newProjectsArray);

    await API.graphql({
      query: updateProjectMutation,
      variables: {
        input: {
          id: entryData.entryProjectId,
          usedHours: newProjectsArray[idx].usedHours,
        },
      },
    });
    setEntryData(startEntryForm);
  }

  async function UpdateProject({ id }) {
    const newProjectsArray = [...projects];
    setIndex(projects.findIndex((item) => item.id === id));
    // delete formData.createdAt;
    // delete formData.updatedAt;
    newProjectsArray[index] = formData;
    setProjects(newProjectsArray);
    await API.graphql({
      query: updateProjectMutation,
      variables: {
        input: {
          id: formData.id,
          name: formData.name,
          projectNo: formData.projectNo,
          status: formData.status,
          allowedHours: formData.allowedHours,
        },
      },
    });
    console.log(formData);
    setFormData(startForm);
    toggle();
    fetchProjects();
  }

  async function deleteProject({ id }) {
    const newProjectsArray = projects.filter((proj) => proj.id !== id);
    setProjects(newProjectsArray);
    await API.graphql({
      query: deleteProjectMutation,
      variables: { input: { id } },
    });
    fetchProjects();
  }

  async function deleteUser({ id }) {
    const newUsersArray = users.filter((user) => user.id !== id);
    setUsers(newUsersArray);
    await API.graphql({
      query: deleteUserMutation,
      variables: { input: { id } },
    });
    fetchUsers();
  }

  function handleAddData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleAddUser(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleAddEntry(e) {
    setEntryData({ ...entryData, [e.target.name]: e.target.value });
  }

  function handleSetEntryUser(e) {
    setEntryUserId({ [e.target.name]: e.target.value });
  }

  return (
    <div className="App">
      <h1>Timesheet-App</h1>
      <Router>
        <Navbar />
        <div id="mainContainer">
          <Switch>
            <Route exact path="/">
              <p>Home</p>
            </Route>

            <Route exact path="/projects">
              <Projects
                projects={projects}
                setFormData={setFormData}
                deleteProject={deleteProject}
                UpdateProject={UpdateProject}
                formData={formData}
                handleAddData={handleAddData}
                isShowing={isShowing}
                toggle={toggle}
              />
            </Route>

            <Route exact path="/newProjects">
              <NewProjects
                formData={formData}
                createProject={createProject}
                handleAddData={handleAddData}
              />
            </Route>

            <Route exact path="/timesheets">
              <Timesheets
                projects={projects}
                users={users}
                handleAddEntry={handleAddEntry}
                handleSetEntryUser={handleSetEntryUser}
                entryData={entryData}
                createEntry={createEntry}
                updateProjectUsedHours={updateProjectUsedHours}
                entryUserId={entryUserId}
              />
            </Route>

            <Route exact path="/reports">
              <Reports />
            </Route>

            <Route exact path="/users">
              <Users
                userData={userData}
                createUser={createUser}
                handleAddUser={handleAddUser}
                users={users}
                deleteUser={deleteUser}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
