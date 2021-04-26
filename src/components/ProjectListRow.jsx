import React from 'react';
import ProgressRing from './ProgressRing';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function ProjectListRow ({
  project,
  setFormData,
  toggle,
  setEditModal
}) {
  
  function totalAllowedTime(data) {
    return (+data.allowTimeTechnical) +
    (+data.allowTimeCoordination) +
    (+data.allowTimeEngineering) +
    (+data.allowTimeConstruction)
  }

  function totalUsedTime(data) {
    return (+data.usedTimeTechnical) +
    (+data.usedTimeCoordination) +
    (+data.usedTimeEngineering) +
    (+data.usedTimeConstruction)
  }
  
  return (
    <>
      <div className="projectRow">
        <div className="gridProjectNo">{project.projectNo}</div>
        <div className="gridProjectName">{project.name}</div>
        <div className="gridProjectHours">
          {totalAllowedTime(project)}
        </div>
        <div className="gridProjectStatus">{project.status}</div>
        <ProgressRing 
          className="gridProgress-ring"
          usedHours={totalUsedTime(project)}
          allowedHours={totalAllowedTime(project)}
          circleSize="90"
          />
        <button
          className="editButton"
          onClick={() => {
            setFormData(project);
            setEditModal(true);
            toggle();
          }}
        >
          <MoreHorizIcon />
          <span className="edit-tooltip">Edit</span>
        </button>
      </div>
    </>
  )
}