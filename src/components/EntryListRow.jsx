import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function EntryListRow({
  entryDate,
  userEntries,
  setEntryData,
  setEditModal,
  toggle,
}) {
  
  return (
    <div className="entryRow">
      <div className="entryDate">{entryDate}</div>
      {userEntries
        .filter((obj) => obj.date === entryDate)
        .map((obj, id) => (
        <React.Fragment key={id}>
          <div className="entryProjectNo">
            {obj.project.projectNo}
          </div>
          <div className="entryProjectName">
            {obj.project.name}
          </div>
          <div className="entryDescription">{obj.description}</div>
          <div className="entryTime">{obj.time}</div>
          <button
            className="editButton"
            onClick={() => {
                  setEntryData({ 
                      ...obj, 
                      entryProjectId: obj.project.id,
                      prevProjectId: obj.project.id
                  })
                  setEditModal(true);
                  toggle();
            }}
          >
            <MoreHorizIcon />
            <span className="edit-tooltip">Edit</span>
          </button>
        </React.Fragment>
      ))}
    </div>
  )
}