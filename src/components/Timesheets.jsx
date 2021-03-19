import React from "react";

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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
    return (
        <>
            <h2 className="entryListHeading">Add Timesheet Entry</h2>
            
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
            
            <br/>
            <br/>
            <label htmlFor="date">Date: </label>
            <input 
                type="date"
                id="date"
                value={entryData.date}
                name="date"
                onChange={handleAddEntry}
            />
            
            <br/>
            <label htmlFor="projNo">Project Number: </label>
            <select 
                type="text"
                id="projNo"
                name="entryProjectId"
                onChange={handleAddEntry}>
                    {projects
                        .sort((a, b) => a.projectNo - b.projectNo)
                        .map((project, idx) => (
                            <option key={idx} value={project.id}>
                                {project.projectNo}
                            </option>
                    ))}  
            </select>
            
            {projects
                .filter((project) => project.id === entryData.entryProjectId)
                .map((project, idx) => (
                    <p key={idx}>{project.name}</p>
                ))
            }

            <br/>
            <label htmlFor="description">Description: </label>
            <input 
                type="text"
                id="description"
                value={entryData.description}
                name="description"
                onChange={handleAddEntry}
            />

            <br/>
            <label htmlFor="time">Time Spent: </label>
            <input 
                type="number"
                id="time"
                value={entryData.time}
                name="time"
                onChange={handleAddEntry}
            />

            <br/>
            <button onClick={createEntry}>Submit Entry</button>
            
            <br/>
            <br/>

            <div className="entryList">
                {entry
                    .filter((item) => item.user.id === entryUserId.entryUserId)
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((item, idx) => (
                    <div className="entryRow" key={idx}>
                        <div className="entryDate">{item.date}</div>
                        <div className="entryProjectNo">
                            {item.project.projectNo}
                        </div>
                        <div className="entryProjectName">
                            {item.project.name}
                        </div>
                        <div className="entryDescription">{item.description}</div>
                        <div className="entryTime">{item.time}</div>
                        <button
                            className="editButton"
                            onClick={() => {
                                setEntryData({ 
                                    ...item, 
                                    entryProjectId: item.project.id,
                                    prevProjectId: item.project.id
                                })
                                toggle();
                            }}
                        >
                            <MoreHorizIcon />
                            <span className="edit-tooltip">Edit</span>
                        </button>
                    </div>
                ))}
                <EditEntryModal
                    isShowing={isShowing}
                    hide={toggle}
                    entryData={entryData}
                    UpdateEntry={UpdateEntry}
                    deleteEntry={deleteEntry}
                    handleAddEntry={handleAddEntry}
                    projects={projects}
                    startEntryForm={startEntryForm}
                    setEntryData={setEntryData}
                />
            </div>
        </>
    )
}