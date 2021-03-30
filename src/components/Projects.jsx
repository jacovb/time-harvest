import React, { useState } from "react";

import EditProjectModal from "./EditProjectModal";
import AddProjectModal from "./AddProjectModal";
import ProgressRing from "./ProgressRing";

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add';

export default function Projects({
  projects,
  setFormData,
  createProject, 
  deleteProject, 
  UpdateProject, 
  formData, 
  handleAddData,
  handleHours, 
  isShowing, 
  toggle,
  startForm
}) {

    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    return (
      <>
        <div className="projListHeading">
          <h2>Projects</h2>
          
          <button 
            className="addButton"
            onClick={() => {
              setAddModal(true);
              toggle()
            }}>
              <AddIcon />
            <span className="edit-tooltip">New Project</span>
          </button>
        </div>

        {addModal && <AddProjectModal 
          isShowing={isShowing}
          hide={toggle}
          formData={formData}
          handleAddData={handleAddData}
          handleHours={handleHours}
          startForm={startForm}
          setFormData={setFormData}
          createProject={createProject}
          setAddModal={setAddModal}
        />}

        <div className="projectsList">
            {projects
              .sort((a, b) => a.projectNo - b.projectNo)
              .map((project, idx) => (
                <div className="projectRow" key={idx}>
                  <div className="gridProjectNo">{project.projectNo}</div>
                  <div className="gridProjectName">{project.name}</div>
                  <div className="gridProjectHours">
                    {project.allowedHours.technical +
                    project.allowedHours.coordination +
                    project.allowedHours.engineering +
                    project.allowedHours.construction }
                  </div>
                  <div className="gridProjectStatus">{project.status}</div>
                  {/* <ProgressRing 
                    className="gridProgress-ring"
                    project={project}/> */}
                  <button
                    className="editButton"
                    onClick={() => {
                      setFormData(project);
                      console.log(project);
                      setEditModal(true);
                      toggle();
                    }}
                  >
                    <MoreHorizIcon />
                    <span className="edit-tooltip">Edit</span>
                  </button>
                </div>
              ))}
            {editModal && <EditProjectModal
              isShowing={isShowing}
              hide={toggle}
              formData={formData}
              updateProject={UpdateProject}
              handleAddData={handleAddData}
              startForm={startForm}
              setFormData={setFormData}
              deleteProject={deleteProject}
              setEditModal={setEditModal}
            />}
        </div>
      </>
    )
}