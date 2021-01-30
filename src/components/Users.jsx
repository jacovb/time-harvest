import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function Users({userData, createUser, handleAddUser, users, deleteUser}) {
    return (
        <>
            <p>Add New Users</p>
            <label htmlFor="userField">User Name: </label>
            <input 
                type="text"
                id="userField"
                value={userData.name}
                name="userName"
                onChange={handleAddUser}
                required
            />
            <br/>
            <button onClick={createUser}>Add New User</button>
            <br/>
            <div>
                {users
                  .map((user, idx) => (
                    <div key={idx}>
                      <div>{user.name}</div>
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