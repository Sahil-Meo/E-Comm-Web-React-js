import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { fetchProductData } from '../../ApiHandling/ApiKey'
import FirstCard from '../Cards/firstcard';
import { scrollNext, scrollPrev } from './useScroll';
import { useNavigate } from 'react-router-dom';

function TodayPro({
    targetDate = "2025-02-03T00:00:00"
}) {

    // const productContainerRef = useRef(null);
    const [productData, setProductData] = useState([])
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
    const ref = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    function calculateTimeLeft(targetDate) {
        const difference = new Date(targetDate) - new Date();
        if (difference <= 0) return null;

        const time = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };

        return time;
    }

    // if (!timeLeft) {
    //     return <p>Sale Ended!</p>;
    // }

    const handleNextScroll = () => {
        console.log('here is the click')
        if (ref.current) {
            scrollNext(ref)
        }
    }

    const handleBackScroll = () => {
        if (ref.current) {
            scrollPrev(ref)
        }
    }




    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProductData(20);
                setProductData(data.products);
            } catch (error) {
                console.error('Error loading products:', error);
            }
        };
        loadProducts()

    }, [])

    const showAllPro = () => {
        navigate('/products')
    }

    return (
        <>
            <div className="Represent-label">
                <div className="label-text">
                    <span></span>
                    <p>Today's</p>
                </div>
            </div>
            <div className='flex-ro justify-between'>
                <div className="Section-heading">
                    <h2>Flash Sales</h2>
                    <div className="timer">
                        <div className="time-box">
                            <p>Days</p>
                            <span>{timeLeft?.days || '00'}</span>
                        </div>
                        <p className='timer-dot'>:</p>
                        <div className="time-box">
                            <p>Hours</p>
                            <span>{timeLeft?.hours || '00'}</span>
                        </div>
                        <p className='timer-dot'>:</p>

                        <div className="time-box">
                            <p>Minutes</p>
                            <span>{timeLeft?.minutes || '00'}</span>
                        </div>
                        <p className='timer-dot'>:</p>

                        <div className="time-box">
                            <p>Seconds</p>
                            <span>{timeLeft?.seconds || '00'}</span>
                        </div>
                    </div>
                </div>
                <div className="buttons">

                    <button onClick={handleBackScroll}><i className="fa-solid fa-arrow-left"></i></button>
                    <button onClick={handleNextScroll}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div className='mt-4'>
                <div id="products-template" ref={ref}>
                    {

                        productData.length > 0 ?
                            productData.map((item, index) => (


                                <div key={index} > <FirstCard item={item} /></div>

                            ))

                            : (
                                <p>Product is Loading....</p>
                            )}


                </div>
            </div>
            <div className="viewAllPro-Btn">
                <button className='Btn' onClick={showAllPro}>View All Products</button>
            </div>
        </>
    )
}

export default TodayPro
