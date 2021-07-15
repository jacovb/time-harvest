import React from 'react';

import { Auth, API } from 'aws-amplify';

import { getUser } from "../graphql/queries";

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

const initializeUser = {
  name: "",
  surname: "",
  admin: false,
  department: "",
  email: "",
  id: "",
}

const initializeInfo = {
  username: ""
}

const AuthProvider = ({children}) => {
  const [isSignedIn, setIsSignedIn] = React.useState();
  const [sessionInfo, setSessionInfo] = React.useState({});
  const [userInfo, setUserInfo] = React.useState(initializeInfo);
  const [currentUserDetails, setCurrentUserDetails] = React.useState(initializeUser);

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

  const getUserDetails = async (userId) => {
    try {
      const currentUserData = await API.graphql({ query: getUser, variables: { id: userId } });
      return currentUserData;
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

  React.useEffect(() => {
    async function getCurrentUserDetails() {
      try {
        const userDetails = await getUserDetails(userInfo.username);
        setCurrentUserDetails(userDetails.data.getUser);
      } catch (err) {
        console.log(err);
      }
    }
    getCurrentUserDetails(); 
  }, [userInfo, setUserInfo]);

  if (isSignedIn === null || undefined) {
    return null;
  }

  const signUp = async (
    email, 
    password,
    name,
    surname,
    department,
    admin,
  ) => {
    const result = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
    });
    await API.graphql({
      query: createUserMutation,
      variables: { input: {
        id: result.userSub,
        name: name,
        surname: surname,
        department: department,
        email: email,
        admin: admin,
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
    currentUserDetails,
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