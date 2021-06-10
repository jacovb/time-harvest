import React from 'react';
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { userInfo, currentUserDetails } = React.useContext(AuthContext)  
  
  console.log("currentUserDetails", currentUserDetails);

  //try setting above information in a UseEffect???

  return (
    <>
      <h3 className="homePageWelcome">Welcome, {`${currentUserDetails.name} ${currentUserDetails.surname}`}</h3>
      {/* <p>{userInfo.username}</p> */}
    </>
  )

}