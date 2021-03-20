import React from "react";

export default function NewProjects({formData, createProject, handleAddData}) {
    
    // needs to check if project number already exists

    return (
        <form className="project-form">
            <h2>Add New Projects</h2>
            <div className="fullwidth-input">
                <label htmlFor="projName" className="label-name">
                    Project Name:
                </label>
                <input 
                    type="text"
                    id="projName"
                    value={formData.name}
                    name="name"
                    onChange={handleAddData}
                    autoComplete="off"
                    required
                />
            </div>
            <div className="halfwidth-input-left">
                <label htmlFor="projNo" className="label-name">
                    Project Number:
                </label>
                <input 
                    type="text"
                    id="projNo"
                    value={formData.projectNo}
                    name="projectNo"
                    onChange={handleAddData}
                    autoComplete="off"
                    required
                />
            </div>
            <div className="halfwidth-input-right">
                <label htmlFor="projHours" className="label-name">
                    Allowed Hours:
                </label>
                <input 
                    type="number"
                    id="projHours"
                    value={formData.allowedHours}
                    name="allowedHours"
                    onChange={handleAddData}
                    required
                />
            </div>
            <div className="fullwidth-input">
                <label htmlFor="status" className="label-status">
                    Project Status:
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