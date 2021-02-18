import React from "react";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
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
    updateProjectUsedHours, 
    entryUserId, 
    toggle, 
    isShowing,
    deleteEntry,
    UpdateEntry,
}) {
    return (
        <>
            <h2>Add Timesheet Entry</h2>
            
            <label htmlFor="user">Project User: </label>
            <select 
                type="text"
                id="user"
                name="entryUserId"
                onChange={handleSetEntryUser}>
                    {users
                        .sort((a, b) => a.name - b.name)
                        .map((user, idx) => (
                            <option key={idx} value={user.id}>{user.name}</option>
                    ))}  
            </select>
            
            {console.log("user name: ", entryUserId.entryUserId)}
            
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
                            <option key={idx} value={project.id}>{project.projectNo}</option>
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
            <button onClick={() => updateProjectUsedHours(entryData)}>Update Project Hours</button>

            {console.log(entry)}
            <div>
                {entry
                    .filter((item) => item.user.id === entryUserId.entryUserId)
                    .map((item, idx) => (
                    <div className="projectRow" key={idx}>
                        <div>{item.date}</div>
                        <div>{item.project.name}</div>
                        <div>{item.description}</div>
                        <div>{item.time}</div>
                        <button
                            className="gridEditButton"
                            onClick={() => {
                                setEntryData(item);
                                // add entryUserId && entryProjectId to entryData to be able to have selected entry displayed in dropdown "select"
                                toggle();
                                console.log("Edit Entry: " ,entryData);
                            }}
                        >
                            <EditIcon />
                        </button>
                        <button
                            className="gridDeleteButton"
                            onClick={() => deleteEntry(item)}
                        >
                            <HighlightOffIcon />
                        </button>
                    </div>
                ))}
                <EditEntryModal
                    isShowing={isShowing}
                    hide={toggle}
                    entryData={entryData}
                    UpdateEntry={UpdateEntry}
                    handleAddEntry={handleAddEntry}
                    projects={projects}
                    users={users}
                />
            </div>
        </>
    )
}