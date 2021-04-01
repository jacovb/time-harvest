import React, { useState } from "react";

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
        {console.log(entry)}
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