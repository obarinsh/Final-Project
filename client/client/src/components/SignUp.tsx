import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import '../css/signup.css'
import React from 'react'

const SignUp = ({ user, isAuthenticated, onLogout }: { user: any, isAuthenticated: boolean, onLogout: () => void }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const response = await fetch('http://localhost:3001/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ username, email, password }),
            })
            const data = await response.json()
            if (response.ok) {
                setSuccessMessage('Signup successful!')
                navigate('/signin')
            } else {
                setErrorMessage(`${data.error || 'Signup failed'}`)
            }
        } catch (error) {
            setErrorMessage('Network error or server is down')
        }
        setIsSubmitting(false)

    }
    return (
        <div className="signup-page">
            <NavBar user={user} isAuthenticated={isAuthenticated} onLogout={onLogout} />
            <div className="form-wrapper">
                <form className="signup-form" onSubmit={handleSignUp}>
                    <h2>Sign up</h2>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="username"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="password"
                        required
                    />
                    <button type="submit" disabled={isSubmitting}>Register!</button>
                    {successMessage && <p>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </form>
            </div>
        </div>
    )
}

export default SignUp