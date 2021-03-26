import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
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
            <Link to="/users" id="navButton">
                Users
            </Link>
        </div>
    )
}