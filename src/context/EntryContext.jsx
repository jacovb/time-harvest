import React, { useContext, useState, useEffect } from 'react';

import { API } from "aws-amplify";
import { listEntrys } from "../graphql/queries";

import {
  createEntry as createEntryMutation,
  deleteEntry as deleteEntryMutation,
  updateEntry as updateEntryMutation,
} from "../graphql/mutations";

import { RenderContext } from '../context/RenderContext'
import { AuthContext } from "../context/AuthContext";

const startEntryForm = {
  entryProjectId: "",
  date: "",
  description: "",
  time: "",
};

export const EntryContext = React.createContext();

const EntryContextProvider = ({children}) => {
  const [entry, setEntry] = useState([]);
  const [entryData, setEntryData] = useState(startEntryForm);

  const { userInfo } = useContext(AuthContext);
  const renderContext = useContext(RenderContext);

  useEffect(() => {
    fetchEntries();
  }, []);

  // ===============
  // List Properties
  // ===============

  async function fetchEntries() {
    try {
      const apiData = await API.graphql({ query: listEntrys });
      setEntry(apiData.data.listEntrys.items);
    } catch (error) {
      console.log(error);
    }
  }

  // =================
  // Create Properties
  // =================

  async function createEntry() {
    if (!entryData.date) return;
    if (renderContext.entryUserId !== renderContext.startEntryUserId) {
      entryData.entryUserId = renderContext.entryUserId.entryUserId
    } else {
      entryData.entryUserId = userInfo.username;
    }
    try {
      await API.graphql({
        query: createEntryMutation,
        variables: { input: entryData },
      });
      fetchEntries();
      renderContext.toggle();
    } catch (error) {
      console.log(error);
    }
  }

  // =================
  // Update Properties
  // =================

  async function updateEntry(entryData) {
    try {
      await API.graphql({
        query: updateEntryMutation,
        variables: {
          input: {
            id: entryData.id,
            entryProjectId: entryData.entryProjectId,
            date: entryData.date,
            description: entryData.description,
            time: entryData.time,
          },
        },
      });
      renderContext.toggle();
      fetchEntries();
    } catch (error) {
      console.log(error);
    }
  }

  // =================
  // Delete Properties
  // =================

  async function deleteEntry({ id }) {
    // get deleted entry's Project ID - this is needed to update Project Used Hours
    const getProjectId = entry.filter((item) => item.id === id);
    setEntryData({ ...entryData, entryProjectId: getProjectId[0].project.id });

    // delete entry from DynamoDB and fetch all entries when done
    try {
      await API.graphql({
        query: deleteEntryMutation,
        variables: { input: { id } },
      });
      fetchEntries();
      renderContext.toggle();
    } catch (error) {
      console.log(error);
    }
  }

  // ==============
  // Event Handlers
  // ==============

  function handleAddEntry(e) {
    setEntryData({ ...entryData, [e.target.name]: e.target.value });
  }

  const state = {
    entry,
    createEntry,
    updateEntry,
    deleteEntry,
    startEntryForm,
    entryData,
    setEntryData,
    handleAddEntry,
  };

  return <EntryContext.Provider value={state}>{children}</EntryContext.Provider>

};

export default EntryContextProvider;