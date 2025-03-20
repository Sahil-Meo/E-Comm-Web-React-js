import React, { useEffect, useState } from 'react'
import { fetchProductData } from '../../ApiHandling/ApiKey'
import FirstCard from '../Cards/firstcard'
import { useNavigate } from 'react-router-dom'

function ThisMothPro() {
    const [productData, setProductData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProductData(4)
            setProductData(data.products)
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
                    <p>This Moth</p>
                </div>
            </div>
            <div className='flex-ro justify-between'>
                <div className="Section-heading">
                    <h2>Best Selling Products</h2>
                </div>
                <div className="button">
                    <button onClick={showAllPro} className='Btn'>View All</button>
                </div>
            </div>
            <div className="Products mt-6">
                <div id="products-template">
                    {productData?.map((item, index) => (
                        <FirstCard item={item} key={index} />

                    ))}
                </div>
            </div>
        </>
    )
}

export default ThisMothPro
