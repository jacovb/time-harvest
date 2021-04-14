import React from "react";

import ProgressRing from "./ProgressRing";

export default function ProjectOverview({
  projects,
  selectFilter,
  handleFilter,
  startSelectFilter,
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

  function projectsFilter(projArray, selection) {
    if (selection.id.length === 0 && selection.status.length === 0) {
      return projects;
    } else if (selection.id === "") {
      return projArray.filter((proj) => selection.status === proj.status);
    } else if (selection.status === "") {
      return projArray.filter((proj) => selection.id === proj.id);
    } else if (selection !== startSelectFilter) {
      return projArray.filter((proj) => selection.id === proj.id && selection.status === proj.status);
    }
  }

  let projectFilter = projectsFilter(projects, selectFilter);

  return (
    <>
      <div className="overviewHeading">
        <h2>Project Overview</h2>
      </div>

      <div className="filter-bar">
        <label className="main-label">Filter by: </label>
        <label htmlFor="projStatus" className="label">
          Project Status: 
        </label>
        <label htmlFor="projId" className="label">
            Project Number:
        </label>
        
        <select
          className="select-status"
          type="text"
          id="projStatus"
          value={selectFilter.status}
          name="status"
          required
          onChange={handleFilter}>
            <option value="">Show All</option>
            <option value="Quote">Quote</option>
            <option value="Current">Current</option>
            <option value="Complete">Complete</option> 
        </select>
        
        <select
            className="select-no"
            type="text"
            id="projId"
            value={selectFilter.id}
            name="id"
            required
            onChange={handleFilter}>
            <option value="">Show All</option>
            {projectFilter
                .sort((a, b) => a.projectNo - b.projectNo)
                .map((project, idx) => (
                    <option key={idx} value={project.id}>
                        {project.projectNo} - {project.name}
                    </option>
            ))}  
        </select>
      </div>

      {console.log(selectFilter)}
      {console.log(projectFilter)}
      
      <div className="projectsList">
        {projectFilter
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