import React, { useContext, useState } from 'react';
import { RenderContext } from "../context/RenderContext";

import ProjectDistributionChart from './ProjectDistributionChart';

import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';

export default function ProjectDistribution() {
  const context = useContext(RenderContext);
  const [day, setDay] = useState(new Date());

  function getLast12Months(d) {
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let monthArray = [];
    let currentDate = new Date(d)
    currentDate.setDate(1);
    for (let i = 0; i <= 11; i++) {
      monthArray.push(monthName[currentDate.getMonth()] + " " + currentDate.getFullYear());
      currentDate.setMonth(currentDate.getMonth() - 1)
    }
    return monthArray.reverse();
  }

  function convertDateToMonthAndYear(d) {
    let monthAndYear = new Date(d)
    .toLocaleString('default', { month: 'long' })
    + " "
    + new Date(d).getFullYear()
    return monthAndYear
  }

  const months = getLast12Months(day);

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
  let entryFilter = projectFilter
    .sort((a, b) => a.projectNo - b.projectNo)
    .map((project, idx) => (
      months.map((month, idx) => (
          context.entry
          .filter((obj) => obj.project.id === project.id)
          .filter((obj) => convertDateToMonthAndYear(obj.date) === month)
          .reduce((acc, curr) => acc + curr.time, 0)
        ))
      )
    )

  
  return (
    <>
      <div className="projListHeading">
        <h2>Monthly Hour Distribution per Project</h2>
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

      <div className="dist-table">
        <button 
          className="year-back d-1 year-slider"
          onClick={() => {
            let tempDay = new Date(day);
            let lastYearDay = tempDay.setMonth(tempDay.getMonth() - 12);
            setDay(lastYearDay)
          }}
        >
          <FastRewindIcon/>
        </button>

        <div className="dist-date-range">{`${months[0]} - ${months[11]}`}</div>

        <button 
            className="year-forward d-14 year-slider"
            onClick={() => {
              let tempDay = new Date(day);
              let nextYearDay = tempDay.setMonth(tempDay.getMonth() + 12);
              setDay(nextYearDay)
            }}
          >
            <FastForwardIcon/>
        </button>

        {months.map((month, idx) => (
            <div key={idx} className={`d-${idx+2} dist-headings`}>{month}</div>
        ))}
        <div className="dist-headings dist-strong">
          TOTAL
        </div>
        {projectFilter
          .sort((a, b) => a.projectNo - b.projectNo)
          .map((project, idx) => (
            <React.Fragment key={idx}>
              <div className="d-1 dist-project">{`${project.projectNo} - ${project.name}`}</div>
              {months.map((month, idx) => (
                <div key={idx} className="dist-cell">
                  {context.entry
                  .filter((obj) => obj.project.id === project.id)
                  .filter((obj) => convertDateToMonthAndYear(obj.date) === month)
                  .reduce((acc, curr) => acc + curr.time, 0)}
                </div>
              ))}
              <div className="dist-cell dist-strong">
                {context.entry
                  .filter((obj) => obj.project.id === project.id)
                  .reduce((acc, curr) => acc + curr.time, 0)}
              </div>
            </React.Fragment>
          ))}
      </div>
      <ProjectDistributionChart
        months={months} 
        projects={projectFilter} 
        entries={entryFilter}
      />

    </>
  )
}
