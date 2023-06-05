import React, {useState} from 'react'
import '../App.css'
import Login from '../components/LoginForm'

function SignupForm ({Signup}) {
  const [details, setDetails] = useState({firstname:"",lastname:"",phone:"",email:"",password:"",confirmpassword:""});
    
  const submitHandler = e => {
    e.preventDefault();

    Signup(details);
  }

  return(
    <form onSubmit={submitHandler}>
        <div className='wrapper'>
           <div className='signup'>
           <h2 className='mb-4'>Welcome to Capsul.</h2>
              <h3 className='mb-4'>Lets set you up so you can create your capsul </h3>
            </div>

              
              <button  Already have an account? <a href='#'>Log in</a>
              </p>

            <form className='needs validation'>
                <div className='form-group was validated mb-2'>
                    <label htmlFor='first' 
                     className='form-label'>First Name</label>
                    <input type='first' className='form-control'required></input>
                    <div className='invalid-feedback'></div>

                    <label htmlFor='last' className='form-label'>Last Name</label>
                    <input type='last' className='form-control'required></input>
                    <div className='invalid-feedback'></div>
                      </div>
                      </form>

                    <div className='form-group was validated mb-2'>
                    <label htmlFor='phone' className='form-label'>Phone</label>
                    <input type='phone' className='form-control'required></input>
                    <div className='invalid-feedback'></div>

                    <label htmlFor='email' className='form-label'>Email Address</label>
                    <input type='email' className='form-control'required></input>
                    <div className='invalid-feedback'></div>
                    </div>

                <div className='form-group was validated mb-2'>
                    <label htmlFor='pass' className='form-label'>Password</label>
                    <input type='pass' className='form-control'required></input>
                    <div className='invalid-feedback'></div>

                    <label htmlFor='confirm' className='form-label'>Confirm Password</label>
                    <input type='confirm' className='form-control'required></input>
                    <div className='invalid-feedback'></div>
                      </div>

                      <div className='form-group form-check mb-2'>
                        <input type='checkbox' className='form-check-input'></input>
                        <label htmlFor='check' className='form-check-label'>
                          I want to receive news for Capsul(a wise decision,<br>promise we'll send you great stuff)</br>
                        </label>
                      </div>
                      <div className='form-group form-check mb-2'>
                        <input type='checkbox' className='form-check-input'></input>
                        <label htmlFor='check' className='form-check-label'>
                          I agree to the<a href='#'> Terms Privacy Policy</a>
                        </label>
                      </div>

                      <button type='submit' className='btn btn-success mt-2'>SIGNUP</button>

                       </div>
                       </form>
                      
                       
                    
    )
  }

export default SignupForm