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

  // function getFirstAndLastDayOfWeek(day) {
  //   let d = new Date(day);
  //   let first = d.getDate() - d.getDay();
  //   let last = first + 6;
  
  //   let firstday = new Date(d.setDate(first)).toISOString().split('T')[0];
  //   let lastday = new Date(d.setDate(last)).toISOString().split('T')[0];
  //   return [firstday, lastday];
  // }

  function getFirstAndLastDayOfWeek(week) {
    let year = week[0];
    let weekNo = week[1];
    let d = new Date("Jan 01, " + year + " 01:00:00");
    let w = d.getTime() + 604800000 * (weekNo - 1); // 1 week in milliseconds
    let firstday = new Date(w);
    let lastday = new Date(w + 518400000) // 6 days in milliseconds
    return [firstday.toISOString().split('T')[0], lastday.toISOString().split('T')[0]] 
  }

  const entryDates = 
    context.users.map((user) => {
      return context.entry
        .filter((item) => item.user.id === user.id)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((item, idx) => new Date(item.date)
          .toISOString().split('T')[0])
        .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])
    })

  const entryDateArray = 
    entryDates
      .reduce((a, b) => {
          return a.concat(b)
        }, [])
      .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])

  const weekNumbersRaw = entryDateArray
    .map((date, idx) => getWeekNumber(date))
    .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
  
  const weekNumbersArray = Array.from(new Set(weekNumbersRaw.map(JSON.stringify)), JSON.parse)
  
  console.log(entryDates);
  console.log(entryDateArray);
  console.log(weekNumbersArray.sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1]));
  console.log(getFirstAndLastDayOfWeek([2021, 11]));
  
  return (
      <>
        <div className="projListHeading">
          <h2>Weekly Hours per Person</h2>
        </div>
      </>
  )
}