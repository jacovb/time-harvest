import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function VerifySignUpForm() {
  const history = useHistory()
  const {register, handleSubmit} = useForm();
  const authContext = React.useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      await authContext.verifySignUp(data.email, data.verificationCode);
      history.push('./signin');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="signin-form"> 
        <label htmlFor="email" className="signin-label">Email:</label>
        <input {...register("email", { required: true })} className="signin-input" id="email" autoComplete="off"/>
        <label htmlFor="verificationCode" className="signin-label">Please enter Verification Code:</label>
        <input {...register("verificationCode", { required: true })} className="signin-input" id="verificationCode" autoComplete="off"/>
        <input type="submit" className="signin-button"/>
        <p className="signup-link">
          Already Signed Up? <Link to="/signin"><strong>Sign In</strong></Link>
        </p>
      </form>
    </>
  );
}
