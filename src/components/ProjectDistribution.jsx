import React, { useContext, useState } from 'react';
import { RenderContext } from "../context/RenderContext";

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

  return (
    <>
      <div className="projListHeading">
        <h2>Monthly Hour Distribution per Project</h2>
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
        {context.projects
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
    </>
  )
}
