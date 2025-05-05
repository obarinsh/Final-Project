import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { loginSuccess } from '../features/authSlice'
import { RootState, AppDispatch } from '../store/store'
import { useDispatch } from 'react-redux'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const handleLogIn = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrorMessage('')
        setSuccessMessage('')
        setIsSubmitting(true)
        try {
            const response = await fetch('http://localhost:3001/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            })
            const data = await response.json()
            if (response.ok) {
                dispatch(loginSuccess(data))
                setSuccessMessage('Log in successful!')
                navigate('/')
            } else {
                setErrorMessage(`${data.error || 'Log in failed'}`)
            }
        } catch (error) {
            setErrorMessage('Network error or server is down')
        }
        setIsSubmitting(false)
    }
    return (
        <div>
            <Link to="/" className="linkButton">Home</Link>
            <Link to="/signup" className="linkButton">Sign up</Link>
            <form onSubmit={handleLogIn}>
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
                <button type="submit" disabled={isSubmitting}>Sign In</button>
                {successMessage && <p>{successMessage}</p>}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>

        </div>
    )
}

export default LogIn