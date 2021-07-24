import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import VerifySignUpForm from "./VerifySignUpForm";
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordSubmit from "./ForgotPasswordSubmit";

export default function RenderUnAuthenticatedRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SignInForm} />
        <Route exact path="/signin" component={SignInForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/verifycode" component={VerifySignUpForm} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/forgotpasswordsubmit" component={ForgotPasswordSubmit} />
      </Switch>
    </>
  )
}
