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

  function getFirstAndLastDayOfWeek(day) {
    let d = new Date(day);
    let first = d.getDate() - d.getDay();
    let last = first + 6;
  
    let firstday = new Date(d.setDate(first)).toISOString().split('T')[0];
    let lastday = new Date(d.setDate(last)).toISOString().split('T')[0];
    return [firstday, lastday];
  }
  
  let date = "2021-03-24"
  let weekdays = getFirstAndLastDayOfWeek(date)
  let week = getWeekNumber(date);
  console.log(date + " is in week" + week[1] + ' of ' + week[0]);
  console.log("First Day of that week is " + weekdays[0] + ", and last day of that week is " + weekdays[1]);
  console.log(context);
  
    return (
        <>
          <div className="projListHeading">
            <h2>Weekly Hours per Person</h2>
          </div>
        </>
    )
}