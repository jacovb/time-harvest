import React from 'react';
import ReactDOM from 'react-dom';

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function EditEntryModal({ 
        isShowing, 
        hide, 
        entryData, 
        UpdateEntry,
        deleteEntry, 
        handleAddEntry, 
        projects, 
        setEntryData, 
        startEntryForm 
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
            <div className="timesheet-form modal">
                <div className="modal-header">
                    <h2>Edit Entry:</h2>  
                    <button 
                        type="button" 
                        className="modal-close-button" 
                        data-dismiss="modal" 
                        aria-label="Close" 
                        onClick={() => {
                            hide();
                            setEntryData(startEntryForm);
                        }}>
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
                    className="update-button"
                    onClick={() => UpdateEntry(entryData)}>
                        Update
                </button>

                <button 
                    className="delete-button"
                    onClick={() => deleteEntry(entryData)}>
                        Delete Entry
                </button>
            </div>
        </div>
    </React.Fragment>, document.body
    ) : null;
}

