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
// import AuthContext from "../context/AuthContext";
// import RenderContext from "../context/RenderContext";

export default function RenderAuthenticatedRoutes() {
  // const authContext = React.useContext(AuthContext);
  // const context = React.useContext(RenderContext);
  // const currentUser = context.users.filter((item) => item.id === authontext.userInfo.username)[0];

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {/* <h3>Welcome, {currentUser.name + " " + currentUser.surname}</h3> */}
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

        <Route exact path="/projectDistribution">
          <ProjectDistribution/>
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
