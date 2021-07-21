import React, { useContext, useState } from 'react';
import { RenderContext } from "../context/RenderContext";
import { ProjectContext } from "../context/ProjectContext";
import { EntryContext } from "../context/EntryContext";

import ProjectDistributionTable from './ProjectDistributionTable';
import ProjectDistributionChart from './ProjectDistributionChart';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch'

export default function ProjectDistribution() {
  const renderContext = useContext(RenderContext);
  const projectContext = useContext(ProjectContext);
  const entryContext = useContext(EntryContext);

  const [day, setDay] = useState(new Date());
  const [toggleGraphTable, setToggleGraphTable] = useState({checked: true});

  const handleToggle = (e) => {
    setToggleGraphTable({...toggleGraphTable, [e.target.name]: e.target.checked})
  }

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
      return projectContext.projects;
    } else if (selection.id === "") {
      return projArray.filter((proj) => selection.status === proj.status);
    } else if (selection.status === "") {
      return projArray.filter((proj) => selection.id === proj.id);
    } else if (selection.id.length > 0 && selection.status.length > 0) {
      return projArray.filter((proj) => selection.id === proj.id && selection.status === proj.status);
    }
  }

  let projectFilter = projectsFilter(projectContext.projects, renderContext.selectFilter);
  let entryFilter = projectFilter
    .sort((a, b) => a.projectNo - b.projectNo)
    .map((project, idx) => (
      months.map((month, idx) => (
          entryContext.entry
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
          value={renderContext.selectFilter.status}
          name="status"
          required
          onChange={renderContext.handleFilter}>
            <option value="">Show All</option>
            <option value="Quote">Quote</option>
            <option value="Current">Current</option>
            <option value="Complete">Complete</option> 
        </select>
        
        <select
            className="select-no"
            type="text"
            id="projId"
            value={renderContext.selectFilter.id}
            name="id"
            required
            onChange={renderContext.handleFilter}>
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

      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={toggleGraphTable.checked}
              onChange={handleToggle}
              name="checked"
            />
          }
          label="Table / Graph"
        />
      </FormGroup>

      {toggleGraphTable.checked && <ProjectDistributionChart
        months={months} 
        projects={projectFilter} 
        entries={entryFilter}
      />}

      {!toggleGraphTable.checked && <ProjectDistributionTable
        day={day}
        setDay={setDay}
        months={months}
        projectFilter={projectFilter}
        convertDateToMonthAndYear={convertDateToMonthAndYear}
      />}
    </>
  )
}
