import React, { useEffect, useState } from 'react'
import FirstCard from '../Cards/firstcard'
import Banner from '../Home/Banner'
import { fetchSkipedProductData } from '../../ApiHandling/ApiKey'
import { useParams } from 'react-router-dom'

const AllProducts = () => {
    const [allProduct, setAllProducts] = useState([])
    const [secAllProducts, setSecAllProducts] = useState([])
    const { slug } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchSkipedProductData(16, 10)
            setAllProducts(res.products)
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchSkipedProductData(52, 100)
            setSecAllProducts(res.products)
        }
        fetchData()
    }, [])

    return (

        <div className='Container'>
            <div className="path mt-6">
                <p >Home / {slug}products</p>
            </div>

            <div className="Products Wrapper mt-6">
                {allProduct?.map((curPro) =>

                    <FirstCard key={curPro.id} item={curPro} />
                )}
            </div>
            <div className="sale-banner mt-8">
                <Banner />
            </div>
            <div className="Products Wrapper mt-8">
                {secAllProducts?.map((curPro) =>

                    <FirstCard key={curPro.id} item={curPro} />
                )}
            </div>

        </div>
    )
}

export default AllProducts
