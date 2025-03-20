import React, { useEffect, useState } from 'react'
import { fetchSkipedProductData } from '../../ApiHandling/ApiKey';

function Banner({
    targetDate = "2025-02-01T00:00:00"

}) {
    const [productdata, setProductData] = useState([])
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

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

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchSkipedProductData(200, 1)
            setProductData(res.products)
        }
        fetchData()
    }, [])

    return (
        <div className='Banner-container' style={{ backgroundImage: `url(https://cdn11.bigcommerce.com/s-2lbnjvmw4d/images/stencil/1280x1280/products/2828/3524/black300__40978.1567703882.gif?c=2)` }}>
            <div className="Banner-text">
                <p className='category-heading'>Categories</p>
                <h1 className='banner-heading'>Enhance Your Music Experience</h1>
                <div className="flash-sale-timer ">
                    <div className="timer rounded-timer-container">

                        <div className="time-box rounded-timer">
                            <span>{timeLeft?.days || '00'}</span>
                            <p>Days</p>
                        </div>

                        <div className="time-box rounded-timer">
                            <span>{timeLeft?.hours || '00'}</span>
                            <p>Hours</p>
                        </div>

                        <div className="time-box rounded-timer">
                            <span>{timeLeft?.minutes || '00'}</span>
                            <p>Minutes</p>
                        </div>

                        <div className="time-box rounded-timer">
                            <span>{timeLeft?.seconds || '00'}</span>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
                <a className='a-sec Btn-green Banner-Btn' href="#">Buy Now!</a>
            </div>
            <div className="Banner-img">
                <img src={productdata.length > 0 ? productdata[99].images[0] : ''} alt="" className="Banner-img-container" />
            </div>
        </div>
    )
}

export default Banner
