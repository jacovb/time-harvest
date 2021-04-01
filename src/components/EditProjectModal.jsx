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

  function totalAllowedTime(data) {
    return (+data.allowTimeTechnical) +
    (+data.allowTimeCoordination) +
    (+data.allowTimeEngineering) +
    (+data.allowTimeConstruction)
  }
  
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
            onClick={(e) => {
              if (e.target.className === "modal-wrapper") {
                closeModal();
              }
            }}
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
                    <label htmlFor="addProjHours" className="label-name">
                        Allowed Hours (Technical):
                    </label>
                    <input 
                        type="number"
                        id="addProjHours"
                        value={formData.allowTimeTechnical}
                        name="allowTimeTechnical"
                        onChange={handleAddData}
                    />
                </div>

                <div className="halfwidth-input-right">
                    <label htmlFor="addProjHours" className="label-name">
                        Allowed Hours (Coordination):
                    </label>
                    <input 
                        type="number"
                        id="addProjHours"
                        value={formData.allowTimeCoordination}
                        name="allowTimeCoordination"
                        onChange={handleAddData}
                    />
                </div>

                <div className="halfwidth-input-right">
                    <label htmlFor="addProjHours" className="label-name">
                        Allowed Hours (Engineering):
                    </label>
                    <input 
                        type="number"
                        id="addProjHours"
                        value={formData.allowTimeEngineering}
                        name="allowTimeEngineering"
                        onChange={handleAddData}
                    />
                </div>

                <div className="halfwidth-input-right">
                    <label htmlFor="addProjHours" className="label-name">
                        Allowed Hours (Construction):
                    </label>
                    <input 
                        type="number"
                        id="addProjHours"
                        value={formData.allowTimeConstruction}
                        name="allowTimeConstruction"
                        onChange={handleAddData}
                    />
                </div>

                <div className="halfwidth-input-right">
                    <label className="label-name">
                        Total:
                    </label>
                    <h2>{totalAllowedTime(formData)}</h2>
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

