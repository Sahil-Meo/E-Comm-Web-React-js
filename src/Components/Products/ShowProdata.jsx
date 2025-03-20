import React, { useEffect, useState } from 'react'
import { fetchSelectedPro, fetchRelatedCategory } from '../../ApiHandling/ApiKey'
import FullProCard from '../Cards/FullProCard'
import FirstCard from '../Cards/firstcard'
import { useLocation, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ShowProdata = () => {
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const { slug } = useParams();
    const navigate = useNavigate()
    const location = useLocation()
    const Productid = location.state?.id

    useEffect(() => {
        if (Productid) {
            const fetchData = async () => {
                try {
                    const res = await fetchSelectedPro(Productid);
                    setProduct(res || null);
                } catch (error) {
                    console.error('Failed to fetch product details:', error);
                    setProduct(null);
                }
            };
            fetchData();
        }
    }, [Productid]);


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchRelatedCategory(slug)
            setRelatedProducts(res.products)
        }
        fetchData()
    }, [])

    const showAllPro = () => {
        navigate('/products')
    }

    return (
        <div className='Container'>
            <div className="path mt-6">
                <p >Home / {slug} / {product?.title}</p>
            </div>
            <div className="porudct-detail-card mt-8">
                {product ? <FullProCard product={product} /> : (<h1>Loading Product details...</h1>)}
            </div>
            <div className="related-items mt-8  ">
                <div className="Represent-label ">
                    <div className="label-text">
                        <span></span>
                        <p>Related Items</p>
                    </div>
                </div>
                <div className="Wrapper mt-6" >
                    {relatedProducts.length > 0 ? (
                        relatedProducts.map((item) => <FirstCard key={item.id} item={item} />)
                    ) : (
                        <div className="empty-state">
                            <img src="/images/no-products.svg" alt="No products" />
                            <p>No related products available. Explore other categories!</p>
                        </div>
                    )}

                </div>
            </div>
            <div className='flex-ro mt-6'>
                <button onClick={showAllPro} className='Btn-large'>View More Products</button>
            </div>
        </div>
    )
}

export default ShowProdata
