import React, { useState, useContext } from "react";
import { RenderContext } from "../context/RenderContext";
import { AuthContext } from "../context/AuthContext";
import { EntryContext } from "../context/EntryContext";
import { ProjectContext } from "../context/ProjectContext";

import AddIcon from '@material-ui/icons/Add';

import PunchCard from "./PunchCard";
import EntryChangeUser from "./EntryChangeUser";
import AddEntryModal from "./AddEntryModal";
import EditEntryModal from "./EditEntryModal";
import EntryListRow from "./EntryListRow";

export default function Timesheets() {
  
    const renderContext = useContext(RenderContext)
    const { currentUserDetails } = useContext(AuthContext)
    const entryContext = useContext(EntryContext);
    const projectContext = useContext(ProjectContext);

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

    const activeUser = renderContext.entryUserId.entryUserId !== renderContext.startEntryUserId.entryUserId ?
      renderContext.entryUserId.entryUserId :
      currentUserDetails.id
    
    const entryDates = 
      entryContext.entry
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
      entryContext.entry
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
                renderContext.toggle()
              }
            }>
              <AddIcon />
            <span className="edit-tooltip">Add Entry</span>
          </button>
        </div>
          
        {currentUserDetails.admin && <EntryChangeUser />}
        
        {addModal && <AddEntryModal
            isShowing={renderContext.isShowing}
            hide={renderContext.toggle}
            entryData={entryContext.entryData}
            createEntry={entryContext.createEntry}
            handleAddEntry={entryContext.handleAddEntry}
            projects={projectContext.projects}
            startEntryForm={entryContext.startEntryForm}
            setEntryData={entryContext.setEntryData}
            setAddModal={setAddModal}
          />}
          
        <div className="entryList">
          <PunchCard 
            startDate={startDate}
            endDate={endDate}
            dateRange={dateRange}
            userEntries={userEntries}
            setAddModal={setAddModal}
            entryData={entryContext.entryData}
            setEntryData={entryContext.setEntryData}
            toggle={renderContext.toggle}
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
                    setEntryData={entryContext.setEntryData}
                    setEditModal={setEditModal}
                    toggle={renderContext.toggle}
                  />
                ))}
            </React.Fragment>
          ))}
          {editModal && <EditEntryModal
            isShowing={renderContext.isShowing}
            hide={renderContext.toggle}
            entryData={entryContext.entryData}
            updateEntry={entryContext.updateEntry}
            deleteEntry={entryContext.deleteEntry}
            handleAddEntry={entryContext.handleAddEntry}
            projects={projectContext.projects}
            startEntryForm={entryContext.startEntryForm}
            setEntryData={entryContext.setEntryData}
            setEditModal={setEditModal}
          />}
        </div>
          
      </>
    )
}