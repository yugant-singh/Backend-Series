import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useAuth} from '../hooks/useAuth'
const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
const {user,loading,handleRegister} = useAuth()
const navigate = useNavigate()
    async function registerSubmitHandler(e) {

        e.preventDefault()
        await handleRegister(username,email,password)
      navigate("/profile")

    }

    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={registerSubmitHandler} >
                    <input
                        type="text"
                        name='username'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}

                    />
                    <input
                        type="email"
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}

                    />
                    <input
                        type="password"
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}

                    />
                    <button>Register</button>
                </form>
                <p>
                    Already have an Account?  <Link className='toggleLink' to="/login">Login</Link>
                </p>
            </div>
        </main>
    )
}

export default Register