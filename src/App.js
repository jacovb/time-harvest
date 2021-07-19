import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import RenderAuthenticatedRoutes from "./components/RenderAuthenticatedRoutes";
import RenderUnAuthenticatedRoutes from "./components/RenderUnAuthenticatedRoutes";

//Auth Context
import AuthProvider, {
  AuthIsNotSignedIn,
  AuthIsSignedIn,
} from "./context/AuthContext";

import RenderContextProvider from "./context/RenderContext";
import ProjectContextProvider from "./context/ProjectContext";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <h1>Punch-Card</h1>
      <Router>
        <div id="mainContainer">
          <AuthProvider>
            <AuthIsNotSignedIn>
              <RenderUnAuthenticatedRoutes />
            </AuthIsNotSignedIn>
            <AuthIsSignedIn>
              <RenderContextProvider>
                <ProjectContextProvider>
                  <UserContextProvider>
                    <RenderAuthenticatedRoutes />
                  </UserContextProvider>
                </ProjectContextProvider>
              </RenderContextProvider>
            </AuthIsSignedIn>
          </AuthProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
