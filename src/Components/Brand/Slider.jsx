import { useEffect, useState } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        'https://i.ibb.co/F4qQzZQ/facebook-adds.jpg',
        'https://i.ibb.co/HB7h4Yr/samsung-adds.jpg',
        'https://i.ibb.co/rdQcjYM/google-adds.jpg',
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentSlide]);

    return (
        <div className="">
            <div className="flex justify-center items-center min-h-min px-4 mb-4 mx-auto">
                <img src={slides[currentSlide]} alt={`Ad ${currentSlide + 1}`} className="rounded-lg shadow-lg" />
            </div>
        </div>
    );
};

export default Slider;