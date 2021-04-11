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
  
  function totalAllowedTime(data) {
    return (+data.allowTimeTechnical) +
    (+data.allowTimeCoordination) +
    (+data.allowTimeEngineering) +
    (+data.allowTimeConstruction)
  }
  
  function closeModal() {
    hide();
    setAddModal(false);
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
                    <h2>Add New Project:</h2> 
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

                <div className="input-left">
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
                
                <div className="double-input-23">
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
                
                <div className="input-left">
                    <label htmlFor="addProjHours" className="label-name">
                        Allowed Hours:
                    </label>
                </div>
                
                <div className="input-middle">
                    <label htmlFor="addProjHours" className="label-name">
                        Technical:
                    </label>
                    <input 
                        type="number"
                        id="addProjHours"
                        value={formData.allowTimeTechnical}
                        name="allowTimeTechnical"
                        onChange={handleAddData}
                    />
                </div>

                <div className="input-middle">
                    <label htmlFor="addProjHours" className="label-name">
                        Coordination:
                    </label>
                    <input 
                        type="number"
                        id="addProjHours"
                        value={formData.allowTimeCoordination}
                        name="allowTimeCoordination"
                        onChange={handleAddData}
                    />
                </div>

                <div className="input-middle">
                    <label htmlFor="addProjHours" className="label-name">
                        Engineering:
                    </label>
                    <input 
                        type="number"
                        id="addProjHours"
                        value={formData.allowTimeEngineering}
                        name="allowTimeEngineering"
                        onChange={handleAddData}
                    />
                </div>
                
                <div className="input-middle">
                    <label htmlFor="addProjHours" className="label-name">
                        Construction:
                    </label>
                    <input 
                        type="number"
                        id="addProjHours"
                        value={formData.allowTimeConstruction}
                        name="allowTimeConstruction"
                        onChange={handleAddData}
                    />
                </div>

                <div className="input-right">
                    <label className="label-name">
                        Total:
                    </label>
                    <h2>{totalAllowedTime(formData)}</h2>
                </div>

                <div className="double-input-23">
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

