import React, { useState } from "react";
import { RenderContext } from "../context/RenderContext";
import { AuthContext } from "../context/AuthContext";
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import AddIcon from '@material-ui/icons/Add';

import AddEntryModal from "./AddEntryModal";
import EditEntryModal from "./EditEntryModal";
import EntryListRow from "./EntryListRow";

export default function Timesheets() {
  
    const context = React.useContext(RenderContext)
    const authContext = React.useContext(AuthContext)
    console.log("AuthContext", authContext.userInfo);

    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    const endDate = new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0]
    const startDate = new Date(new Date().setMonth(new Date().getMonth() - 5)).toISOString().split('T')[0]

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

    const entryDates = 
      context.entry
        .filter((item) => item.user.id === context.entryUserId.entryUserId)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((item, idx) => (item.date))
        .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);

    const userEntries = 
      context.entry
        .filter((item) => item.user.id === context.entryUserId.entryUserId)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    
    return (
      <>
        <div className="entryHeader">
          <div className="project-form">
            <label htmlFor="user">Project User: </label>
            <select 
              type="text"
              id="user"
              name="entryUserId"
              value={context.entryUserId.entryUserId}
              onChange={context.handleSetEntryUser}>
                <option value="" hidden>-- Select Project User --</option>
                {context.users
                  .sort((a, b) => a.name - b.name)
                  .map((user, idx) => (
                      <option key={idx} value={user.id}>
                        {user.name}
                      </option>
                ))}  
            </select>
          </div>

          <button
            className="addButton" 
            onClick={() => {
              if (context.entryUserId.entryUserId === "") {
                alert("Please select a User");
                return;
              } else {
                setAddModal(true)
                context.toggle()
              }
            }}>
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
                if (context.entryUserId.entryUserId === "") {
                  alert("Please select a User");
                  return;
                } else {
                  context.setEntryData({
                    ...context.entryData,
                    date: e.date
                  })
                  setAddModal(true)
                  context.toggle()
                }
              }}
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