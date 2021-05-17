import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function ForgotPasswordSubmit() {
  const {register, handleSubmit} = useForm();
  const authContext = React.useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      await authContext.forgotPasswordSubmit(data.email, data.code, data.newPassword);
      // navigate verfication
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="signin-form"> 
        <label htmlFor="email" className="signin-label">Email:</label>
        <input {...register("email", { required: true })} className="signin-input" id="email" autoComplete="off"/>
        <label htmlFor="code" className="signin-label">Verification Code sent to your email address:</label>
        <input {...register("code", { required: true })} className="signin-input" id="code" autoComplete="off"/>
        <label htmlFor="newPassword" className="signin-label">Please enter New Password:</label>
        <input {...register("newPassword", { required: true })} className="signin-input" id="newPassword" autoComplete="off" type="password"/>
        
        <input type="submit" value="Submit" className="signin-button" />
        
        <p className="signup-link">
          Ready to <Link to="/signin"><strong>Sign In</strong></Link>
        </p>
      </form>
    </>
  );
}
