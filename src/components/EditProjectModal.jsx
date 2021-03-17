import React from 'react';
import ReactDOM from 'react-dom';

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function EditProjectModal({ 
    isShowing, 
    hide, 
    formData, 
    updateProject,
    deleteProject, 
    handleAddData,
    startForm,
    setFormData 
}) {
    
    return isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay" />
        <div 
            className="modal-wrapper" 
            aria-modal 
            aria-hidden 
            tabIndex={-1} 
            role="dialog"
        >
            <div className="project-form modal">
                <div className="modal-header">
                    <h2>Edit Project:</h2> 
                    <button 
                        type="button" 
                        className="modal-close-button" 
                        data-dismiss="modal" 
                        aria-label="Close" 
                        onClick={() => {
                            hide();
                            setFormData(startForm);
                        }}>
                            <span aria-hidden="true">
                                <HighlightOffIcon />
                            </span>
                    </button>   
                </div>

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
                            <option value="" disabled hidden>Please select Project Status...</option>
                            <option value="Quote">Quote</option>
                            <option value="Current">Current</option>
                            <option value="Complete">Complete</option>   
                    </select>
                </div>
                
                <button 
                    className="update-button" 
                    onClick={() => updateProject(formData)}>
                    Update
                </button>

                <button 
                    className="delete-button" 
                    onClick={() => deleteProject(formData)}>
                    Delete Project
                </button>
            </div>
        </div>
    </React.Fragment>, document.body
    ) : null;
}

