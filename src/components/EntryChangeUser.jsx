import React from 'react';
import { RenderContext } from "../context/RenderContext";
import { UserContext } from "../context/UserContext";

export default function EntryChangeUser() {
  const context = React.useContext(RenderContext);
  const userContext = React.useContext(UserContext);

  return (
    <div className="change-user-box">
      <label 
        htmlFor="user" 
        className="userSelectLabel">
          Change User: 
      </label>
      <select 
        className="userSelect"
        type="text"
        id="user"
        name="entryUserId"
        value={context.entryUserId.entryUserId}
        onChange={userContext.handleSetEntryUser}>
          <option value="" hidden>-- Select Different User --</option>
          {userContext.users
            .sort((a, b) => a.name - b.name)
            .map((user, idx) => (
                <option key={idx} value={user.id}>
                  {user.name}
                </option>
          ))}  
      </select>
      <button 
        className="userResetButton"
        onClick={() => context.setEntryUserId(context.startEntryUserId)}>
        Reset
      </button>
    </div>
  )
}