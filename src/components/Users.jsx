import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function Users({
  userData, 
  createUser, 
  handleAddUser, 
  users, 
  deleteUser
}) {
    return (
      <>
        {console.log(users)}
        <div className="userHeading">
          <h2>Add New Users</h2>
        </div>
        <div className="project-form">
          <div className="fullwidth-input">
            <label htmlFor="userField">User Name: </label>
            <input 
                type="text"
                id="userField"
                value={userData.name}
                name="name"
                onChange={handleAddUser}
                required
            />
          </div>
          
          <div className="fullwidth-input">
            <label htmlFor="addDepartment">Department: </label>
            <select 
                type="text"
                id="addDepartment"
                name="department"
                value={userData.department}
                required
                onChange={handleAddUser}>
                    <option value="" disabled hidden>-- Select Department --</option>
                    <option value="Coordination">Coordination</option>
                    <option value="Technical">Technical</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Construction">Construction</option>   
            </select>
          </div>
          <button onClick={createUser}>Add New User</button>
        </div>
        <div className="userList">
            {users
              .map((user, idx) => (
                <div className="userRow" key={idx}>
                  <div>{user.name}</div>
                  <div>{user.department}</div>
                  <button
                    onClick={() => deleteUser(user)}
                  >
                    <HighlightOffIcon />
                  </button>
                </div>
              ))}
          </div>
      </>
    )
}