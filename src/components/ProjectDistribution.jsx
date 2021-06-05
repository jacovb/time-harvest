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



  
  console.log(lastMonth);
  console.log(context.entry);
  console.log(context.projects);

  return (
    <>
      <div className="projListHeading">
        <h2>Monthly Hour Distribution per Project</h2>
      </div>
      
      <div className={"dist-table"}>
        {months.map((month, idx) => (
            <div key={idx} className={`d-${idx+2} dist-headings`}>{month}</div>
        ))}
        <div className="dist-headings dist-strong">TOTAL</div>
        {context.projects
          .sort((a, b) => a.projectNo - b.projectNo)
          .map((project, idx) => (
            <React.Fragment key={idx}>
              <div className="d-1 dist-project">{`${project.projectNo} - ${project.name}`}</div>
              {months.map((month, idx) => (
                <div key={idx} className="dist-cell">
                  {context.entry
                  .filter((obj) => obj.project.id === project.id)
                  .filter((obj) => new Date(obj.date).toLocaleString('default', { month: 'long' }) === month.split(" ")[0])
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
