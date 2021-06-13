import React, { useState } from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { RenderContext } from "../context/RenderContext";
import EditUserModal from "./EditUserModal";

export default function Users() {

  const [editModal, setEditModal] = useState(false);
  const context = React.useContext(RenderContext);

    return (
      <>
        <div className="userHeading">
          <h2>Users</h2>
        </div>
        
        <div className="userList">
            {context.users
              .map((user, idx) => (
                <div className="userRow" key={idx}>
                  <div>{`${user.name} ${user.surname}`}</div>
                  <div>{user.department}</div>
                  <button
                    className="editButton userEditButton"
                    onClick={() => {
                      context.setUserData(user);
                      setEditModal(true);
                      context.toggle()
                      // context.deleteUser(user)
                    }}
                  >
                    <MoreHorizIcon />
                    <span className="edit-tooltip">Edit</span>
                  </button>
                </div>
              ))}
              {editModal && <EditUserModal 
                isShowing={context.isShowing}
                hide={context.toggle}
                userData={context.userData}
                updateUser={context.updateUser}
                deleteUser={context.deleteUser}
                handleAddUser={context.handleAddUser}
                setUserData={context.setUserData}
                startUserForm={context.startUserForm}
                setEditModal={setEditModal}
              />}
          </div>
      </>
    )
}