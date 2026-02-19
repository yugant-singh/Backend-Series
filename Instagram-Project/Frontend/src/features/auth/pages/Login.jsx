import React, { useState } from 'react'
import '../style/form.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function loginSubmitHandler(e) {
        e.preventDefault()
        axios.post("http://localhost:3000/api/auth/login", {
            username,
            password
        }, { withCredentials: true })
            .then((res) => {
                console.log(res.data.message)
                console.log(res.data.user)
            })
            .catch((err) => {
                console.log(err.res.data.message)
            })
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