import React, { useEffect, useState } from 'react'
import SecondProCard from '../Cards/SecondProCard'
import { useLocation } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';

const CategoryProduct = () => {
    const [products, setProducts] = useState([])
    const [limit, setLimit] = useState(12)
    const location = useLocation()

    const producturl = location.state?.url;


    useEffect(() => {

        const fetchProduct = async () => {
            const res = await fetch(`${producturl}?limit=${limit}`)
            const data = await res.json()
            setProducts(() => [...data.products])
        }
        fetchProduct()

    }, [producturl, limit])

    const viewMoreProduct = () => {
        setLimit((prevlimit) => prevlimit + 8)
    }

    return (
        <div className='Container'>

            <div className="Section-heading mt-6">
                <h2>Salle On This Category</h2>
            </div>

            <div className="sale-banners mt-6" >
                <div className="banner" style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2016/07/30/19/47/banner-1557836_960_720.jpg)" }}>
                    <div className="banner-image"><img src={products[2]?.thumbnail} alt="SaleProduct Image" /></div>
                    <p className="banner-text">Bigest Sale 50% off! On {products[2]?.title}</p>
                </div>
                <div className="banner" style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2016/07/30/19/47/banner-1557836_960_720.jpg)" }}>
                    {products[4] ? (<>
                        <div className="banner-image"><img src={products[4]?.thumbnail} alt="SaleProduct Image" /></div>
                        <p className="banner-text">Bigest Sale 50% off! On {products[4]?.title}</p>
                    </>) : <p className="banner-text">This Offer is Colsed Now!</p>}
                </div>
            </div>
            <div className='flex-ro justify-between mt-8'>
                <div className="Section-heading">
                    <h2>Best Selling Products</h2>
                </div>
                {/* <div className="button">
                    <a className='a-sec Btn' href="#">View All</a>
                </div> */}
            </div>
            <InfiniteScroll
                dataLength={products.length}
                next={viewMoreProduct}
                hasMore={products.length <= 40}
                loader={<p>Loading more products...</p>}
                endMessage={<p className='mt-6' style={{ textAlign: 'center' }}>No more products to show.</p>}

            >
                <div className="Products-collection  mt-6" >

                    {products?.map((curpro, index) => (
                        <SecondProCard key={index} item={curpro} />
                    ))}
                </div>
            </InfiniteScroll>
            {/* <div className="viewMore flex-ro mt-8">
                <button onClick={viewMoreProduct} className="Btn-large">View More...</button>
            </div> */}
        </div>
    )
}

export default CategoryProduct
