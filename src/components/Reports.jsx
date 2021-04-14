import React from "react";
import { Link } from "react-router-dom";

export default function Reports({
  projects,
}) {
    return (
        <>
          <div className="projListHeading">
            <h2>Reports</h2>
          </div>

          <div className="report-links">
            <Link to="/projectOverview">
              <button>
                Project Overview
              </button>
            </Link>

            <Link to="/monthlyHours">
              <button>
                Monthly Hours Breakdown
              </button>
            </Link>
          </div>
        </>
    )
}