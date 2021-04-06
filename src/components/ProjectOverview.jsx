import React from "react";

import ProgressRing from "./ProgressRing";

export default function ProjectOverview({
  projects,
}) {
    
  function totalAllowedTime(data) {
    return (+data.allowTimeTechnical) +
    (+data.allowTimeCoordination) +
    (+data.allowTimeEngineering) +
    (+data.allowTimeConstruction)
  }

  function totalUsedTime(data) {
    return (+data.usedTimeTechnical) +
    (+data.usedTimeCoordination) +
    (+data.usedTimeEngineering) +
    (+data.usedTimeConstruction)
  }
    
  return (
    <>
      <div className="projListHeading">
        <h2>Project Overview</h2>
      </div>

      <div className="projectsList">
        {projects
          .sort((a, b) => a.projectNo - b.projectNo)
          .map((project, idx) => (
            <div className="projectContainer" key={idx}>
              <div className="projectTitle">
                <h3>{project.projectNo} - {project.name}</h3>
                <p>Status: {project.status}</p>
              </div>
              <ProgressRing 
                className="projectTotalRing"
                usedHours={totalUsedTime(project)}
                allowedHours={totalAllowedTime(project)}
                circleSize="120"
              />
              <div className="column1 heading">
                <p>Coordination</p>
              </div>
              <div className="column2 heading">
                <p>Technical</p>
              </div>
              <div className="column3 heading">
                <p>Engineering</p>
              </div>
              <div className="column4 heading">
                <p>Construction</p>
              </div>
              
              <ProgressRing 
                className="column1"
                usedHours={project.usedTimeCoordination}
                allowedHours={project.allowTimeCoordination}
                circleSize="90"
              />
              <ProgressRing 
                className="column2"
                usedHours={project.usedTimeTechnical}
                allowedHours={project.allowTimeTechnical}
                circleSize="90"
              />
              <ProgressRing 
                className="column3"
                usedHours={project.usedTimeEngineering}
                allowedHours={project.allowTimeEngineering}
                circleSize="90"
              />
              <ProgressRing 
                className="column4"
                usedHours={project.usedTimeConstruction}
                allowedHours={project.allowTimeConstruction}
                circleSize="90"
              />
              
              <div className="column1">
                <p>{(+project.usedTimeCoordination)} / {project.allowTimeCoordination}</p>
              </div>
              <div className="column2">
                <p>{(+project.usedTimeTechnical)} / {project.allowTimeTechnical}</p>
              </div>
              <div className="column3">
                <p>{(+project.usedTimeEngineering)} / {project.allowTimeEngineering}</p>
              </div>
              <div className="column4">
                <p>{(+project.usedTimeConstruction)} / {project.allowTimeConstruction}</p>
              </div>
              <div className="columnAll heading">
                <p>Used / Quoted:</p>
              </div>
            </div>
          ))
        
        }

      </div>

    </>
  )
}