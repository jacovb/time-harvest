import React from 'react';
import ReactDOM from 'react-dom';

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import useKeypress from '../hooks/useKeypress';

export default function AddEntryModal({ 
      isShowing, 
      hide, 
      entryData, 
      createEntry, 
      handleAddEntry, 
      projects, 
      setEntryData, 
      startEntryForm,
      setAddModal 
    }) {
    
    function closeModal() {
      hide();
      setAddModal(false);
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
                    <h2>Add Timesheet Entry:</h2>  
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
                        className="datepicker-input"
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
                        required
                        onChange={handleAddEntry}>
                        <option value="" disabled hidden></option>
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
                    <label htmlFor="time" className="label-name">
                        Time:
                    </label>
                    <input 
                        type="text"
                        id="time"
                        value={entryData.time}
                        name="time"
                        onChange={handleAddEntry}
                        required
                    />
                </div>
                
                <div className="fullwidth-input">
                    <label htmlFor="description" className="label-name">
                        Description:
                    </label>
                    <input 
                        type="text"
                        id="description"
                        value={entryData.description}
                        name="description"
                        onChange={handleAddEntry}
                        required
                    />
                </div>
                
                <button 
                    onClick={() => {
                      setAddModal(false);
                      createEntry(entryData)
                      }}>
                        Submit Entry
                </button>
            </div>
        </div>
    </React.Fragment>, document.body
    ) : null;
}

