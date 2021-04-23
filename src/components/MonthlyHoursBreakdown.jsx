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

    function getEntryDates(userId) {
      return entry
        .filter((item) => item.user.id === userId)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((item, idx) => new Date(item.date)
          .toLocaleString('default', { month: 'long' })
          + " "
          + new Date(item.date).getFullYear())
        .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []); 
    }

    const entryDateArray = 
      entryDates
        .reduce((a, b) => {
            return a.concat(b)
          }, [])
        .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])

    function entriesFilter(entry, selection) {
      if (selection.entryUserId.length === 0 && selection.month.length === 0) {
        return entry;
      } else if (selection.entryUserId === "") {
        return entry.filter((obj) => selection.month.split(" ")[0] === new Date(obj.date).toLocaleString('default', { month: 'long' }));
      } else if (selection.month === "") {
        return entry.filter((obj) => selection.entryUserId === obj.user.id);
      } else if (selection.entryUserId.length > 0 && selection.month.length > 0) {
        return entry.filter((obj) => selection.entryUserId === obj.user.id && selection.month.split(" ")[0] === new Date(obj.date).toLocaleString('default', { month: 'long' }));
      }
    }

    function usersFilter(users, selection) {
      if (selection.entryUserId.length === 0) {
        return users
      } else if (selection.entryUserId.length > 0) {
        return users.filter((user) => user.id === selection.entryUserId)
      } 
    }

    function datesFilter(entryDates, selection) {
      if (selection.entryUserId.length === 0 && selection.month.length === 0) {
        return entryDates;
      } else if (selection.entryUserId === "" && selection.month.length > 0) {
        return entryDates.map((arr) => arr.filter((item) => item === selection.month));
      } else if (selection.month.length > 0) {
        return [[selection.month]]
      } else if (selection.entryUserId.length > 0) {
        return [getEntryDates(selection.entryUserId)]
      } else if (selection.entryUserId.length > 0 && selection.month.length > 0) {
        return [[selection.month]]
      }
    }

    let entryFilter = entriesFilter(entry, selectFilter);
    let userFilter = usersFilter(users, selectFilter);
    let dateFilter = datesFilter(entryDates, selectFilter);

    const entryFilterUsers = 
      entryFilter
        .map((item) => item.user)
        //reduce this to array of users in the selected month
    
    return (
        <>
          <div className="projListHeading">
            <h2>Monthly Hours per Person</h2>
          </div>

          {console.log(users)}
          {console.log(entryFilterUsers)}

          <div className="filter-bar">
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
                {users
                  .sort((a, b) => a.name - b.name)
                  .map((user, idx) => (
                      <option key={idx} value={user.id}>
                        {user.name}
                      </option>
                ))}
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
                {entryDateArray
                    .map((month, idx) => (
                        <option key={idx} value={month}>
                            {month}
                        </option>
                ))}  
            </select>
          </div>

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
            {userFilter.map((user, idx) => (
              <div className="table" key={idx}>
                <h2>{user.name}</h2>
                {dateFilter[idx].map((month, idx) => (
                  <React.Fragment key={idx}>
                    <h5 className="c-1">{month}</h5>
                    {entryFilter
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