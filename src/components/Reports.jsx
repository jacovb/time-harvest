import React from "react";
import { Link } from "react-router-dom";

export default function Reports() {
    return (
        <>
          <div className="projListHeading">
            <h2>Reports</h2>
          </div>

          <div className="report-links">
            <Link to="/projectOverview">
              <button>
                Projects: Overview
              </button>
            </Link>

            <Link to="/projectDistribution">
              <button>
                Projects: Hours Distribution
              </button>
            </Link>

            <Link to="/monthlyHours">
              <button>
                Users: Monthly Hours Breakdown
              </button>
            </Link>

            <Link to="/weeklyHours">
              <button>
                Users: Weekly Hours Breakdown
              </button>
            </Link>
          </div>
        </>
    )
}