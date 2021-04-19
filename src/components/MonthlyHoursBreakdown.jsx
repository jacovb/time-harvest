import React from "react";

export default function MonthlyHoursBreakdown({
  users,
  entry,
}) {
    
    const entryDates = 
    users.map((user) => {
      return entry
        .filter((item) => item.user.id === user.id)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((item, idx) => new Date(item.date)
          .toLocaleString('default', { month: 'long' })
          + " "
          + new Date(item.date).getFullYear())
        .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
    })
    
    return (
        <>
          <div className="projListHeading">
            <h2>Hours per Person</h2>
          </div>
          {/* Map through users, map through entryDates(months), 
          then map through all entries and use Users and entryDates to group */}
          <div className="table-person">
            {users.map((user, idx) => (
              <div className="table" key={idx}>
                <h2>{user.name}</h2>
                <div className="c-1 thead">Date</div>
                <div className="c-2 thead">Project No.</div>
                <div className="c-3 thead">Name</div>
                <div className="c-4 thead">Description</div>
                <div className="c-5 thead">Time</div>
                {entryDates[idx].map((month, idx) => (
                  <React.Fragment key={idx}>
                    <h5 className="c-1">{month}</h5>
                    {entry
                      .filter((obj) => obj.user.id === user.id)
                      .filter((obj) => new Date(obj.date).toLocaleString('default', { month: 'long' }) === month.split(" ")[0])
                      .sort((a, b) => new Date(a.date) - new Date(b.date))
                      .map((obj, idx) => (
                      <React.Fragment key={idx}>
                        <div className="c-1">{obj.date}</div>
                        <div className="c-2">{obj.project.projectNo}</div>
                        <div className="c-3">{obj.project.name}</div>
                        <div className="c-4">{obj.description}</div>
                        <div className="c-5">{obj.time}</div>
                      </React.Fragment>
                    ))}
                    <div className="c-5">
                      {entry
                        .filter((obj) => obj.user.id === user.id)
                        .filter((obj) => new Date(obj.date).toLocaleString('default', { month: 'long' }) === month.split(" ")[0])
                        .reduce((acc, curr) => acc + curr.time, 0)}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            ))}

          </div>
        </>
    )
}