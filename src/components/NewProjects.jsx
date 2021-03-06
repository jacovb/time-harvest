import React from "react";

export default function NewProjects({formData, createProject, handleAddData}) {
    
    // needs to check if project number already exists

    return (
        <form className="label-to-bottom">
            <h2>Add New Projects</h2>
            <div className="projNo-section">
                <input 
                    type="text"
                    id="projNo"
                    value={formData.projectNo}
                    name="projectNo"
                    onChange={handleAddData}
                    autoComplete="off"
                    required
                />
                <label htmlFor="projNo" className="label-projNo">
                    <span className="content-name">Project Number:</span>
                </label>
            </div>
            <div className="projName-section">
                <input 
                    type="text"
                    id="projName"
                    value={formData.name}
                    name="name"
                    onChange={handleAddData}
                    autoComplete="off"
                />
                <label htmlFor="projName" className="label-projName">
                    <span className="content-name">Project Name:</span> 
                </label>
            </div>
            <div className="projHours-section">
                <input 
                    type="number"
                    id="projHours"
                    value={formData.allowedHours}
                    name="allowedHours"
                    onChange={handleAddData}
                />
                <label htmlFor="projHours" className="label-projHours">
                    <span className="content-name">Allowed Hours:</span>
                </label>
            </div>
            <div className="projStatus-section">
                <select type="text"
                    id="status"
                    name="status"
                    onChange={handleAddData}>
                        <option value="Quote">Quote</option>
                        <option value="Current">Current</option>
                        <option value="Complete">Complete</option>   
                </select>
                <label htmlFor="status" className="label-projStatus">
                    <span className="content-name">Project Status:</span>
                </label>
            </div>
            <button onClick={createProject}>Add New Project</button>
        </form>
    )
}