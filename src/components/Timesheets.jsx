import React, { useState } from "react";

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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
        <div className="project-form">
          <label htmlFor="user">Project User: </label>
          <select 
            type="text"
            id="user"
            name="entryUserId"
            value={entryData.entryUserId}
            onChange={handleSetEntryUser}>
              {/* <option value="" hidden>-- Select Project User --</option> */}
              {users
                .sort((a, b) => a.name - b.name)
                .map((user, idx) => (
                    <option key={idx} value={user.id}>
                      {user.name}
                    </option>
              ))}  
          </select>
        </div>
        <button onClick={() => {
          setAddModal(true)
          toggle()
          }}>Add Entry</button>
        
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
        
        {/* <div className="timesheet-form">
          <h2>Add Timesheet Entry</h2>
          <div className="fullwidth-input">
            <label htmlFor="date" className="label-name">
              Date:
            </label>
            <input 
              type="date"
              id="date"
              value={entryData.date}
              name="date"
              onChange={handleAddEntry}
              className="datepicker-input"   
            />
          </div>
            
          <div className="halfwidth-input-left">
            <label htmlFor="projNo" className="label-status">
              Project Number:
            </label>
            <select 
              type="text"
              id="projNo"
              name="entryProjectId"
              required
              onChange={handleAddEntry}>
                  {projects
                      .sort((a, b) => a.projectNo - b.projectNo)
                      .map((project, idx) => (
                          <option key={idx} value={project.id}>
                              {project.projectNo}
                          </option>
                  ))}  
            </select>
          </div>
                
          <div className="halfwidth-input-right">
            {projects
              .filter((project) => project.id === entryData.entryProjectId)
              .map((project, idx) => (
                  <p key={idx}>{project.name}</p>
              ))
            }
          </div>
          
          <div className="halfwidth-input-left">
            <label htmlFor="time" className="label-name">
              Time Spent:
            </label>
            <input 
              type="number"
              id="time"
              value={entryData.time}
              name="time"
              onChange={handleAddEntry}
              required
            />
          </div>

          <div className="fullwidth-input">
            <label htmlFor="description" className="label-name">
              Description:
            </label>
            <input 
              type="text"
              id="description"
              value={entryData.description}
              name="description"
              onChange={handleAddEntry}
              required
            />
          </div>

          <button onClick={createEntry}>Submit Entry</button>
        </div> */}
        

        <div className="entryList">
          {/* {console.log(userEntries
                        .filter((obj) => obj.date === item)
                        .reduce((acc, cur) => acc + cur))} */}
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