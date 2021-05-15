import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Projects from "./Projects";
import Timesheets from "./Timesheets";
import Reports from "./Reports";
import Users from "./Users";
import ProjectOverview from "./ProjectOverview";
import MonthlyHoursBreakdown from "./MonthlyHoursBreakdown";

export default function RenderAuthenticatedRoutes() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <p>Home</p>
        </Route>
    
        <Route exact path="/projects">
          <Projects/>
        </Route>
    
        <Route exact path="/timesheets">
          <Timesheets/>
        </Route>
    
        <Route exact path="/reports">
          <Reports />
        </Route>
    
        <Route exact path="/projectOverview">
          <ProjectOverview/>
        </Route>
    
        <Route exact path="/monthlyHours">
          <MonthlyHoursBreakdown/>
        </Route>
    
        <Route exact path="/users">
          <Users/>
        </Route>
      </Switch>
    </>
  )
}
