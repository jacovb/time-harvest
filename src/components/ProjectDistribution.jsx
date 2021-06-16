import React, { useContext, useState } from 'react';
import { RenderContext } from "../context/RenderContext";

export default function ProjectDistribution() {
  const context = useContext(RenderContext);
  const [day, setDay] = useState(new Date());

  function getLast12Months(d) {
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let monthArray = [];
    d.setDate(1);
    for (let i = 0; i <= 11; i++) {
      monthArray.push(monthName[d.getMonth()] + " " + d.getFullYear());
      d.setMonth(d.getMonth() - 1)
    }
    return monthArray.reverse();
  }

  const months = getLast12Months(day);

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
