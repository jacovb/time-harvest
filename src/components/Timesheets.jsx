import React from "react";

export default function Timesheets({projects, users, handleAddEntry, handleSetEntryUser, entryData, createEntry, updateProjectUsedHours, entryUserId}) {
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
            
            {users
                .filter((user) => user.id === entryData.entryUserId)
                .map((user, idx) => (
                    <p key={idx}>{user.name}</p>
                ))
            }
            
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


        </>
    )
}