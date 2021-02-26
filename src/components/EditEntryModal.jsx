import React from 'react';
import ReactDOM from 'react-dom';

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function EditEntryModal({ 
        isShowing, 
        hide, 
        entryData, 
        UpdateEntry, 
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
            <div className="modal">
                {console.log("Edit Entry: " ,entryData)}
                <div className="modal-header">
                    <h1>Edit Entry:</h1>  
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
                
                <br/>
                <label htmlFor="date">Date: </label>
                <input 
                    type="date"
                    id="date"
                    value={entryData.date}
                    name="date"
                    onChange={handleAddEntry}
                />
                
                <br/>
                <label htmlFor="projNo">Project Number: </label>
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

                {projects
                .filter((project) => project.id === entryData.entryProjectId)
                .map((project, idx) => (
                    <p key={idx}>{project.name}</p>
                ))
            }

                <br/>
                <label htmlFor="description">Description: </label>
                <input 
                    type="text"
                    id="description"
                    value={entryData.description}
                    name="description"
                    onChange={handleAddEntry}
                    required
                />

                <br/>
                <label htmlFor="time">Time: </label>
                <input 
                    type="text"
                    id="time"
                    value={entryData.time}
                    name="time"
                    onChange={handleAddEntry}
                    required
                />
                
                <br/>
                <button onClick={() => UpdateEntry(entryData)}>
                    Update
                </button>
            </div>
        </div>
    </React.Fragment>, document.body
    ) : null;
}

