import React from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { RenderContext } from '../context/RenderContext';



export default function Navbar() {
  const context = React.useContext(RenderContext);  
  const authContext = React.useContext(AuthContext);
  const currentUser = context.users
    .filter((item) => item.id === authContext.userInfo.username)[0];

  const handleLogOut = async () => {
    try {
      await authContext.signOut();
    } catch (err) {
      console.log(err);
    }
  }

    // console.log(authContext.userInfo);

    return (
        <div id="navbar">
            <Link to="/" id="navButton">
                Home
            </Link>
            <Link to="/Projects" id="navButton">
                Projects
            </Link>
            <Link to="/timesheets" id="navButton">
                Time Sheets
            </Link>
            <Link to="/reports" id="navButton">
                Reports
            </Link>
            {/* {currentUser.admin &&  */}
            <Link to="/users" id="navButton">
                Users
            </Link>
            {/* } */}
            <Link to="/signin" id="navButton" onClick={handleLogOut}>
              Log Out
            </Link>
        </div>
    )
}