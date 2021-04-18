import React from "react";

export default function MonthlyHoursBreakdown({
  projects,
  users,
  entry,
}) {
    
    const entryDates = 
    users.map((user) => {
      return entry
        .filter((item) => item.user.id === user.id)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((item, idx) => new Date(item.date)
          .toLocaleString('default', { month: 'long' }))
        .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
    })
    
    return (
        <>
          {console.log("Projects", projects)}
          {console.log("Entries", entry)}
          {console.log("Users", users)}
          {console.log("Entry Dates",entryDates)}

          <div className="projListHeading">
            <h2>Hours per Person</h2>
          </div>
          {/* Map through users, map through entryDates(months), 
          then map through all entries and use Users and entryDates to group */}
          <div className="table-person">
            {users.map((user, idx) => (
              <table key={idx}>
                <thead>
                  <h2>{user.name}</h2>
                  <tr>
                    <th>Date</th>
                    <th>Project No.</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Time</th>
                  </tr>
                </thead>
                {entryDates[idx].map((month) => (
                  <>
                    <h5>{month}</h5>
                    {entry
                      .filter((obj) => obj.user.id === user.id)
                      .filter((obj) => new Date(obj.date).toLocaleString('default', { month: 'long' }) === month)
                      .sort((a, b) => new Date(b.date) - new Date(a.date))
                      .map((obj, idx) => (
                      <tbody key={idx}>
                        <tr>
                          <td>{obj.date}</td>
                          <td>{obj.project.projectNo}</td>
                          <td>{obj.project.name}</td>
                          <td>{obj.description}</td>
                          <td>{obj.time}</td>
                        </tr>
                      </tbody>
                    ))}
                  </>
                ))}
              </table>
            ))}

          </div>
        </>
    )
}