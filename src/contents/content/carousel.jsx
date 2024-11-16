import React, { useState, useEffect } from 'react';
import * as material from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material'; // Import Material-UI icons
import '../../css/content.css'

const slides = [
    {
      id: 1,
      image: './companyimages/carousel/Hero.png',
    },
    {
      id: 2,
      image: './companyimages/carousel/Hero2.jpg'
    },
    {
      id: 3,
      image: './companyimages/carousel/Hero3.jpg'
    },
    {
      id: 4,
      image: './companyimages/carousel/Hero4.jpg'
    }
];

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalId); 
    }, []);

    return (
        <material.Card className="carousel-container">
        <material.CardMedia
            component="img"
            height="300" 
            image={slides[currentSlide].image}
            alt="carousel slide"
            className="carousel-image"
        />
        <material.CardContent>
        </material.CardContent>
        <material.CardActions className="carousel-actions">
            <material.IconButton onClick={prevSlide} className="carousel-arrow left-arrow">
            <ArrowBack />
            </material.IconButton>
            <material.IconButton onClick={nextSlide} className="carousel-arrow right-arrow">
            <ArrowForward />
            </material.IconButton>
        </material.CardActions>
        </material.Card>
    );
};
