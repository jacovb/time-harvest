import React from 'react';
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { currentUserDetails } = React.useContext(AuthContext)  
  
  console.log("currentUserDetails", currentUserDetails);

  return (
    <>
      <h3 className="homePageWelcome">Welcome, {`${currentUserDetails.name} ${currentUserDetails.surname}`}</h3>
    </>
  )

}