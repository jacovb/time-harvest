import React, { useContext, useState } from "react";
import { RenderContext } from "../context/RenderContext";
import { ProjectContext } from "../context/ProjectContext";

import EditProjectModal from "./EditProjectModal";
import AddProjectModal from "./AddProjectModal";
import ProjectListRow from "./ProjectListRow";

import AddIcon from '@material-ui/icons/Add';

export default function Projects() {

    const renderContext = useContext(RenderContext);
    const projectContext = useContext(ProjectContext);
  
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
              renderContext.toggle()
            }}>
              <AddIcon />
            <span className="edit-tooltip">New Project</span>
          </button>
        </div>

        {addModal && <AddProjectModal 
          isShowing={renderContext.isShowing}
          hide={renderContext.toggle}
          formData={projectContext.formData}
          handleAddData={projectContext.handleAddData}
          startForm={projectContext.startForm}
          setFormData={projectContext.setFormData}
          createProject={projectContext.createProject}
          setAddModal={setAddModal}
        />}

        <div className="projects-heading">
          <div className="p-1 gridProjectNo">No.</div>
          <div className="p-2">Name</div>
          <div className="p-3">Hours Quoted</div>
          <div className="p-4">Status</div>
          <div className="p-5">Hours Used</div>
        </div>
        
        <div className="projectsList">
            {projectContext.projects
              .sort((a, b) => a.projectNo - b.projectNo)
              .map((project, idx) => (
                <ProjectListRow 
                  key={idx}
                  project={project}
                  setFormData={projectContext.setFormData} 
                  toggle={renderContext.toggle}
                  setEditModal={setEditModal}
                />
              ))}
            {editModal && <EditProjectModal
              isShowing={renderContext.isShowing}
              hide={renderContext.toggle}
              formData={projectContext.formData}
              updateProject={projectContext.updateProject}
              handleAddData={projectContext.handleAddData}
              startForm={projectContext.startForm}
              setFormData={projectContext.setFormData}
              deleteProject={projectContext.deleteProject}
              setEditModal={setEditModal}
            />}
        </div>
      </>
    )
}