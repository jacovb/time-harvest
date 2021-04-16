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
            <h2>Hours by Month</h2>
          </div>

          <div>
            <table>
              <thead>
                <tr>
                  <th>Table Heading 1</th>
                  <th>Table Heading 2</th>
                  <th>Table Heading 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                </tr>
                <tr>
                  <td>Data 4</td>
                  <td>Data 5</td>
                  <td>Data 6</td>
                </tr>
              </tbody>
            </table>

          </div>
        </>
    )
}