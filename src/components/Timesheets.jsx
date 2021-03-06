import React, { useState } from "react";
import { RenderContext } from "../context/RenderContext";
import { AuthContext } from "../context/AuthContext";

import AddIcon from '@material-ui/icons/Add';

import PunchCard from "./PunchCard";
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

    const entryDatesMonthArray = entryDates
      .map((item, idx) => new Date(item)
            .toLocaleString('default', { month: 'long' })
            + " "
            + new Date(item).getFullYear())
      .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);

    const userEntries = 
      context.entry
        .filter((item) => item.user.id === activeUser)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    
    return (
      <>
        <div className="entryHeader">
          <h3 className="timesheet-page-name-header">{`${currentUserDetails.name} ${currentUserDetails.surname}`}</h3>
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
          
        {currentUserDetails.admin && <EntryChangeUser />}
        
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
          <PunchCard 
            startDate={startDate}
            endDate={endDate}
            dateRange={dateRange}
            userEntries={userEntries}
            setAddModal={setAddModal}
            entryData={context.entryData}
            setEntryData={context.setEntryData}
            toggle={context.toggle}
          />
          
          {entryDatesMonthArray.map((month, idx) => (
            <React.Fragment key={idx}>
              <h4 className="monthHeading">{month}</h4>
              {entryDates
                .filter((date) => (new Date(date)
                  .toLocaleString('default', { month: 'long' })
                  + " "
                  + new Date(date).getFullYear()) === month)
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
            </React.Fragment>
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