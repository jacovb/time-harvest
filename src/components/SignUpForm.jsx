import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignUpForm() {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px', margin: 'auto'}}> 
      <input {...register("name", { required: true })} style={{ marginBottom: '10px'}} id="name"/>
      <input {...register("email", { required: true })} style={{ marginBottom: '10px'}} id="email" />
      <input {...register("password", { required: true })} style={{ marginBottom: '10px'}} id="password" />
      <input {...register("confirmPassword", { required: true })} style={{ marginBottom: '10px'}} id="confirmPassword" />
      <input type="submit" />
    </form>
  );
}
