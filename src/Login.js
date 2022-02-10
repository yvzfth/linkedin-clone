import React from 'react'
import './Login.css'
function Login() {
  const loginToApp = () => { }
  const register = () => { }

  return (
    <div className="login">
      <img src="https://marka-logo.com/wp-content/uploads/2020/04/Linkedin-Logo.png" alt="likedin-logo" />
      <form >
        <input placeholder="Full name (required if registering)" type="text" />
        <input placeholder="Profile pic URL (optional)" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member?
        <span className="login__register" onClick={register}> Register Now</span>
      </p>

    </div>
  )
}

export default Login