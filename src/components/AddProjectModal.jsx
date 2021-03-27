import React from 'react';
import ReactDOM from 'react-dom';

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import useKeypress from '../hooks/useKeypress';

export default function AddProjectModal({ 
    isShowing, 
    hide, 
    formData, 
    handleAddData,
    startForm,
    setFormData,
    createProject,
    setAddModal,
}) {
  
    useKeypress('Escape', () => {
      alert('you pressed escape!')
    });

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
                    <h2>Add New Project:</h2> 
                    <button 
                        type="button" 
                        className="modal-close-button" 
                        data-dismiss="modal" 
                        aria-label="Close" 
                        onClick={() => {
                            hide();
                            setAddModal(false);
                            setFormData(startForm);
                        }}>
                            <span aria-hidden="true">
                                <HighlightOffIcon />
                            </span>
                    </button>   
                </div>

                <div className="fullwidth-input">
                    <label htmlFor="addProjName" className="label-name">
                        Project Name:
                    </label>
                    <input 
                        type="text"
                        id="addProjName"
                        value={formData.name}
                        name="name"
                        onChange={handleAddData}
                        autoComplete="off"
                        required
                    />
                </div>

                <div className="halfwidth-input-left">
                    <label htmlFor="addProjNo" className="label-name">
                        Project Number:
                    </label>
                    <input 
                        type="text"
                        id="addProjNo"
                        value={formData.projectNo}
                        name="projectNo"
                        onChange={handleAddData}
                        autoComplete="off"
                        required
                    />
                </div>
                
                <div className="halfwidth-input-right">
                    <label htmlFor="addProjHours" className="label-name">
                        Allowed Hours:
                    </label>
                    <input 
                        type="number"
                        id="addProjHours"
                        value={formData.allowedHours}
                        name="allowedHours"
                        onChange={handleAddData}
                    />
                </div>
                
                <div className="fullwidth-input">
                    <label htmlFor="addStatus" className="label-status">
                        Project Status:
                    </label>
                    <select type="text"
                        id="addStatus"
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
                
                <button onClick={() => {
                      setAddModal(false);
                      createProject(formData);
                      }}>
                    Add New Project
                </button>

            </div>
        </div>
    </React.Fragment>, document.body
    ) : null;
}

