import React, { useState } from "react";

import EditProjectModal from "./EditProjectModal";
import AddProjectModal from "./AddProjectModal";
import ProjectListRow from "./ProjectListRow";

import AddIcon from '@material-ui/icons/Add';

export default function Projects({
  projects,
  setFormData,
  createProject, 
  deleteProject, 
  UpdateProject, 
  formData, 
  handleAddData, 
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
          startForm={startForm}
          setFormData={setFormData}
          createProject={createProject}
          setAddModal={setAddModal}
        />}

        <div className="projectsList">
            {projects
              .sort((a, b) => a.projectNo - b.projectNo)
              .map((project, idx) => (
                <ProjectListRow 
                  key={idx}
                  project={project}
                  setFormData={setFormData} 
                  toggle={toggle}
                  setEditModal={setEditModal}
                />
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