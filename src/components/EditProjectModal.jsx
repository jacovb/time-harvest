import React from 'react';
import ReactDOM from 'react-dom';

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import useKeypress from '../hooks/useKeypress';

export default function EditProjectModal({ 
    isShowing, 
    hide, 
    formData, 
    updateProject,
    deleteProject, 
    handleAddData,
    startForm,
    setFormData,
    setEditModal 
}) {

  function closeModal() {
    hide();
    setEditModal(false);
    setFormData(startForm);
  }  
  
  useKeypress('Escape', () => {
      closeModal();
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
                    <h2>Edit Project:</h2> 
                    <button 
                        type="button" 
                        className="modal-close-button" 
                        data-dismiss="modal" 
                        aria-label="Close" 
                        onClick={closeModal}>
                            <span aria-hidden="true">
                                <HighlightOffIcon />
                            </span>
                    </button>   
                </div>

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
                            <option value="" disabled hidden>Please select Project Status...</option>
                            <option value="Quote">Quote</option>
                            <option value="Current">Current</option>
                            <option value="Complete">Complete</option>   
                    </select>
                </div>
                
                <button 
                    className="update-button" 
                    onClick={() => {
                      setEditModal(false);
                      updateProject(formData);
                      setFormData(startForm);
                      }}>
                    Update
                </button>

                <button 
                    className="delete-button" 
                    onClick={() => {
                      setEditModal(false);
                      deleteProject(formData);
                      setFormData(startForm);
                      }}>
                    Delete Project
                </button>
            </div>
        </div>
    </React.Fragment>, document.body
    ) : null;
}

