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
                {entryDates[idx].map((month, idx) => (
                  <React.Fragment key={idx}>
                    <h5>{month}</h5>
                    {entry
                      .filter((obj) => obj.user.id === user.id)
                      .filter((obj) => new Date(obj.date).toLocaleString('default', { month: 'long' }) === month.split(" ")[0])
                      .sort((a, b) => new Date(a.date) - new Date(b.date))
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
                    <p>{entry
                        .filter((obj) => obj.user.id === user.id)
                        .filter((obj) => new Date(obj.date).toLocaleString('default', { month: 'long' }) === month.split(" ")[0])
                        .reduce((acc, curr) => acc + curr.time, 0)}
                    </p>
                  </React.Fragment>
                ))}
              </table>
            ))}

          </div>
        </>
    )
}