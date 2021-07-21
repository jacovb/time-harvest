import React, { useState } from 'react';

import useModal from "../hooks/useModal";

const startEntryUserId = {
  entryUserId: "",
  entryUserDept: "",
};

const startSelectFilter = {
  status: "",
  id: "",
  entryUserId: "",
  month: "",
  week: "",
  userStatus: "",
};

export const RenderContext = React.createContext();

const RenderContextProvider = ({children}) => {
  const [entryUserId, setEntryUserId] = useState(startEntryUserId);
  const [selectFilter, setSelectFilter] = useState(startSelectFilter);
  const { isShowing, toggle } = useModal();

  // ==============
  // Event Handlers
  // ==============

  function handleFilter(e) {
    setSelectFilter({ ...selectFilter, [e.target.name]: e.target.value });
  }
  
  const state = {
    isShowing,
    toggle,
    startSelectFilter,
    startEntryUserId,
    entryUserId,
    setEntryUserId,
    selectFilter,
    setSelectFilter,
    handleFilter,
  };
  
  return <RenderContext.Provider value={state}>{children}</RenderContext.Provider>
};

export default RenderContextProvider;