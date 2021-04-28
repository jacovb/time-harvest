import React from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';

const SignUpForm = () => {
  const { register, handleSubmit } = useForm();
  const authContext = React.useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      await authContext.signUp(data.email, data.password);
      // navigate verification
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px'}}>
      <input {...register("name", { required: true })} style={{ marginBottom: '10px'}}/>
      <input {...register("email", { required: true })} style={{ marginBottom: '10px'}} id="email" />
      <input {...register("password", { required: true })} style={{ marginBottom: '10px'}} id="password" />
      <input {...register("confirmPassword", { required: true })} id="confirmPassword" />
      <input type="submit" />
    </form>
)
}

export default SignUpForm;