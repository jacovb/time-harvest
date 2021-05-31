import React from 'react';

import { Auth, API } from 'aws-amplify';

import {
  createUser as createUserMutation,
} from "../graphql/mutations";

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
        console.log("sessionInfo", sessionInfo);
        window.localStorage.setItem('accessToken', `${accessToken}`);
        window.localStorage.setItem('refreshToken', `${refreshToken}`);
        setUserInfo({
          email: user.attributes.email,
          isContributor: user.attributes['custom:type'] === 'contributor',
          username: user.username,
        });
        console.log("userInfo", userInfo);
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
    name,
    surname,
    department,
    // admin,
  ) => {
    const result = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
    });
    console.log("return signup result", result);
    await API.graphql({
      query: createUserMutation,
      variables: { input: {
        id: result.userSub,
        name: name,
        surname: surname,
        department: department,
        email: email,
        admin: false,
      }},
    });
    return result;

  }

  const verifySignUp = async (email, code) => {
    const result = await Auth.confirmSignUp(email, code);
    console.log("return verify result", result);
    return result;
  }

  const signIn = async (email, password) => {
    try {
      const result = await Auth.signIn(email, password);
      // let userInformation = await getCurrentUser();
      // console.log("userInfo", userInformation.username); //use this in SignUp to create a new user
      setIsSignedIn(true);
      console.log(result); //use this to get userInfo to setUser - in SignUp, use "user" to create a new User
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