import React from "react";
import { RenderContext } from "../context/RenderContext";

import ProjectSummary from "./ProjectSummary";

export default function ProjectOverview() {

  const context = React.useContext(RenderContext);

  function projectsFilter(projArray, selection) {
    if (selection.id.length === 0 && selection.status.length === 0) {
      return context.projects;
    } else if (selection.id === "") {
      return projArray.filter((proj) => selection.status === proj.status);
    } else if (selection.status === "") {
      return projArray.filter((proj) => selection.id === proj.id);
    } else if (selection.id.length > 0 && selection.status.length > 0) {
      return projArray.filter((proj) => selection.id === proj.id && selection.status === proj.status);
    }
  }

  let projectFilter = projectsFilter(context.projects, context.selectFilter);

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
          value={context.selectFilter.status}
          name="status"
          required
          onChange={context.handleFilter}>
            <option value="">Show All</option>
            <option value="Quote">Quote</option>
            <option value="Current">Current</option>
            <option value="Complete">Complete</option> 
        </select>
        
        <select
            className="select-no"
            type="text"
            id="projId"
            value={context.selectFilter.id}
            name="id"
            required
            onChange={context.handleFilter}>
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
      
      <div className="projectsList">
        {projectFilter
          .sort((a, b) => a.projectNo - b.projectNo)
          .map((project, idx) => (
            <ProjectSummary 
              key={idx}
              project={project}
            />
          ))
        
        }

      </div>

    </>
  )
}