import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

export default function PunchCard ({
  startDate,
  endDate,
  dateRange,
  userEntries,
  setAddModal,
  entryData,
  setEntryData,
  toggle,
}) {

  return (
    <>
      <div className="calender-heatmap-container">
        <CalendarHeatmap
          startDate={new Date(startDate)}
          endDate={new Date(endDate)}
          values={dateRange.map((item) => {
            const totalDailyTime = userEntries.filter((obj) => obj.date === item).reduce((acc, curr) => acc + curr.time, 0)
            return {date: item, count: totalDailyTime}
          })}
          classForValue={(value) => {
            if (!value || value.count === 0) {
              return 'color-empty';
            } else if (value.count < 8) {
              return 'color-1';
            } else if (value.count === 8) {
              return 'color-2';
            } else if (value.count > 8) {
              return 'color-3';
            }
          }}
          onClick={(e) => {
              setEntryData({
                ...entryData,
                date: e.date
              })
              setAddModal(true)
              toggle()
            }
          }
          tooltipDataAttrs={value => {
            return {
              'data-tip': value.count === 0 
                ? `${value.date}` 
                : `${value.date} : ${value.count} Hours`,
            };
          }}
        />
        <ReactTooltip 
          delayShow={3}
          delayHide={3}
        />
      </div>
    </>
  )
}