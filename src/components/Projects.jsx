import React from "react";

import EditProjectModal from "./EditProjectModal";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";

export default function Projects({
  projects, 
  setFormData, 
  deleteProject, 
  UpdateProject, 
  formData, 
  handleAddData, 
  isShowing, 
  toggle
}) {
  
    const radius = 36;
    const circum = 2 * Math.PI * radius;
  
    return (
        <>
            <h2>Projects</h2>
            <div className="projectsList">
                {projects
                  .sort((a, b) => a.projectNo - b.projectNo)
                  .map((project, idx) => (
                    <div className="projectRow" key={idx}>
                      <div className="gridProjectNo">{project.projectNo}</div>
                      <div className="gridProjectName">{project.name}</div>
                      <div className="gridProjectHours">
                        {project.allowedHours}
                      </div>
                      <svg
                        className="progress-ring"
                        height="90"
                        width="90"
                      >
                        <circle
                          className="background-circle"
                          stroke-width="2"
                          fill="transparent"
                          r={radius}
                          cx="45"
                          cy="45"
                          stroke="lightgrey"
                          transform="rotate(-90) translate(-90 0)"
                        />
                        <circle
                          className="progress-circle"
                          stroke-width="5"
                          fill="transparent"
                          r={radius}
                          cx="45"
                          cy="45"
                          stroke="blue"
                          strokeDasharray={circum}
                          strokeDashoffset={circum * ((100 - (project.usedHours / project.allowedHours * 100)) / 100)}
                          transform="rotate(-90) translate(-90 0)"
                        />
                      </svg>
                      <div className="gridProjectStatus">{project.status}</div>
                      <button
                        className="gridEditButton"
                        onClick={() => {
                          setFormData(project);
                          toggle();
                        }}
                      >
                        <EditIcon />
                      </button>
                      <button
                        className="gridDeleteButton"
                        onClick={() => deleteProject(project)}
                      >
                        <HighlightOffIcon />
                      </button>
                    </div>
                  ))}
                <EditProjectModal
                  isShowing={isShowing}
                  hide={toggle}
                  formData={formData}
                  updateProject={UpdateProject}
                  handleAddData={handleAddData}
                />
              </div>
        </>
    )
}