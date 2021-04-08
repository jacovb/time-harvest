import React, { useState } from "react";
import CalendarHeatmap from 'react-calendar-heatmap';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add';

import AddEntryModal from "./AddEntryModal";
import EditEntryModal from "./EditEntryModal";

export default function Timesheets({
  projects, 
  users, 
  entry, 
  handleAddEntry, 
  handleSetEntryUser, 
  entryData,
  setEntryData, 
  createEntry, 
  entryUserId, 
  toggle, 
  isShowing,
  deleteEntry,
  UpdateEntry,
  startEntryForm,
}) {
  
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    const endDate = new Date().toISOString().split('T')[0]
    const startDate = new Date(new Date().setMonth(new Date().getMonth() - 6)).toISOString().split('T')[0]

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
      entry
        .filter((item) => item.user.id === entryUserId.entryUserId)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((item, idx) => (item.date))
        .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);

    const userEntries = 
      entry
        .filter((item) => item.user.id === entryUserId.entryUserId)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    
    return (
      <>
        {console.log(new Date().toISOString())}
        <div className="entryHeader">
          <div className="project-form">
            <label htmlFor="user">Project User: </label>
            <select 
              type="text"
              id="user"
              name="entryUserId"
              value={entryUserId.entryUserId}
              onChange={handleSetEntryUser}>
                <option value="" hidden>-- Select Project User --</option>
                {users
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
              setAddModal(true)
              toggle()
            }}>
              <AddIcon />
            <span className="edit-tooltip">Add Entry</span>
          </button>
        </div>
        
        {addModal && <AddEntryModal
            isShowing={isShowing}
            hide={toggle}
            entryData={entryData}
            createEntry={createEntry}
            handleAddEntry={handleAddEntry}
            projects={projects}
            startEntryForm={startEntryForm}
            setEntryData={setEntryData}
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
              // values={userEntries.map((entry) => {
              //   const totalDailyTime = userEntries.filter((item) => item.date === entry.date).reduce((acc, curr) => acc + curr.time, 0)
              //   return {date: entry.date, count: totalDailyTime}
              // })}
              classForValue={(value) => {
                if (!value || value.count === 0) {
                  return 'color-empty';
                } else if (value.count < 8) {
                  return 'color-github-1';
                } else if (value.count === 8) {
                  return 'color-github-2';
                } else if (value.count > 8) {
                  return 'color-github-3';
                }
              }}
              // titleForValue={(value) =>`Date is ${value.date}`}
              // onMouseOver={(e, value) => console.log(value.date, value.count)}
              onClick={(e) => {
                setEntryData({
                  ...entryData,
                  date: e.date
                })
                setAddModal(true)
                toggle()
              }}
              // tooltipDataAttrs={"tooltip"}
            />
          </div>
          
          {entryDates
            .map((item, idx) => (
              <div className="entryRow" key={idx}>
                <div className="entryDate">{item}</div>
                {userEntries
                  .filter((obj) => obj.date === item)
                  .map((obj, id) => (
                  <React.Fragment key={id}>
                    <div className="entryProjectNo">
                      {obj.project.projectNo}
                    </div>
                    <div className="entryProjectName">
                      {obj.project.name}
                    </div>
                    <div className="entryDescription">{obj.description}</div>
                    <div className="entryTime">{obj.time}</div>
                    <button
                      className="editButton"
                      onClick={() => {
                          setEntryData({ 
                              ...obj, 
                              entryProjectId: obj.project.id,
                              prevProjectId: obj.project.id
                          })
                          setEditModal(true);
                          toggle();
                      }}
                    >
                      <MoreHorizIcon />
                      <span className="edit-tooltip">Edit</span>
                    </button>
                  </React.Fragment>
                ))}
              </div>
            ))}
          {editModal && <EditEntryModal
            isShowing={isShowing}
            hide={toggle}
            entryData={entryData}
            UpdateEntry={UpdateEntry}
            deleteEntry={deleteEntry}
            handleAddEntry={handleAddEntry}
            projects={projects}
            startEntryForm={startEntryForm}
            setEntryData={setEntryData}
            setEditModal={setEditModal}
          />}
        </div>
          
      </>
    )
}