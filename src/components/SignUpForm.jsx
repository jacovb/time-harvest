import React from 'react';
import { useForm } from 'react-hook-form';
import { Link  } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function SignUpForm() {
  const {register, handleSubmit} = useForm();
  const authContext = React.useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      await authContext.signUp(data.email, data.password);
      // navigate verfication
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px', margin: 'auto'}}> 
        <label htmlFor="name">Name:</label>
        <input {...register("name", { required: true })} style={{ marginBottom: '10px'}} id="name" autoComplete="off"/>
        <label htmlFor="email">Email:</label>
        <input {...register("email", { required: true })} style={{ marginBottom: '10px'}} id="email" autoComplete="off"/>
        <label htmlFor="password">Password:</label>
        <input {...register("password", { required: true })} style={{ marginBottom: '10px'}} id="password" autoComplete="off" type="password"/>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input {...register("confirmPassword", { required: true })} style={{ marginBottom: '10px'}} id="confirmPassword" autoComplete="off" type="password"/>
        <input type="submit" />
      </form>
      <Link to="/signin" >
        <input type="button" value="Sign In" />
      </Link>
    </>
  );
}
