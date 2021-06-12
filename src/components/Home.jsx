import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

import TimerIcon from '@material-ui/icons/Timer';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TimelineIcon from '@material-ui/icons/Timeline';

export default function Home() {
  const { currentUserDetails } = React.useContext(AuthContext)  
  
  console.log("currentUserDetails", currentUserDetails);

  return (
    <>
      <h3 className="homePageWelcome">Welcome, {`${currentUserDetails.name} ${currentUserDetails.surname}`}</h3>
      <div className="home-menu">

        <Link to="/timesheets">
          <button className="home-menu-button">
            <TimerIcon />
            <p>Timesheets</p>
          </button>
        </Link>

        <Link to="/reports">
          <button className="home-menu-button">
            <TimelineIcon />
            <p>Reports</p>
          </button>
        </Link>

      </div>
    </>
  )

}