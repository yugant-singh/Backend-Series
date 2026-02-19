import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function registerSubmitHandler(e) {

        e.preventDefault()
        axios.post("http://localhost:3000/api/auth/register", {
            username: username,
            email: email,
            password: password
        },
            { withCredentials: true })
            .then((res) => {
                console.log(res.data.message)
                console.log(res.data.user)
            })
            .catch((err) => {
                console.log(err.response.data.message)
            })

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