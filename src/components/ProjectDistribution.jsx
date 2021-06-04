import React, {useContext} from 'react';
import { RenderContext } from "../context/RenderContext";

export default function ProjectDistribution() {
  const context = useContext(RenderContext);

  function getLastMonth() {
    return context.entry
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((item, idx) => new Date(item.date)
        .toLocaleString('default', { month: 'long' })
        + " "
        + new Date(item.date).getFullYear())
      .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])
      .reverse()[0];
  }

  const months = ["July 2020", "August 2020", "September 2020", "October 2020", "November 2020", "December 2020", "January 2021", "February 2021", "March 2021", "April 2021", "May 2021", "June 2021"];
  
  const lastMonth = getLastMonth()



  
  console.log(getLastMonth())

  return (
    <>
      <div className={"dist-table"}>
        {months.map((month, idx) => (
          <div key={idx} className={`d-${idx+2} dist-headings`}>{month}</div>
        ))}
        {context.projects
          .sort((a, b) => a.projectNo - b.projectNo)
          .map((project, idx) => (
            <div key={idx} className="d-1">{`${project.projectNo} - ${project.name}`}</div>
          ))}
      </div>
    </>
  )
}
