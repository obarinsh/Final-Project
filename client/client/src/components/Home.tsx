// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { AppDispatch } from '../store/store'
// import { logout } from '../features/authSlice'
import Carousel from './Carousel.tsx'
import NavBar from './NavBar.tsx'


// import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState, AppDispatch } from '../store/store'
// import { logout } from '../features/authSlice'
// import Carousel from './Carousel.tsx'
// import HamburgerMenu from './HamburgerMenu.tsx'
// import NavBar from './NavBar.tsx'
// import Footer from './Footer.tsx'







const Home = ({ user, isAuthenticated, onLogout }: { user: any, isAuthenticated: boolean, onLogout: () => void }) => {
    // const user = useSelector((state: RootState) => state.auth.user)
    // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    // const onLogout = useSelector((state: RootState) => state.auth.onLogout)
    // const dispatch = useDispatch<AppDispatch>()

    // const handleLogout = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3001/api/auth/logout', { method: 'POST', credentials: 'include' })
    //         if (!response.ok) {
    //             console.error('Logout failed on server side')
    //         }
    //     } catch (error) {
    //         console.log('Logout failed:', error)
    //     } finally {
    //         dispatch(logout())
    //     }

    // }
    // console.log(isAuthenticated)
    return (
        <div>
            <NavBar user={user} isAuthenticated={isAuthenticated} onLogout={onLogout} />
            <main>
                <div className="instruction-container">
                    <div className="info-box">
                        <h2>How It Works</h2>
                        <p className='home-text'>
                            This isn’t just another app — it’s an invitation to connect, laugh, and explore meaningful (and sometimes ridiculous!) conversations with the people you care about.
                            All you need is one phone, one deck, and a little curiosity. Choose a deck, read the question out loud, and let the magic unfold.
                        </p>
                    </div>
                    <div className="info-box">
                        <h2>Why We Made This</h2>
                        <p className='home-text'>
                            In a world filled with distractions, we wanted to create a simple tool to help people put down their screens and look each other in the eye.
                            Whether it’s building intimacy with your partner, reconnecting with family, or friends, this game helps you create real moments.
                        </p>
                    </div>
                    <div className="info-box">
                        <h2>Who It’s For</h2>
                        <p className='home-text'>
                            Couples looking for deeper connection, families wanting to share stories, friends ready for fun — this app is for anyone who wants to spend more quality time together.
                            Play it at home, on a date night, at family dinners, or during road trips.
                        </p>
                    </div>
                    <div className="info-box">
                        <h2>How to Play</h2>
                        <p className='home-text'>
                            Choose a deck. Take turns reading a question out loud. Be the first to share a song, a story, or an answer — or just let the conversation flow naturally.
                            The only rule? Be present, have fun, and enjoy the moments you create together.
                        </p>
                    </div>

                </div>
            </main>
            <h2 style={{ fontSize: '3rem', fontFamily: 'Playfair Display, sans-serif', textAlign: 'center' }}>Explore Our Decks</h2>
            <Carousel />
        </div>
    )
}

export default Home