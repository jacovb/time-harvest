import React, { useState, useContext } from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CheckIcon from '@material-ui/icons/Check';
import { RenderContext } from "../context/RenderContext";
import { UserContext } from "../context/UserContext";
import EditUserModal from "./EditUserModal";

export default function Users() {

  const [editModal, setEditModal] = useState(false);
  const renderContext = useContext(RenderContext);
  const userContext = useContext(UserContext);

  function usersFilter(users, selection) {
    if (selection.userStatus.length > 0) {
      return userContext.users.filter((user) => user.status === renderContext.selectFilter.userStatus)
    } else {
      return userContext.users
    }
  } 

  const userFilter = usersFilter(userContext.users, renderContext.selectFilter);

  return (
    <>
      <div className="userHeading">
        <h2>Users</h2>
      </div>

      <div className="filter-bar-users">
        <label className="main-label">Filter by</label>
        <label htmlFor="userStatus" className="label">
          Currently Employed: 
        </label>
        
        <select
          className="select-status"
          type="text"
          id="userStatus"
          value={renderContext.selectFilter.userStatus}
          name="userStatus"
          required
          onChange={renderContext.handleFilter}>
            <option value="">Show All</option>
            <option value="Employed">Yes</option>
            <option value="Inactive">No</option>
        </select>
      </div>
      
      <div className="userList">
        <div className="userListHeading">
          <div>Name</div>
          <div>Department</div>
          <div className="checkIcon">Admin</div>
        </div>
          {userFilter
            .map((user, idx) => (
              <div className="userRow" key={idx}>
                <div>{`${user.name} ${user.surname}`}</div>
                <div>{user.department}</div>
                <div className="checkIcon">{user.admin ? <CheckIcon/> : ""}</div>
                <button
                  className="editButton userEditButton"
                  onClick={() => {
                    userContext.setUserData(user);
                    setEditModal(true);
                    renderContext.toggle()
                  }}
                >
                  <MoreHorizIcon />
                  <span className="edit-tooltip">Edit</span>
                </button>
              </div>
            ))}
            {editModal && <EditUserModal 
              isShowing={renderContext.isShowing}
              hide={renderContext.toggle}
              userData={userContext.userData}
              updateUser={userContext.updateUser}
              deleteUser={userContext.deleteUser}
              handleAddUser={userContext.handleAddUser}
              setUserData={userContext.setUserData}
              startUserForm={userContext.startUserForm}
              setEditModal={setEditModal}
            />}
        </div>
    </>
  )
}