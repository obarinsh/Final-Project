import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store/store'
import { logout } from '../features/authSlice'



const Home = () => {
    const user = useSelector((state: RootState) => state.auth.user)
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    const dispatch = useDispatch<AppDispatch>()

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/auth/logout', { method: 'POST', credentials: 'include' })
            if (!response.ok) {
                console.error('Logout failed on server side')
            }
        } catch (error) {
            console.log('Logout failed:', error)
        } finally {
            dispatch(logout())
        }

    }
    console.log(isAuthenticated)
    return (<main>
        <h1>Welcome</h1>
        {isAuthenticated ? (
            <>
                <p>Welcome, {user?.username}!</p>
                <button onClick={handleLogout}>Log out</button>
            </>
        ) : (
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <Link to="/signup" className="linkButton">Sign up</Link>
                <Link to="/signin" className="linkButton">Log in</Link>
            </div>
        )}
    </main >
    )
}

export default Home