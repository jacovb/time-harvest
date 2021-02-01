import React, {useState} from "react";

const startEntryForm = {
    projectNo: "",
    user: "",
    date: null,
    description: "",
    time: null,
  };

export default function Timesheets({projects, users}) {
    // const [entry, setEntry] = useState([])
    const [entryFormData, setEntryFormData] = useState(startEntryForm)
    
    return (
        <>
            <h2>Add Timesheet Entry</h2>
            
            <label htmlFor="projNo">Project Number: </label>
            <select 
                type="text"
                id="projNo"
                name="projectNo"
                onChange={console.log(entryFormData)}>
                    {projects
                        .sort((a, b) => a.projectNo - b.projectNo)
                        .map((project, idx) => (
                            <option key={idx} value={project.id}>{project.projectNo}</option>
                    ))}  
            </select>

            <label htmlFor="user">Project User: </label>
            <select 
                type="text"
                id="user"
                name="name"
                onChange={console.log(entryFormData)}>
                    {users
                        .sort((a, b) => a.projectNo - b.projectNo)
                        .map((user, idx) => (
                            <option key={idx} value={user.id}>{user.name}</option>
                    ))}  
            </select>
        </>
    )
}