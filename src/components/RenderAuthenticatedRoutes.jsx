import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Projects from "./Projects";
import Timesheets from "./Timesheets";
import Reports from "./Reports";
import Users from "./Users";
import ProjectOverview from "./ProjectOverview";
import ProjectDistribution from "./ProjectDistribution";
import MonthlyHoursBreakdown from "./MonthlyHoursBreakdown";
import WeeklyHoursBreakdown from "./WeeklyHoursBreakdown";
import Home from "./Home";
import { AuthContext } from "../context/AuthContext";

export default function RenderAuthenticatedRoutes() {

  const { currentUserDetails } = React.useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
    
        {currentUserDetails.admin &&<Route exact path="/projects">
          <Projects/>
        </Route>}
    
        <Route exact path="/timesheets">
          <Timesheets/>
        </Route>
    
        <Route exact path="/reports">
          <Reports />
        </Route>
    
        <Route exact path="/projectOverview">
          <ProjectOverview/>
        </Route>

        <Route exact path="/projectDistribution">
          <ProjectDistribution/>
        </Route>
    
        <Route exact path="/monthlyHours">
          <MonthlyHoursBreakdown/>
        </Route>

        <Route exact path="/weeklyHours">
          <WeeklyHoursBreakdown/>
        </Route>
    
        {currentUserDetails.admin && <Route exact path="/users">
          <Users/>
        </Route>}
      </Switch>
    </>
  )
}
