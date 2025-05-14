import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import NavBar from './NavBar'
import '../css/gamemenu.css'

const Game = ({ user, isAuthenticated, onLogout }: { user: any, isAuthenticated: boolean, onLogout: () => void }) => {
    const { categoryId, name } = useParams<{ categoryId: string, name: string }>()
    const [questions, setQuestions] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/signin')
            return
        }
        const fetchQuestions = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const response = await fetch(`http://localhost:3001/api/game/${categoryId}`, {
                    credentials: 'include',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const data = await response.json()
                setQuestions(data)
            } catch (error) {
                console.error('Error fetching category:', error)
                setError(error instanceof Error ? error.message : 'Failed to fetch questions')
            } finally {
                setIsLoading(false)
            }
        }

        fetchQuestions()
    }, [categoryId, isAuthenticated, navigate])

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length)
    }
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length)
    }
    if (isLoading) {
        return (
            <div>
                <NavBar user={user} isAuthenticated={isAuthenticated} onLogout={onLogout} />
                <div className="page-container">
                    <div className="loading">Loading questions...</div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <NavBar user={user} isAuthenticated={isAuthenticated} onLogout={onLogout} />
                <div className="page-container">
                    <div className="error">Error: {error}</div>
                </div>
            </div>
        )
    }
    return (
        <>
            <NavBar user={user} isAuthenticated={isAuthenticated} onLogout={onLogout} />
            <div className={`page-container id-${categoryId}`}>
                <div className="card-container">
                    {questions.length > 0 ? (
                        <div className="card">
                            <p>{questions[currentIndex].text}</p>
                            <div className="controls">
                                <div className="arrow-row">
                                    <button onClick={handlePrev} className="arrow">&#8592;</button>
                                    <button onClick={handleNext} className="arrow">&rarr;</button>
                                </div>
                                <div className="count-cards">
                                    {currentIndex + 1}/{questions.length}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="no-questions">No questions available for this category</div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Game