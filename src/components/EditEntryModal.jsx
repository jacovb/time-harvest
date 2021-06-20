import React from 'react';
import ReactDOM from 'react-dom';

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import useKeypress from '../hooks/useKeypress';

export default function EditEntryModal({ 
      isShowing, 
      hide, 
      entryData, 
      updateEntry,
      deleteEntry, 
      handleAddEntry, 
      projects, 
      setEntryData, 
      startEntryForm,
      setEditModal 
    }) {

    function closeModal() {
      hide();
      setEditModal(false);
      setEntryData(startEntryForm);
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
            <div className="timesheet-form modal">
                <div className="modal-header-entry">
                    <h2>Edit Entry:</h2>  
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
                    <label htmlFor="date" className="label-name">
                        Date:
                    </label>
                    <input 
                        type="date"
                        id="date"
                        value={entryData.date}
                        name="date"
                        onChange={handleAddEntry}
                    />
                </div>
                
                <div className="halfwidth-input-left">
                    <label htmlFor="projNo" className="label-name">
                        Project Number:
                    </label>
                    <br/>
                    <select
                        type="text"
                        id="projNo"
                        value={entryData.entryProjectId}
                        name="entryProjectId"
                        onChange={handleAddEntry}>
                        {projects
                            .sort((a, b) => a.projectNo - b.projectNo)
                            .map((project, idx) => (
                                <option key={idx} value={project.id}>
                                    {project.projectNo}
                                </option>
                        ))}  
                    </select>
                </div>

                <div className="halfwidth-input-right">
                    {projects
                    .filter((project) => project.id === entryData.entryProjectId)
                    .map((project, idx) => (
                        <p key={idx}>{project.name}</p>
                    ))}
                </div>


                <div className="halfwidth-input-left">
                    <label htmlFor="editTime" className="label-name">
                        Time:
                    </label>
                    <input 
                        type="text"
                        id="editTime"
                        value={entryData.time}
                        name="time"
                        onChange={handleAddEntry}
                        required
                    />
                </div>

                <div className="fullwidth-input">
                    <label htmlFor="editDescription" className="label-name">
                        Description:
                    </label>
                    <select 
                        type="text"
                        id="editDescription"
                        value={entryData.description}
                        name="description"
                        required
                        onChange={handleAddEntry}>
                        <option value="" disabled hidden>-- Select Description --</option>
                        <option value="3D Modelling">3D Modelling</option>
                        <option value="2D Drawings">2D Drawings</option>
                        <option value="Admin">Admin</option>
                        <option value="Coordination">Coordination</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Connection Check">Connection Check</option>
                        <option value="Site Inspection">Site Inspection</option>
                        <option value="Site Management">Site Management</option>
                    </select>
                </div>
                
                <button 
                    className="update-button-entry"
                    onClick={() => {
                      setEditModal(false);
                      updateEntry(entryData)
                      }}>
                        Update
                </button>

                <button 
                    className="delete-button-entry"
                    onClick={() => {
                      setEditModal(false);
                      deleteEntry(entryData);
                    }}>
                        Delete Entry
                </button>
            </div>
        </div>
    </React.Fragment>, document.body
    ) : null;
}

