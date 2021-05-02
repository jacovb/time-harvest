import React from 'react';

import { Auth } from 'aws-amplify';

const defaultState = {
  sessionInfo: {},
  userInfo: {
    email: null,
    name: null
  },
  isSignedIn: false
};

export const AuthContext = React.createContext(defaultState);

export const AuthIsSignedIn = ({children}) => {
  const {isSignedIn} = React.useContext(AuthContext);
  return <>{isSignedIn ? children : null}</>
};

export const AuthIsNotSignedIn = ({children}) => {
  const {isSignedIn} = React.useContext(AuthContext);
  return <>{!isSignedIn ? children : null}</>
}

// const AuthProvider