import React from 'react';
import background from './images/snap.jpg';
import{useForm} from 'react-hook-form';

export default function Form () {

const {register,handleSubmit,watch,formState:{errors}} = useForm()
const onSubmit=data => console.log(data);

console.log(watch('firstname'));

    return(
        <section>
            <div className='welcome'>
                <div className="col-1"></div>
                <div className="col-2"></div>
                <h1>Welcome to Capsul.</h1>
                <span>Lets set you up so you can create your capsul</span>

             <form id='form' className='tex flex-col' onSubmit={handleSubmit(onSubmit)}>
             <input type ="text"{...register("firstname")} placeholder='first name'/>
             <input type ="text"{...register("lastname")} placeholder='last name'/>  
             <input type ="text"{...register("phone")} placeholder='phone'/>
             <input type ="text"{...register("email")} placeholder='email'/>
             <input type ="text"{...register("password")} placeholder='password'/>
             <input type ="text"{...register("confirmpwd")} placeholder='confirm password'/>
             <button className='btn'>Signup</button>
             </form>

            </div>
         <div className="col-2">
            <img src={background}alt="" />
            </div>
        </section>
    )
}