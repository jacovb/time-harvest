import React from "react";

export default function MonthlyHoursBreakdown({
  projects,
  users,
  entry,
}) {
    return (
        <>
          {console.log("Projects", projects)}
          {console.log("Entries", entry)}
          {console.log("Users", users)}

          <div className="projListHeading">
            <h2>Hours per Person</h2>
          </div>

          <div className="table-person">
            {users.map((user) => (
              <table>
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
                {entry
                  .filter((obj) => obj.user.id === user.id)
                  .sort((a, b) => new Date(a.date) - new Date(b.date))
                  .map((obj) => (
                  <tbody>
                    <tr>
                      <td>{obj.date}</td>
                      <td>{obj.project.projectNo}</td>
                      <td>{obj.project.name}</td>
                      <td>{obj.description}</td>
                      <td>{obj.time}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            ))}

          </div>
        </>
    )
}