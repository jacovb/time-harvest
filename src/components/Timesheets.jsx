import React, { useState } from "react";
import { RenderContext } from "../context/RenderContext";
import { AuthContext } from "../context/AuthContext";
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import AddIcon from '@material-ui/icons/Add';

import EntryChangeUser from "./EntryChangeUser";
import AddEntryModal from "./AddEntryModal";
import EditEntryModal from "./EditEntryModal";
import EntryListRow from "./EntryListRow";

export default function Timesheets() {
  
    const context = React.useContext(RenderContext)
    const { currentUserDetails } = React.useContext(AuthContext)

    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    function getDayOfWeek(date, dayOfWeek) {
      const d = new Date(date);
      let resultDate = new Date(d.getTime());
      resultDate.setDate(d.getDate() + (7 + dayOfWeek - d.getDay()) % 7)
      return resultDate;
    }
    
    const endDate = getDayOfWeek(new Date().setMonth(new Date().getMonth() + 1), 6).toISOString().split('T')[0];
    const startDate = getDayOfWeek(new Date().setMonth(new Date().getMonth() - 5), -1).toISOString().split('T')[0];

    const getDatesBetween = (startDate, endDate) => {
      let dates = []
      const theDate = new Date(startDate)
      while (new Date(theDate) <= new Date(endDate)) {
        dates = [...dates, new Date(theDate).toISOString().split('T')[0]]
        theDate.setDate(theDate.getDate() + 1)
      }
      dates = [...dates, endDate]
      return dates
    }

    const dateRange = getDatesBetween(startDate, endDate);

    const activeUser = context.entryUserId.entryUserId !== context.startEntryUserId.entryUserId ?
      context.entryUserId.entryUserId :
      currentUserDetails.id
    
    const entryDates = 
      context.entry
        .filter((item) => item.user.id === activeUser)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((item, idx) => (item.date))
        .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);

    const userEntries = 
      context.entry
        .filter((item) => item.user.id === activeUser)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    
    return (
      <>
        <div className="entryHeader">
          <h3 className="homePageWelcome">{`${currentUserDetails.name} ${currentUserDetails.surname}`}</h3>

          {currentUserDetails.admin && <EntryChangeUser />}

          <button
            className="addButton" 
            onClick={() => {
                setAddModal(true)
                context.toggle()
              }
            }>
              <AddIcon />
            <span className="edit-tooltip">Add Entry</span>
          </button>
        </div>
        
        {addModal && <AddEntryModal
            isShowing={context.isShowing}
            hide={context.toggle}
            entryData={context.entryData}
            createEntry={context.createEntry}
            handleAddEntry={context.handleAddEntry}
            projects={context.projects}
            startEntryForm={context.startEntryForm}
            setEntryData={context.setEntryData}
            setAddModal={setAddModal}
          />}
          
        <div className="entryList">
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
                  context.setEntryData({
                    ...context.entryData,
                    date: e.date
                  })
                  setAddModal(true)
                  context.toggle()
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
          
          {entryDates
            .map((entryDate, idx) => (
              <EntryListRow 
                key={idx}
                entryDate={entryDate}
                userEntries={userEntries}
                setEntryData={context.setEntryData}
                setEditModal={setEditModal}
                toggle={context.toggle}
              />
            ))}
          {editModal && <EditEntryModal
            isShowing={context.isShowing}
            hide={context.toggle}
            entryData={context.entryData}
            updateEntry={context.updateEntry}
            deleteEntry={context.deleteEntry}
            handleAddEntry={context.handleAddEntry}
            projects={context.projects}
            startEntryForm={context.startEntryForm}
            setEntryData={context.setEntryData}
            setEditModal={setEditModal}
          />}
        </div>
          
      </>
    )
}