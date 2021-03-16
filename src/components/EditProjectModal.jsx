import React from 'react';
import ReactDOM from 'react-dom';

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function EditProjectModal({ 
    isShowing, 
    hide, 
    formData, 
    updateProject, 
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
            <div className="newproject-form modal">
                <div className="modal-header">
                    <h1>Edit Project: {formData.name}</h1>  
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
                    value={formData.status}
                    required
                    onChange={handleAddData}>
                        <option value="" disabled hidden>Please select Project Status...</option>
                        <option value="Quote">Quote</option>
                        <option value="Current">Current</option>
                        <option value="Complete">Complete</option>   
                </select>
                <br/>
                <button onClick={() => updateProject(formData)}>
                    Update
                </button>
            </div>
        </div>
    </React.Fragment>, document.body
    ) : null;
}

