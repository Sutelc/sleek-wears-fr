import React, { useState } from 'react'
import "./css/loginSignUp.css"

export default function LoginSignUp() {
const [state, setState] = useState("Login")
const [formData, setFormData]= useState({
  username: "",
  email: "",
  password: ""
});

const login = async()=>{
    console.log("login function executed", formData)
    let responseData ;
    await fetch ('https://sleek-wear-backend.onrender.com/login', {
      method: 'POST',
      headers: {
      Accept:'application/form-data',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData = data)
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }else{
      alert(responseData.errors)
    }
}
const signup = async()=>{
  console.log("signup function executed", formData)
  let responseData ;
  await fetch ('https://sleek-wear-backend.onrender.com/signup', {
    method: 'POST',
    headers: {
    Accept:'application/form-data',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
  }).then((response)=>response.json()).then((data)=>responseData = data)
  if(responseData.success){
    localStorage.setItem('auth-token', responseData.token);
    window.location.replace('/');
  }else{
    alert(responseData.errors)
  }

}
const changeHandler = (e)=>{
  setFormData({...formData, [e.target.name]:e.target.value})
}

  return (
    <div className='loginSignUp'>
      <div className="loginSignUp-container">
        <h1>{state}</h1>
        <div className="loginSignUp-fields">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> :<></> }
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className="loginSignUp-login">Already have an account? <span onClick={()=>{setState("Login")}}>login here</span></p>:<p className="loginSignUp-login">Create an account? <span  onClick={()=>{setState("Sign Up")}}>click here</span></p>}
        
        <div className="loginSignUp-agree">
          <input type="checkbox" name='' id='' />
          <div>by continuing, i agree to the terms of use & privacy policy.</div>
        </div>
      </div>

    </div>
  )
}
