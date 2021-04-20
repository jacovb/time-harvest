import React from "react";

export default function MonthlyHoursBreakdown({
  projects,
  users,
  entry,
  selectFilter,
  startSelectFilter,
  handleFilter,
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

    function projectsFilter(projArray, selection) {
      if (selection.id.length === 0 && selection.status.length === 0) {
        return projects;
      } else if (selection.id === "") {
        return projArray.filter((proj) => selection.status === proj.status);
      } else if (selection.status === "") {
        return projArray.filter((proj) => selection.id === proj.id);
      } else if (selection !== startSelectFilter) {
        return projArray.filter((proj) => selection.id === proj.id && selection.status === proj.status);
      }
    }
  
    let projectFilter = projectsFilter(projects, selectFilter);
    
    return (
        <>
          <div className="projListHeading">
            <h2>Hours per Person</h2>
          </div>

          {console.log(entryDates)}

          {/* <div className="filter-bar">
            <label className="main-label">Filter by: </label>
            <label htmlFor="entryUser" className="label">
              User: 
            </label>
            <label htmlFor="entryMonth" className="label">
              Month:
            </label>
            
            <select
              className="select-user"
              type="text"
              id="entryUser"
              value={selectFilter.entryUserId}
              name="entryUserId"
              required
              onChange={handleFilter}>
                <option value="">Show All</option>
                <option value="Quote">Quote</option>
                <option value="Current">Current</option>
                <option value="Complete">Complete</option> 
            </select>
            
            <select
                className="select-month"
                type="text"
                id="entryMonth"
                value={selectFilter.month}
                name="month"
                required
                onChange={handleFilter}>
                <option value="">Show All</option>
                {entryDates
                    .sort((a, b) => new Date(a) - new Date(b))
                    .map((obj, idx) => (
                        <option key={idx} value={obj.id}>
                            {project.projectNo} - {project.name}
                        </option>
                ))}  
            </select>
          </div> */}

          {/* Map through users, map through entryDates(months), 
          then map through all entries and use Users and entryDates to group */}
          <div className="table-person">
            <div className="table-heading">
              <div className="c-1 thead">Date</div>
              <div className="c-2 thead">Project No.</div>
              <div className="c-3 thead">Name</div>
              <div className="c-4 thead">Description</div>
              <div className="c-5 thead">Time</div>
            </div>
            {users.map((user, idx) => (
              <div className="table" key={idx}>
                <h2>{user.name}</h2>
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
                    <div className="c-5 total">
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