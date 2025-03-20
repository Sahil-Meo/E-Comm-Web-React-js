import React, { useEffect, useRef, useState } from 'react'
import SecondProCard from '../Cards/SecondProCard'
import { fetchSkipedProductData } from '../../ApiHandling/ApiKey'
import { scrollNext, scrollPrev } from './useScroll'
import { useNavigate } from 'react-router-dom'

const OurProducts = () => {
    const [productData, setProductData] = useState([])
    const ref = useRef()
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchSkipedProductData(8, 30)
            setProductData(res.products)
        }
        fetchData()
    }, [])

    const showAllPro = () => {
        navigate('/products')
    }
    
    return (
        <>
            <div className="Represent-label">
                <div className="label-text">
                    <span></span>
                    <p>Our Products</p>
                </div>
            </div>
            <div className='flex-ro justify-between'>
                <div className="Section-heading">
                    <h2>Explore Our Products</h2>
                </div>
                <div className="buttons">
                    <button onClick={() => scrollPrev(ref)}><i className="fa-solid fa-arrow-left"></i></button>
                    <button onClick={() => scrollNext(ref)}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="Products-Container mt-6">
                <div id="Wrapper" ref={ref}>
                    {productData?.map((item, index) => (
                        <SecondProCard item={item} key={index} />
                    ))}
                </div>
            </div>
            <div className="viewAllPro-Btn mt-6 mb-6">
                <button onClick={showAllPro} className='Btn' >View All Products</button>
            </div>
        </>
    )
}

export default OurProducts
