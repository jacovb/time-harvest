import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function SignUpForm() {
  const history = useHistory();
  const {register, handleSubmit} = useForm();
  const authContext = React.useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      await authContext.signUp(data.email, data.password, data.name, data.surname, data.department);
      history.push('./verifycode')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="signin-form"> 
        <label htmlFor="name" className="signin-label">Name:</label>
        <input {...register("name", { required: true })} className="signin-input" id="name" autoComplete="off"/>
        <label htmlFor="surname" className="signin-label">Surname:</label>
        <input {...register("surname", { required: true })} className="signin-input" id="surname" autoComplete="off"/>
        <label htmlFor="email" className="signin-label">Email:</label>
        <input {...register("email", { required: true })} className="signin-input" id="email" autoComplete="off"/>
        <label htmlFor="department" className="signin-label-left">Department:</label>
        <label htmlFor="admin" className="signin-label-right">Is this an Admin Role?</label>
        <select {...register("department", { required: true })} className="signin-option" id="department">
          <option value="" disabled hidden>-- Select Department --</option>
          <option value="Coordination">Coordination</option>
          <option value="Technical">Technical</option>
          <option value="Engineering">Engineering</option>
          <option value="Construction">Construction</option>
        </select>
        <input 
          {...register("admin", {required: true})}
          name="admin"
          value="false"
          className="checkbox"
          type="checkbox"
        />
        <label htmlFor="password" className="signin-label">Password:</label>
        <input {...register("password", { required: true })} className="signin-input" id="password" autoComplete="off" type="password"/>
        <label htmlFor="confirmPassword" className="signin-label">Confirm Password:</label>
        <input {...register("confirmPassword", { required: true })} className="signin-input" id="confirmPassword" autoComplete="off" type="password"/>
        <input type="submit" className="signin-button"/>
        {/* <Link to="/verifycode" className="forgot-password">
          Verify Password...
        </Link> */}
        <p className="signup-link">
          Already Signed Up? <Link to="/signin"><strong>Sign In</strong></Link>
        </p>
      </form>
    </>
  );
}
