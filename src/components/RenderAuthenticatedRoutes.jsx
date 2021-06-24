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
        <Route exact path="/" component={Home} />
        {currentUserDetails.admin && <Route exact path="/projects" component={Projects} />}
        <Route exact path="/timesheets" component={Timesheets} />
        <Route exact path="/reports" component={Reports} />
        <Route exact path="/projectOverview" component={ProjectOverview} />
        <Route exact path="/projectDistribution" component={ProjectDistribution} />
        <Route exact path="/monthlyHours" component={MonthlyHoursBreakdown} />
        <Route exact path="/weeklyHours" component={WeeklyHoursBreakdown} />
        {currentUserDetails.admin && <Route exact path="/users" component={Users} />}
      </Switch>
    </>
  )
}
