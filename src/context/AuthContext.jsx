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

const AuthProvider = ({children}) => {
  const [isSignedIn, setIsSignedIn] = React.useState();
  const [sessionInfo, setSessionInfo] = React.useState({});
  const [userInfo, setUserInfo] = React.useState();

  const getCurrentSession = async () => {
    try {
      const session = await Auth.currentSession();
      return session;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  const getCurrentUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return user;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  React.useEffect(() => {
    async function getSessionInfo() {
      try {
        const session = await getCurrentSession();
        const user = await getCurrentUser();

        const accessToken = session.getAccessToken();
        const refreshToken = session.getRefreshToken();
        setSessionInfo({
          accessToken,
          refreshToken,
        });
        window.localStorage.setItem('accessToken', `${accessToken}`);
        window.localStorage.setItem('refreshToken', `${refreshToken}`);
        setUserInfo({
          email: user.attributes.email,
          isContributor: user.attributes['custom:type'] === 'contributor',
          username: user.username,
        });
        setIsSignedIn(true);
      } catch (err) {
        setIsSignedIn(false);
      }
    }
    getSessionInfo();
  }, [setIsSignedIn, isSignedIn]);

  if (isSignedIn === null || undefined) {
    return null;
  }

  const signUp = async (
    email, 
    password,
  ) => {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
    });
    return user;
  }

  const verifySignUp = async (email, code) => {
    const result = await Auth.confirmSignUp(email, code);
    return result;
  }

  const signIn = async (email, password) => {
    try {
      const result = await Auth.signIn(email, password);
      setIsSignedIn(true);
      return result;
    } catch (err) {
      setIsSignedIn(false);
      throw err;
    }
  }

  const signOut = async () => {
    setIsSignedIn(false);
    setUserInfo();
    return Auth.signOut();
  };

  const forgotPassword = async (email) => {
    try {
      const result = await Auth.forgotPassword(email);
      return result;
    } catch (err) {
      console.log(err)
    }
  }

  const forgotPasswordSubmit = async (email, code, new_password) => {
    try {
      const result = await Auth.forgotPasswordSubmit(email, code, new_password);
      return result;
    } catch (err) {
      console.log(err)
    }
  }

  const state = {
    isSignedIn,
    sessionInfo,
    userInfo,
    signUp,
    signOut,
    signIn,
    verifySignUp,
    getCurrentSession,
    forgotPassword,
    forgotPasswordSubmit,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;