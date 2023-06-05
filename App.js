import React, { Component, useState } from "react";
import SignupForm from './components/signupForm';
import loginForm from './components/LoginForm';
import "./App.css";

function App() {
  const adminUser = {
    firstname: "salaama",
    lastname: "mohamed"
  }

  const [user, setUser] = useState({firstname:"", lastname:""});
  const [error, setError] = useState("");

  const Signup = details => {
    console.log(details);
  }  

  const login = () => {
    console.log("login");
  }

  const toggleform = (formName) => {


  return (
    <div className="App">
     <SignupForm Signup={Signup} error={error} />
     
    </div>
  )

};
}
   
   export default App