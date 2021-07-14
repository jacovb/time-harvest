import React, { useContext } from 'react';
import { RenderContext } from "../context/RenderContext";

import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';

export default function ProjectDistributionTable({
  day,
  setDay,
  months,
  projectFilter,
  convertDateToMonthAndYear,
}) {
  
  const context = useContext(RenderContext);

  return (
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
  )
}