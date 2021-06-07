import React from 'react';
import ReactDOM from 'react-dom';

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import useKeypress from '../hooks/useKeypress';

export default function EditUserModal({ 
      isShowing, 
      hide, 
      userData, 
      updateUser,
      deleteUser, 
      handleAddUser, 
      // users, 
      setUserData, 
      startUserForm,
      setEditModal 
    }) {

    function closeModal() {
      hide();
      setEditModal(false);
      setUserData(startUserForm);
    }  
    
    useKeypress('Escape', () => {
        closeModal();
      });
    
    return isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        {console.log(userData)}
        <div className="modal-overlay" />
        <div 
            className="modal-wrapper" 
            aria-modal 
            aria-hidden 
            tabIndex={-1} 
            role="dialog"
            onClick={(e) => {
              if (e.target.className === "modal-wrapper") {
                closeModal();
              }
            }}
        >
            <div className="timesheet-form modal">
                <div className="modal-header-entry">
                    <h2>Edit User:</h2>  
                    <button 
                        type="button" 
                        className="modal-close-button" 
                        data-dismiss="modal" 
                        aria-label="Close" 
                        onClick={closeModal}>
                            <span aria-hidden="true">
                                <HighlightOffIcon />
                            </span>
                    </button>   
                </div>
                
                <div className="fullwidth-input">
                    <label htmlFor="name" className="label-name">
                        Name:
                    </label>
                    <input 
                        type="text"
                        id="name"
                        value={userData.name}
                        name="name"
                        onChange={handleAddUser}
                    />
                </div>
                
                <div className="fullwidth-input">
                    <label htmlFor="surname" className="label-name">
                        Surname:
                    </label>
                    <input
                        type="text"
                        id="surname"
                        value={userData.surname}
                        name="surname"
                        onChange={handleAddUser}
                    />     
                </div>

                <div className="fullwidth-input">
                    <label className="label-name">
                        Email:
                    </label>
                    <p>{userData.email}</p>     
                </div>

                
                
                {/* department
                is User Admin? */}
                
                <button 
                    className="update-button-entry"
                    onClick={() => {
                      setEditModal(false);
                      updateUser(userData)
                      }}>
                        Update
                </button>

                <button 
                    className="delete-button-entry"
                    onClick={() => {
                      setEditModal(false);
                      deleteUser(userData);
                    }}>
                        Delete User
                </button>
            </div>
        </div>
    </React.Fragment>, document.body
    ) : null;
}

