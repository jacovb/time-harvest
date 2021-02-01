import React, {useState} from "react";

const startEntryForm = {
    projectNo: "",
    user: "",
    date: null,
    description: "",
    time: null,
  };

export default function Timesheets({projects}) {
    // const [entry, setEntry] = useState([])
    const [entryFormData, setEntryFormData] = useState(startEntryForm)
    
    return (
        <>
            <h2>Add Timesheet Entry</h2>
            {/* {projects
                .sort((a, b) => a.projectNo - b.projectNo)
                .map((project, idx) => (
                <div key={idx}>
                    <p>{project.projectNo}</p>
                </div>
            ))}   */}
            <label htmlFor="projNo">Project Number: </label>
            <select 
                type="text"
                id="projNo"
                name="projectNo"
                onChange={console.log(entryFormData)}>
                    {projects
                        .sort((a, b) => a.projectNo - b.projectNo)
                        .map((project, idx) => (
                        <div key={idx}>
                            <option value={`${project.projectNo}`}>{project.projectNo}</option>
                        </div>
                    ))}  
            </select>
        </>
    )
}