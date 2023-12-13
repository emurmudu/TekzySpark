import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const New = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        {
            src: "https://i.ibb.co/FDM4tBd/drone5.jpg",
            productName: "Mini Drone",
        },
        {
            src: "https://i.ibb.co/bzYN4LK/watch3.jpg",
            productName: "Smart Hand Watch",
        },
        {
            src: "https://i.ibb.co/9T1sg5w/canon1.jpg",
            productName: "Canon Camera",
        },
        {
            src: "https://i.ibb.co/1L5pyfn/watch4.jpg",
            productName: "Smart Watch",
        },
        {
            src: "https://i.ibb.co/0FL6pBv/mini-drone.jpg",
            productName: "Mini Drone",
        },
        {
            src: "https://i.ibb.co/GFv5LnT/vr-goggles.jpg",
            productName: "VR Goggles",
        },
        {
            src: "https://i.ibb.co/RjxjNxn/cannon-brand.jpg",
            productName: "Canon Camera",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="p-8 bg-gray-400 dark:bg-zinc-600 ">
            <h1 className="text-center text-lg md:text-3xl lg:text-4xl py-8">New Arrivals</h1>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="relative">
                        <img
                            src={image.src}
                            alt={image.productName}
                            className="w-full h-auto md:h-96 object-cover"
                        />
                        <p
                            className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl lg:text-4xl"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                        >
                            {image.productName}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default New;
