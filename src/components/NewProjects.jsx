import React from "react";

export default function NewProjects({formData, createProject, handleAddData}) {
    
    // needs to check if project number already exists

    return (
        <form className="newproject-form">
            <h2>Add New Projects</h2>
            <div className="fullwidth-input">
                <input 
                    type="text"
                    id="projName"
                    value={formData.name}
                    name="name"
                    onChange={handleAddData}
                    autoComplete="off"
                    required
                />
                <label htmlFor="projName" className="label-name">
                    <span className="content-name">Project Name:</span> 
                </label>
            </div>
            <div className="halfwidth-input-left">
                <input 
                    type="text"
                    id="projNo"
                    value={formData.projectNo}
                    name="projectNo"
                    onChange={handleAddData}
                    autoComplete="off"
                    required
                />
                <label htmlFor="projNo" className="label-name">
                    <span className="content-name">Project Number:</span>
                </label>
            </div>
            <div className="halfwidth-input-right">
                <input 
                    type="number"
                    id="projHours"
                    value={formData.allowedHours}
                    name="allowedHours"
                    onChange={handleAddData}
                    required
                />
                <label htmlFor="projHours" className="label-name">
                    <span className="content-name">Allowed Hours:</span>
                </label>
            </div>
            <div className="fullwidth-input">
                <label htmlFor="status" className="label-status">
                    <span className="content-status">Project Status:</span>
                </label>
                <select type="text"
                    id="status"
                    name="status"
                    value={formData.status}
                    required
                    onChange={handleAddData}>
                        <option value="" disabled hidden>-- Select Project Status --</option>
                        <option value="Quote">Quote</option>
                        <option value="Current">Current</option>
                        <option value="Complete">Complete</option>   
                </select>
            </div>
            <button onClick={createProject}>Add New Project</button>
        </form>
    )
}