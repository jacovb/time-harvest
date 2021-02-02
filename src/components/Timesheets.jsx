import React from "react";

export default function Timesheets({projects, users, handleAddEntry, entryData}) {
    return (
        <>
            <h2>Add Timesheet Entry</h2>
            
            <label htmlFor="projNo">Project Number: </label>
            <select 
                type="text"
                id="projNo"
                name="projectNo"
                onChange={handleAddEntry}>
                    {projects
                        .sort((a, b) => a.projectNo - b.projectNo)
                        .map((project, idx) => (
                            <option key={idx} value={project.id}>{project.projectNo}</option>
                    ))}  
            </select>

            <br/>
            <label htmlFor="user">Project User: </label>
            <select 
                type="text"
                id="user"
                name="user"
                onChange={handleAddEntry}>
                    {users
                        .sort((a, b) => a.projectNo - b.projectNo)
                        .map((user, idx) => (
                            <option key={idx} value={user.id}>{user.name}</option>
                    ))}  
            </select>

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

            {console.log(entryData)}
        </>
    )
}