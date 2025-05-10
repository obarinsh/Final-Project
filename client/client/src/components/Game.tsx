import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'

const Game = () => {
    const { categoryId, name } = useParams<{ categoryId: string, name: string }>()
    const [questions, setQuestions] = useState<any[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)


    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/game/${categoryId}`)
                const data = await response.json()
                if (response.ok) {
                    setQuestions(data)
                }
                else {
                    console.error('Failed to fetch questions')
                }
            } catch (error) {
                console.error('Error fetching category:', error)

            }
        }

        fetchQuestions()
    }, [categoryId])

    const handleNext = () => {
        const randomIndex = Math.floor(Math.random() * questions.length)
        setCurrentIndex(randomIndex)
    }
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length)
    }
    return (
        <div>
            <HamburgerMenu />
            <div className={`page-container id-${categoryId}`}>
                <div className="card-container">
                    {questions.length > 0 && (
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
                    )}
                </div >
            </div>
        </div>
    )
}
export default Game