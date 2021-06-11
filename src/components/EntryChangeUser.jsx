import React from 'react';
import { RenderContext } from "../context/RenderContext";

export default function EntryChangeUser() {
  const context = React.useContext(RenderContext);

  return (
    <div className="project-form">
      <label 
        htmlFor="user" 
        className="userSelectLabel">
          Change Project User: 
      </label>
      <select 
        className="userSelect"
        type="text"
        id="user"
        name="entryUserId"
        value={context.entryUserId.entryUserId}
        onChange={context.handleSetEntryUser}>
          <option value="" hidden>-- Select Different User --</option>
          {context.users
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