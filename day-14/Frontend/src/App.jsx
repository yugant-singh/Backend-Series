import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [regName, setRegName] = useState("")
  const [regEmail, setRegEmail] = useState("")
  const [regPassword, setRegPassword] = useState("")
  const [lgEmail, setLgEmail] = useState("")
  const [lgPassword, setLgPassword] = useState("")
  const [regMessage, setRegMessage] = useState("")  // Register ka message
const [regMessageType, setRegMessageType] = useState("")  // "success" ya "error"

const [loginMessage, setLoginMessage] = useState("")  // Login ka message
const [loginMessageType, setLoginMessageType] = useState("")

  function registerSubmitHandeler(e) {

    e.preventDefault()
    setRegMessage("")
    setRegName("")
    setRegEmail("")
    setRegPassword("")
    axios.post("https://backend-series-2.onrender.com/api/auth/register", {
      name: regName,
      email: regEmail,
      password: regPassword
    })
      .then((result) => {
        console.log(result.data.message)
         setRegMessage("Registration Successful! 🎉")
    setRegMessageType("success")
     localStorage.setItem("token", result.data.token)
     setTimeout(() => {
      setRegMessage("")
    }, 3000)
      })
      .catch((error) => {
        console.log(error.response.status)
        console.log(error.response.data.message)
         setRegMessage(error.response?.data?.message || "Registration Failed!")
    setRegMessageType("error")
      })
    // console.log(name, email, password)



  }


  function loginSubmitHandeler(e){

    e.preventDefault();
      setLoginMessage("")
      setLgPassword("")
      setLgEmail("")
    axios.post("https://backend-series-2.onrender.com/api/auth/login",{
      email:lgEmail,
      password:lgPassword
    })
    .then((result)=>{
      console.log(result.data.message)
        setLoginMessage("Login Successful! 🎉")
    setLoginMessageType("success")
    localStorage.setItem("token", result.data.token)
     setTimeout(() => {
      setLoginMessage("")
    }, 3000)
    })
    .catch((error)=>{
       console.log(error.response.data.message)
        setLoginMessage(error.response?.data?.message || "Login Failed!")
    setLoginMessageType("error")
    })
   


  }
  return (
    <div className='form-sec'>
      <div className="register formm">
        <h1>Sign Up Pgae</h1>
        {regMessage && (
    <div className={`message ${regMessageType}`}>
      {regMessage}
    </div>
  )}
        <form className='form' onSubmit={registerSubmitHandeler}>

          <input
            type="text"
            value={regName}
            required
            placeholder='Enter Name'
            onChange={(e) => {
              setRegName(e.target.value)
            }}

          />
          <input
            type="email"
            required
            value={regEmail}
            placeholder='Enter Email'
            onChange={(e) => {
              setRegEmail(e.target.value)
            }}

          />
          <input
            type="password"
            required
            value={regPassword}
            placeholder='Enter Password'
            onChange={(e) => {
              setRegPassword(e.target.value)
            }}
          />
          <button>Register</button>
        </form>
      </div>
<div className="login formm">
  <h1>Login Page</h1>
  {loginMessage && (
    <div className={`message ${loginMessageType}`}>
      {loginMessage}
    </div>
  )}
  <form className='form' onSubmit={loginSubmitHandeler}>

         
          <input
            type="email"
            required
            value={lgEmail}
            placeholder='Enter Email'
            onChange={(e) => {
              setLgEmail(e.target.value)
            }}

          />
          <input
            type="password"
            required
            value={lgPassword}
            placeholder='Enter Password'
            onChange={(e) => {
              setLgPassword(e.target.value)
            }}
          />
          <button>Login</button>
        </form>
</div>

    </div>
  )
}

export default App