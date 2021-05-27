import React from "react";
import { RenderContext } from "../context/RenderContext";

export default function WeeklyHoursBreakdown() {  
  
  const context = React.useContext(RenderContext);

  function getWeekNumber(day) {
    let d = new Date(day);
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getFullYear(),0,1));
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return [d.getFullYear(), weekNo]
  }

  function getFirstAndLastDayOfWeek(week) {
    let year = week[0];
    let weekNo = week[1];
    let oneday = new Date(year, 0, 1).getDay();
    let d = new Date("Jan 01, " + year + " 01:00:00");
    let w = d.getTime() - (3600000 * 24 * (oneday)) + 604800000 * (weekNo); // 1 week in milliseconds
    let firstday = new Date(w);
    let lastday = new Date(w + 518400000) // 6 days in milliseconds
    return [firstday, lastday] 
  }

  function weekArray(weekNumbersArray) {
    return weekNumbersArray.map((week) => getFirstAndLastDayOfWeek(week))
  }

  function getEntryDates(userId) {
    let userEntryDates = context.entry
      .filter((item) => item.user.id === userId)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((item, idx) => getWeekNumber(item.date))
      .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
    return Array.from(new Set(userEntryDates.map(JSON.stringify)), JSON.parse).sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1])
  }

  function usersFilter(users, selection, filteredEntryUsers) {
    if (selection.entryUserId.length === 0 && selection.week.length === 0) {
      return users;
    } else if (selection.entryUserId.length > 0 && selection.week.length === 0) {
      return users.filter((user) => user.id === selection.entryUserId)
    } else if (selection.entryUserId.length === 0 && selection.week.length > 0) {
      return users.filter((user) => filteredEntryUsers.includes(user.name));
    } else if (selection.entryUserId.length > 0 && selection.week.length > 0) {
      return users.filter((user) => user.id === selection.entryUserId)
    }
  }

  function entriesFilter(entry, selection) {
    if (selection.entryUserId.length === 0 && selection.week.length === 0) {
      return entry;
    } else if (selection.entryUserId === "") {
      let weekRange = getFirstAndLastDayOfWeek(selection.week.split(","))
      return entry.filter((obj) => (new Date(obj.date) > weekRange[0]) && (new Date(obj.date) < weekRange[1]))
    } else if (selection.week === "") {
      return entry.filter((obj) => selection.entryUserId === obj.user.id)
    } else if (selection.entryUserId.length > 0 && selection.week.length > 0) {
      let weekRange = getFirstAndLastDayOfWeek(selection.week.split(","))
      return entry.filter((obj) => selection.entryUserId === obj.user.id && (new Date(obj.date) > weekRange[0]) && (new Date(obj.date) < weekRange[1]));
    }
  }

  function datesFilter(weekNumbers, selection) {
    if (selection.entryUserId.length === 0 && selection.week.length === 0) {
      return weekNumbers; 
    } else if (selection.entryUserId === "" && selection.week.length > 0) {
      let selectedWeek = selection.week.split(",").map((el) => +el)
      return weekNumbers.map((arr) => arr.filter((week) => JSON.stringify(week) === JSON.stringify(selectedWeek)));
    } else if (selection.entryUserId.length > 0 && selection.week.length === 0) {
      return [getEntryDates(selection.entryUserId)];
    } else if (selection.entryUserId.length > 0 && selection.week.length > 0) {
      let selectedWeek = selection.week.split(",").map((el) => +el)
      return [[selectedWeek]]
    }
  }

  let entryFilter = entriesFilter(context.entry, context.selectFilter);
  let usersFromEntry = 
    entryFilter
      .map((item) => item.user.name)
      .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
  let userFilter = usersFilter(context.users, context.selectFilter, usersFromEntry)

  const entryDates = 
    context.users.map((user) => {
      return context.entry
        .filter((item) => item.user.id === user.id)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((item, idx) => new Date(item.date)
          .toISOString().split('T')[0])
        .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])
    })

  
  
  // Get weekNumbersArray is used in the Filter Drop-down list

  const entryDateArray = 
    entryDates
      .reduce((a, b) => {
          return a.concat(b)
        }, [])
      .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])

  const weekNumbersRaw = entryDateArray
    .map((date, idx) => getWeekNumber(date))

  const weekNumbersArray = Array.from(new Set(weekNumbersRaw.map(JSON.stringify)), JSON.parse).sort((a, b) => b[0] - a[0]).sort((a, b) => b[1] - a[1])
  
  // -------------------------------------------------------------------- //
  
  const datesToWeekNumbers = entryDates.map((userDates, idx) => userDates.map((date, idx) => getWeekNumber(date)))
  const userWeekNumbers = datesToWeekNumbers
    .map((userWeeks, idx) => Array.from(new Set(userWeeks.map(JSON.stringify)), JSON.parse)
    .sort((a, b) => a[0] - b[0])
    .sort((a, b) => a[1] - b[1]))
  const userWeekRangeArray = userWeekNumbers.map((usersWeek, idx) => weekArray(usersWeek));

  let dateFilter = datesFilter(userWeekNumbers, context.selectFilter).filter(e => e.length);
  
  console.log("entryFilter-week",entryFilter);
  console.log("userFilter-week", userFilter);
  console.log("DateFilter-week", dateFilter);
  
  return (
      <>
        <div className="projListHeading">
          <h2>Weekly Hours per Person</h2>
        </div>

        <div className="filter-bar">
            <label className="main-label">Filter by: </label>
            <label htmlFor="entryUser" className="label">
              User: 
            </label>
            <label htmlFor="entryWeek" className="label">
              Week:
            </label>
            
            <select
              className="select-user"
              type="text"
              id="entryUser"
              value={context.selectFilter.entryUserId}
              name="entryUserId"
              required
              onChange={context.handleFilter}>
                <option value="">Show All</option>
                {context.users
                  .sort((a, b) => a.name - b.name)
                  .map((user, idx) => (
                      <option key={idx} value={user.id}>
                        {user.name}
                      </option>
                ))}
            </select>
            
            <select
                className="select-month"
                id="entryWeek"
                value={context.selectFilter.week}
                name="week"
                required
                onChange={context.handleFilter}>
                <option value="">Show All</option>
                {weekNumbersArray
                    .map((week, idx) => (
                        <option key={idx} value={week}>
                            {"Week " + week[1] + ", " + week[0]}
                        </option>
                ))}  
            </select>
          </div>

        <div className="table-person">
          <div className="table-heading">
            <div className="c-1 thead">Date</div>
            <div className="c-2 thead">Project No.</div>
            <div className="c-3 thead">Name</div>
            <div className="c-4 thead">Description</div>
            <div className="c-5 thead">Time</div>
          </div>
          {userFilter.map((user, idx1) => (
            <div className="table" key={idx1}>
              <h2>{user.name}</h2>
                {dateFilter[idx1].map((week, idx2) => (
                  <React.Fragment key={idx2}>
                    <h5 className="c-1" key={idx2}>{"Week " + week[1] + ", " + week[0]}</h5>
                    {entryFilter
                      .filter((obj) => obj.user.id === user.id)
                      .filter((obj) => (new Date(obj.date) > getFirstAndLastDayOfWeek(week)[0]) && (new Date(obj.date) < getFirstAndLastDayOfWeek(week)[1]))
                      .sort((a, b) => new Date(a.date) - new Date(b.date))
                      .map((obj, idx3) => (
                        <React.Fragment key={idx3}>
                          <div className="c-1">{obj.date}</div>
                          <div className="c-2">{obj.project.projectNo}</div>
                          <div className="c-3">{obj.project.name}</div>
                          <div className="c-4">{obj.description}</div>
                          <div className="c-5">{obj.time}</div>
                      </React.Fragment>
                      ))}
                      <div className="c-5 total">
                        {context.entry
                          .filter((obj) => obj.user.id === user.id)
                          .filter((obj) => (new Date(obj.date) > getFirstAndLastDayOfWeek(week)[0]) && (new Date(obj.date) < getFirstAndLastDayOfWeek(week)[1]))
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