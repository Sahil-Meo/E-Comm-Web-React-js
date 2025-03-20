import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function NewSlider() {
    const slides = [
        { id: 1, image: "https://fdn.gsmarena.com/imgroot/static/headers/makers/apple-2024-2.jpg", title: "Big Sale Iphone", description: "Up to 50% off on top brands!" },
        { id: 2, image: "https://www.zdnet.com/a/img/resize/aafc79d1ed5b4855d68660b317f0131688ea004f/2022/09/08/675c038f-0a14-43e6-ab88-3cc88698813c/apple-watch-series-8.jpg?auto=webp&fit=crop&height=675&width=1200", title: "Big Sale Watch", description: "Up to 50% off on top brands!" },
        { id: 3, image: "https://images.fonearena.com/blog/wp-content/uploads/2022/04/Apple-Next-Generation-MacBook-wih-M2-Chips-1024x576.jpg", title: "Big Sale Laptop", description: "Up to 50% off on top brands!" },
        { id: 4, image: "https://media.licdn.com/dms/image/v2/D4D12AQF1QzKmejhkog/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1736244106505?e=2147483647&v=beta&t=9ggrxj9w-BFoOBQ6A22oUFhLS8s9MZ_MSkR3xIAjsWg", title: "Exclusive Offers Mini PC", description: "Up to 50% off on top brands!" },
        { id: 5, image: "https://photos5.appleinsider.com/gallery/61700-127719-macminim4review-1-xl.jpg", title: "Exclusive Offers On Apple PC", description: "Up to 50% off on top brands!" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevSlide) => (prevSlide + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)

    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000)
        return () => clearInterval(interval)
    }, [currentIndex])

    return (
        <div className='slider'>
            <div className="slides">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${index === currentIndex ? "active" : ""}`}
                        style={{ backgroundImage: `url(${slide.image})` }}>
                        <div className="slide-content">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="prev-arrow">&#10094;</button>
            <button onClick={nextSlide} className="next-arrow">&#10095;</button>
            <div className="dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => goToSlide(index)}>

                    </span>
                ))}
            </div>
        </div>
    )
}

export default NewSlider
