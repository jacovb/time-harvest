import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function SignInForm() {
  const {register, handleSubmit} = useForm();
  const [errorMessage, setErrorMessage] = useState("")
  const authContext = React.useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      await authContext.signIn(data.email, data.password);
      // navigate verfication
    } catch (err) {
      setErrorMessage(err.message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px', margin: 'auto'}}> 
        <label htmlFor="email">Email:</label>
        <input {...register("email", { required: true })} style={{ marginBottom: '10px'}} id="email" autoComplete="off"/>
        <label htmlFor="password">Password:</label>
        <input {...register("password", { required: true })} style={{ marginBottom: '10px'}} id="password" autoComplete="off" type="password"/>
        <p style={{margin: 'auto', color: 'white'}}>{errorMessage}</p>
        <input type="submit" value="Sign In"/>
      </form>
      <Link to="/signup" >
        <input type="button" value="Sign Up" />
      </Link>
    </>
  );
}
