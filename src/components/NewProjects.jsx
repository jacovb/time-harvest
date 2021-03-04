import React from "react";

export default function NewProjects({formData, createProject, handleAddData}) {
    
    // needs to check if project number already exists

    return (
        <form className="label-to-bottom">
            <h2>Add New Projects</h2>
            <div>
                <input 
                    type="text"
                    id="projNo"
                    value={formData.projectNo}
                    name="projectNo"
                    onChange={handleAddData}
                    required
                />
                <label htmlFor="projNo">Project Number: </label>
            </div>
            <div>
                <input 
                    type="text"
                    id="projName"
                    value={formData.name}
                    name="name"
                    onChange={handleAddData}
                />
                <label htmlFor="projName">Project Name: </label>
            </div>
            <div>
                <input 
                    type="number"
                    id="projHours"
                    value={formData.allowedHours}
                    name="allowedHours"
                    onChange={handleAddData}
                />
                <label htmlFor="projHours">Allowed Hours: </label>
            </div>
            <div>
                <select type="text"
                    id="status"
                    name="status"
                    onChange={handleAddData}>
                        <option value="Quote">Quote</option>
                        <option value="Current">Current</option>
                        <option value="Complete">Complete</option>   
                </select>
                <label htmlFor="status">Project Status: </label>
            </div>
            <button onClick={createProject}>Add New Project</button>
        </form>
    )
}