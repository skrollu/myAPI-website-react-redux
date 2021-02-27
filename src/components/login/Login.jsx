import { useState } from 'react'

function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login-container">
            <h1>Login Page</h1>

            <form >
                <div className="loginForm">
                    <div className="loginFormItem">
                        <label htmlFor="email">Username</label>
                        <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="loginFormItem">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <button>login</button>
            </form>
        </div>
    )
}

export default Login
