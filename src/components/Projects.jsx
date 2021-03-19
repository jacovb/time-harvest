import React from "react";

import EditProjectModal from "./EditProjectModal";
import ProgressRing from "./ProgressRing";

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function Projects({
  projects, 
  setFormData, 
  deleteProject, 
  UpdateProject, 
  formData, 
  handleAddData, 
  isShowing, 
  toggle,
  startForm
}) {
  
    return (
        <>
            <h2 className="projListHeading">Projects</h2>
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
                      <div className="gridProjectStatus">{project.status}</div>
                      <ProgressRing 
                        className="gridProgress-ring"
                        project={project}/>
                      <button
                        className="editButton"
                        onClick={() => {
                          setFormData(project);
                          toggle();
                        }}
                      >
                        <MoreHorizIcon />
                        <span className="edit-tooltip">Edit</span>
                      </button>
                    </div>
                  ))}
                <EditProjectModal
                  isShowing={isShowing}
                  hide={toggle}
                  formData={formData}
                  updateProject={UpdateProject}
                  handleAddData={handleAddData}
                  startForm={startForm}
                  setFormData={setFormData}
                  deleteProject={deleteProject}
                />
              </div>
        </>
    )
}