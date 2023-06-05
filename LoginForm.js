import React, { useState } from "react";

export const login = (props) => { 
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="form-outer">
                <h2>login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>
                    </div>

                    <button type='submit' className='btn btn-joy tm-3'>login</button>
            </div>
        </form>
        <button onClick={} =>  props.onFormSwitch('Signup')>Don't have an account? login</button>
        </>
    )
}
}
export default LoginForm
