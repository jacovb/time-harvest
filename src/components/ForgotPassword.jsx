import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function ForgotPassword() {
  const {register, handleSubmit} = useForm();
  const authContext = React.useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      await authContext.forgotPassword(data.email);
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
        <input type="submit" value="Submit" className="signin-button" />
        
        <Link to="/forgotpasswordsubmit" className="forgot-password">
          Renew Password...
        </Link>

        <p className="signup-link">
          Remember your Password? - please <Link to="/signin"><strong>Sign In</strong></Link>
        </p>
      </form>
    </>
  );
}
