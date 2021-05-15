import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import VerifySignUpForm from "./VerifySignUpForm";

export default function RenderUnAuthenticatedRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/signin" component={SignInForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/verifycode" component={VerifySignUpForm} />
      </Switch>
    </>
  )
}
