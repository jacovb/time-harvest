import React from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() { 
  const authContext = React.useContext(AuthContext);
  const currentUser = authContext.currentUserDetails

  const handleLogOut = async () => {
    try {
      await authContext.signOut();
    } catch (err) {
      console.log(err);
    }
  }

    return (
        <div id="navbar">
            <Link to="/" id="navButton">
                Home
            </Link>
            {currentUser.admin &&
            <Link to="/Projects" id="navButton">
                Projects
            </Link>
            }
            <Link to="/timesheets" id="navButton">
                Timesheets
            </Link>
            <Link to="/reports" id="navButton">
                Reports
            </Link>
            {currentUser.admin && 
            <Link to="/users" id="navButton">
                Users
            </Link>
            }
            <Link to="/signin" id="navButton" onClick={handleLogOut}>
              Log Out
            </Link>
        </div>
    )
}