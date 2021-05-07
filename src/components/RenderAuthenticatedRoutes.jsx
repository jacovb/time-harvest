import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Projects from "./Projects";
import Timesheets from "./Timesheets";
import Reports from "./Reports";
import Users from "./Users";
import ProjectOverview from "./ProjectOverview";
import MonthlyHoursBreakdown from "./MonthlyHoursBreakdown";

export default function RenderAuthenticatedRoutes({
  projects,
  setFormData,
  createProject,
  deleteProject,
  UpdateProject,
  formData,
  handleAddData,
  isShowing,
  toggle,
  startForm,
  users,
  entry,
  handleAddEntry,
  handleSetEntryUser,
  entryData,
  setEntryData,
  createEntry,
  entryUserId,
  deleteEntry,
  UpdateEntry,
  startEntryForm,
  selectFilter,
  startSelectFilter,
  handleFilter,
  userData,
  createUser,
  handleAddUser,
  deleteUser,
}) {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <p>Home</p>
        </Route>
    
        <Route exact path="/projects">
          <Projects
            projects={projects}
            setFormData={setFormData}
            createProject={createProject}
            deleteProject={deleteProject}
            UpdateProject={UpdateProject}
            formData={formData}
            handleAddData={handleAddData}
            isShowing={isShowing}
            toggle={toggle}
            startForm={startForm}
          />
        </Route>
    
        <Route exact path="/timesheets">
          <Timesheets
            projects={projects}
            users={users}
            entry={entry}
            handleAddEntry={handleAddEntry}
            handleSetEntryUser={handleSetEntryUser}
            entryData={entryData}
            setEntryData={setEntryData}
            createEntry={createEntry}
            entryUserId={entryUserId}
            isShowing={isShowing}
            toggle={toggle}
            deleteEntry={deleteEntry}
            UpdateEntry={UpdateEntry}
            startEntryForm={startEntryForm}
          />
        </Route>
    
        <Route exact path="/reports">
          <Reports />
        </Route>
    
        <Route exact path="/projectOverview">
          <ProjectOverview
            projects={projects}
            selectFilter={selectFilter}
            handleFilter={handleFilter}
            startSelectFilter={startSelectFilter}
          />
        </Route>
    
        <Route exact path="/monthlyHours">
          <MonthlyHoursBreakdown
            users={users}
            entry={entry}
            selectFilter={selectFilter}
            handleFilter={handleFilter}
          />
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
    </>
  )
}