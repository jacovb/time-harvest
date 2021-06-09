import React from 'react';
import { AuthContext } from "../context/AuthContext";
import { RenderContext } from "../context/RenderContext";

export default function Home() {
  const { userInfo } = React.useContext(AuthContext)
  const context = React.useContext(RenderContext);
  const currentUser = context.users
    .filter((item) => item.id === userInfo.username)[0];
  
  console.log(userInfo);

  //try setting above information in a UseEffect???

  return (
    <>
      {/* <h3 className="homePageWelcome">Welcome, {`${currentUser.name} ${currentUser.surname}`}</h3> */}
      {/* <p>{userInfo.username}</p> */}
    </>
  )

}