import React, { useContext, useState, useEffect } from 'react';

import { API } from "aws-amplify";
import { listUsers } from "../graphql/queries";

import {
  createUser as createUserMutation,
  updateUser as updateUserMutation,
  deleteUser as deleteUserMutation,
} from "../graphql/mutations";

import { RenderContext } from '../context/RenderContext'

const startUserForm = {
  name: "",
  surname: "",
  email: "",
  department: "",
  admin: false,
  status: "",
};

export const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState(startUserForm);

  const renderContext = useContext(RenderContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  // ===============
  // List Properties
  // ===============

  async function fetchUsers() {
    try {
      const apiData = await API.graphql({ query: listUsers });
      setUsers(apiData.data.listUsers.items);
    } catch (error) {
      console.log(error);
    }
  }

  // =================
  // Create Properties
  // =================

  async function createUser() {
    if (!userData.name) return;
    try {
      await API.graphql({
        query: createUserMutation,
        variables: { input: userData },
      });
      setUsers([...users, userData]);
      setUserData(startUserForm);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }

  // =================
  // Update Properties
  // =================

  async function updateUser(userData) {
    try {
      await API.graphql({
        query: updateUserMutation,
        variables: {
          input: {
            id: userData.id,
            name: userData.name,
            surname: userData.surname,
            department: userData.department,
            admin: userData.admin,
            status: userData.status,
          },
        },
      });
      renderContext.toggle();
      fetchUsers();
    } catch (error) {
      console.log(error)
    }
  }

  // =================
  // Delete Properties
  // =================

  async function deleteUser({ id }) {
    const newUsersArray = users.filter((user) => user.id !== id);
    setUsers(newUsersArray);
    try {
      await API.graphql({
        query: deleteUserMutation,
        variables: { input: { id } },
      });
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }

  // ==============
  // Event Handlers
  // ==============

  function handleAddUser(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSetEntryUser(e) {
    let user = users.filter((item) => item.id === e.target.value)[0];
    renderContext.setEntryUserId({
      ...renderContext.entryUserId,
      [e.target.name]: e.target.value,
      entryUserDept: user.department,
    });
  }

  const state = {
    users,
    createUser,
    updateUser,
    deleteUser,
    userData,
    setUserData,
    handleAddUser,
    handleSetEntryUser,
    startUserForm,
  }

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>

};

export default UserContextProvider;