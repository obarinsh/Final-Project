import React from 'react';
import '../css/carousel.css'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const decks = [
    { id: 1, name: 'Love & Relationships', description: 'Fun, flirty, and thoughtful questions to spark connection.' },
    { id: 2, name: 'Family Time', description: 'Heartwarming questions to connect across generations.' },
    { id: 3, name: 'Unhinged Friends', description: 'Chaotic and hilarious questions for unforgettable nights.' },
    { id: 4, name: 'New Year\'s Resolutions', description: 'Set goals and laugh while dreaming big for the year ahead.' },
    { id: 5, name: 'Real Talk: Teens & Parents', description: 'Meaningful, fun, and surprising conversations to connect generations.' }
];


const Carousel = () => {
    return (
        <div className="carousel-wrapper">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {decks.map((deck) => (
                    <SwiperSlide key={deck.id}>
                        <div className="carousel-item">
                            <h3>{deck.name}</h3>
                            <p>{deck.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default Carousel
