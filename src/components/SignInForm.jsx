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
      <form onSubmit={handleSubmit(onSubmit)} className="signin-form"> 
        <label htmlFor="email" className="signin-label">Email:</label>
        <input {...register("email", { required: true })} className="signin-input" id="email" autoComplete="off"/>
        <label htmlFor="password" className="signin-label">Password:</label>
        <input {...register("password", { required: true })} className="signin-input" id="password" autoComplete="off" type="password"/>
        <p style={{margin: 'auto', color: 'white'}}>{errorMessage}</p>
        <input type="submit" value="Sign In" className="signin-button" />
        <Link to="/signup" >
          <input type="button" value="Sign Up" className="signin-button"/>
        </Link>
      </form>
    </>
  );
}
