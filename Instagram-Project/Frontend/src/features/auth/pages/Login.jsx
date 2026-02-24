import React, { use, useState } from 'react'
import '../style/form.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { user, loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    async function loginSubmitHandler(e) {
        e.preventDefault()
        await handleLogin(username, password)
       navigate("/")

    }
    return (
        <main>
            <div className="form-container">

                <h1>Login</h1>
                <form onSubmit={loginSubmitHandler}>
                    <input
                        type="text"
                        name="username"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}

                    />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <button>Login</button>
                </form>

                <p>
                    Don't have an Account?  <Link className='toggleLink' to="/register">Register</Link>
                </p>
            </div>
        </main>
    )
}

export default Login