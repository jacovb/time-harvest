import React, { useState } from "react";
import { RenderContext } from "../context/RenderContext";

import EditProjectModal from "./EditProjectModal";
import AddProjectModal from "./AddProjectModal";
import ProjectListRow from "./ProjectListRow";

import AddIcon from '@material-ui/icons/Add';

export default function Projects() {

    const context = React.useContext(RenderContext);
  
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
              context.toggle()
            }}>
              <AddIcon />
            <span className="edit-tooltip">New Project</span>
          </button>
        </div>

        {addModal && <AddProjectModal 
          isShowing={context.isShowing}
          hide={context.toggle}
          formData={context.formData}
          handleAddData={context.handleAddData}
          startForm={context.startForm}
          setFormData={context.setFormData}
          createProject={context.createProject}
          setAddModal={setAddModal}
        />}

        <div className="projectsList">
            {context.projects
              .sort((a, b) => a.projectNo - b.projectNo)
              .map((project, idx) => (
                <ProjectListRow 
                  key={idx}
                  project={project}
                  setFormData={context.setFormData} 
                  toggle={context.toggle}
                  setEditModal={setEditModal}
                />
              ))}
            {editModal && <EditProjectModal
              isShowing={context.isShowing}
              hide={context.toggle}
              formData={context.formData}
              updateProject={context.updateProject}
              handleAddData={context.handleAddData}
              startForm={context.startForm}
              setFormData={context.setFormData}
              deleteProject={context.deleteProject}
              setEditModal={setEditModal}
            />}
        </div>
      </>
    )
}