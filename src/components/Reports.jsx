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

          <Link to="/projectOverview">
            <button>
              Project Overview
            </button>
          </Link>

          {/* <Link to="/ProjectOverview">
            <button>
              Project Overview
            </button>
          </Link>

          <Link to="/ProjectOverview">
            <button>
              Project Overview
            </button>
          </Link> */}

          {/* <div className="projectsList">
            {projects
              .sort((a, b) => a.projectNo - b.projectNo)
              .map((project, idx) => (
                <div className="projectRow" key={idx}>
                  <div className="gridProjectNo">{project.projectNo}</div>
                    <div className="gridProjectName">{project.name}</div>
                    <div className="gridProjectStatus">{project.status}</div>
                    <ProgressRing 
                      className="gridProgress-ring"
                      usedHours={project.usedTimeTechnical}
                      allowedHours={project.allowTimeTechnical}
                      />
                    <ProgressRing 
                      className="gridProgress-ring"
                      usedHours={project.usedTimeCoordination}
                      allowedHours={project.allowTimeCoordination}
                      />
                    <ProgressRing 
                      className="gridProgress-ring"
                      usedHours={project.usedTimeEngineering}
                      allowedHours={project.allowTimeEngineering}
                      />
                    <ProgressRing 
                      className="gridProgress-ring"
                      usedHours={project.usedTimeConstruction}
                      allowedHours={project.allowTimeConstruction}
                      />
              </div>
            ))}
          </div> */}
        </>
    )
}