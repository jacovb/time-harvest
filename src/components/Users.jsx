import React from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { RenderContext } from "../context/RenderContext";

export default function Users() {

  const context = React.useContext(RenderContext);

    return (
      <>
        <div className="userHeading">
          <h2>Users</h2>
        </div>
        {/* <div className="project-form">
          <div className="fullwidth-input">
            <label htmlFor="userName">Name: </label>
            <input 
                type="text"
                id="userName"
                value={context.userData.name}
                name="name"
                onChange={context.handleAddUser}
                required
            />
          </div>

          <div className="fullwidth-input">
            <label htmlFor="userSurname">Surname: </label>
            <input 
                type="text"
                id="userSurname"
                value={context.userData.surname}
                name="surname"
                onChange={context.handleAddUser}
                required
            />
          </div>

          <div className="fullwidth-input">
            <label htmlFor="userEmail">Email Address: </label>
            <input 
                type="email"
                id="userEmail"
                value={context.userData.email}
                name="email"
                onChange={context.handleAddUser}
                required
            />
          </div>
          
          <div className="fullwidth-input">
            <label htmlFor="addDepartment">Department: </label>
            <select 
                type="text"
                id="addDepartment"
                name="department"
                value={context.userData.department}
                required
                onChange={context.handleAddUser}>
                    <option value="" disabled hidden>-- Select Department --</option>
                    <option value="Coordination">Coordination</option>
                    <option value="Technical">Technical</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Construction">Construction</option>   
            </select>
          </div>
          <button onClick={context.createUser}>Add New User</button>
        </div> */}
        <div className="userList">
            {context.users
              .map((user, idx) => (
                <div className="userRow" key={idx}>
                  <div>{`${user.name} ${user.surname}`}</div>
                  <div>{user.department}</div>
                  <button
                    onClick={() => context.deleteUser(user)}
                  >
                    <MoreHorizIcon />
                  </button>
                </div>
              ))}
          </div>
      </>
    )
}