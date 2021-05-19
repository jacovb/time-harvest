import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth } from 'aws-amplify';

import Navbar from "./Navbar";
import Projects from "./Projects";
import Timesheets from "./Timesheets";
import Reports from "./Reports";
import Users from "./Users";
import ProjectOverview from "./ProjectOverview";
import MonthlyHoursBreakdown from "./MonthlyHoursBreakdown";
import WeeklyHoursBreakdown from "./WeeklyHoursBreakdown";

export default function RenderAuthenticatedRoutes() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <p>Home</p>
          {console.log(Auth)}
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

        <Route exact path="/weeklyHours">
          <WeeklyHoursBreakdown/>
        </Route>
    
        <Route exact path="/users">
          <Users/>
        </Route>
      </Switch>
    </>
  )
}
