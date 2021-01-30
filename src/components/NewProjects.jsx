import React from "react";

export default function NewProjects({formData, createProject, handleAddData}) {
    
    // function handleAddProjects() { 
    //     if (projects.some((item) => item.projectNo === newProject.projectNo)) {
    //         alert("Project Number Already Exists") 
    //     } else {
    //         setProjects([...projects, newProject])
    //         setNewProject({
    //             projectNo: "",
    //             projectName: "",
    //             projectAllowedHours: "", 
    //         }) 
    //     }
    // }

    return (
        <>
            <p>Add New Projects</p>
            <label htmlFor="projNo">Project Number: </label>
            <input 
                type="text"
                id="projNo"
                value={formData.projectNo}
                name="projectNo"
                onChange={handleAddData}
                required
            />
            <br/>
            <label htmlFor="projName">Project Name: </label>
            <input 
                type="text"
                id="projName"
                value={formData.name}
                name="name"
                onChange={handleAddData}
            />
            <br/>
            <label htmlFor="projHours">Allowed Hours: </label>
            <input 
                type="number"
                id="projHours"
                value={formData.allowedHours}
                name="allowedHours"
                onChange={handleAddData}
            />
            <br/>
            <label htmlFor="status">Project Status: </label>
            <select type="text"
                id="status"
                name="status"
                onChange={handleAddData}>
                    <option value="Quote">Quote</option>
                    <option value="Current">Current</option>
                    <option value="Complete">Complete</option>   
            </select>
            <br/>
            <button onClick={createProject}>Add New Project</button>
        </>
    )
}