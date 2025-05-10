import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectedCategory } from '../features/categSlice'
import { useDispatch } from 'react-redux'
import HamburgerMenu from './HamburgerMenu'


const MainMenu = () => {
    const [decks, setDecks] = useState<any[]>([])
    const [filter, setFilter] = useState('all')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const filteredDecks = filter === 'all'
        ? decks
        : decks.filter(deck => deck.topic === filter)


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/categories')
                const data = await response.json()
                if (response.ok) {
                    setDecks(data)
                }
                else {
                    console.error('Failed to fetch categories')
                }
            } catch (error) {
                console.error('Network error', error)

            }
        }
        fetchCategories()
    }, [])


    const handleSelect = (deck: any) => {
        dispatch(selectedCategory(deck))
        navigate(`/game/${deck.id}/${deck.name}`)
    }

    return (
        <div>
            <header>
                <nav>
                    <HamburgerMenu />
                </nav>
            </header>
            <div className='filter-header'>
                <h1>What’s Your Deck Today?</h1>
                <div className="filter-container">
                    <div className="filter-menu">
                        {['all', 'Family & Home', 'Marriage & Partnership', 'Love & Relationships', 'Friends and Fun', 'Self Reflection'].map(category => (
                            <button className="filter-button" key={category} onClick={() => setFilter(category)}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="deck-container">
                {filteredDecks.map(deck => (
                    <div className={`deck-cover deck-${deck.id}`}
                        key={deck.id}
                        onClick={() => handleSelect(deck)}>
                        <div className="card-inner">
                            <div className={`card-front deck-${deck.id}`}>
                                {deck.name}
                            </div>
                            <div className="card-back">
                                <p>{deck.description || 'Game rule or description goes here.'}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        // </div>
    )
}

export default MainMenu