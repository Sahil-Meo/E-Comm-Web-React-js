import React, { forwardRef, } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FirstCard from './firstcard'
import { fetchSkipedProductData } from '../../ApiHandling/ApiKey'
import { useAppContext } from '../ContextApi/CartContext'

const WishlistCard = () => {
    const navigate = useNavigate()
    const { setWishlistItemsCount, setCartItemsCount } = useAppContext()
    const [products, setProducts] = useState([])
    const [forYouPro, setForYouPro] = useState([])


    const ShowProductdetail = (product) => {
        navigate(`/${product.category}/${product.id}`, { state: { id: product.id } })
        window.scroll(0, 0)
    }

    useEffect(() => {
        const rawItem = localStorage.getItem('wishlist')
        const items = rawItem ? JSON.parse(rawItem) : []
        setProducts(items)
        setWishlistItemsCount(items.length)


        const fetchdata = async () => {
            const res = await fetchSkipedProductData(4, 100)
            setForYouPro(res.products)
        }
        fetchdata()
    }, [localStorage.getItem('wishlist')])

    const handleDeleteWishlist = (id) => {
        const remainPro = products?.filter((prev) => prev.id !== id)
        setProducts(remainPro)
        localStorage.setItem('wishlist', JSON.stringify(remainPro))
        setWishlistItemsCount(remainPro.length)

    }

    const moveAllToBag = async () => {
        const rawProducts = localStorage.getItem('products')
        const cartpro = rawProducts ? JSON.parse(rawProducts) : []
        const allproducts = products.map((pro) => ({
            id: pro.id,
            name: pro.title,
            image: pro.thumbnail,
            quantity: 1,
            price: pro.price,
            subprice: pro.price
        }))

        const cartproids = new Set(cartpro.map((pro) => pro.id))
        const uniquepro = allproducts.filter((pro) => !cartproids.has(pro.id))

        const newcartpro = [...cartpro, ...uniquepro]
        localStorage.setItem('products', JSON.stringify(newcartpro))
        setCartItemsCount(newcartpro.length)
    }

    const ViewAllPro = () => {
        navigate('/products')
    }

    const handleAddToCart = async (curPro) => {
        const item = await JSON.parse(localStorage.getItem('products'))
        const id = curPro.id
        const quantity = 1;
        const price = curPro.price
        const subprice = quantity * price
        const image = curPro.thumbnail
        const name = curPro.title.split(" ").slice(0, 2).join(" ");
        const cartProduct = { id, quantity, price, subprice, image, name }
        const products = [...(item || []), cartProduct]
        localStorage.setItem('products', JSON.stringify(products))
    }

    return (
        <div className="Container">
            <div className='flex-ro justify-between mt-8'>
                <p className='heading'>Wishlist({products?.length})</p>
                <button onClick={moveAllToBag} className='Btn-large-white'>Move All To Bag</button>
            </div>
            <div className='Wrapper mt-6'>
                {products?.length > 0 ? (
                    products?.map((curPro) =>
                        <div key={curPro.id} className="card" >
                            <div className='image-box'>
                                <div className='img-div'>
                                    <img onClick={() => ShowProductdetail(curPro)} id='card-img' src={curPro?.thumbnail} alt="" />
                                </div>
                                <i onClick={() => handleDeleteWishlist(curPro.id)} className="fa-solid fa-trash-can wishlist-icon"></i>
                                <p className='disc-percentage'>-{curPro?.discountPercentage}%</p>
                                <button onClick={() => handleAddToCart(curPro)} className='add-to-cart-btn'>Add To Cart</button>
                            </div>
                            <div>
                                <h1 className='productName' onClick={() => ShowProductdetail(curPro)}>{curPro?.title}</h1>
                                <div className='price-box'>
                                    <p className='productPrice'>Rs: {curPro?.price}</p>
                                    <p className='productActualPrice'>{curPro?.price * 2} </p>
                                </div>
                            </div>
                        </div>
                    )
                ) : (
                    <div className="empty-state" style={{ textAlign: 'center', marginTop: '50px', margin: '0 auto', fontSize: '20px'}}>
                        <i className="fa-solid fa-heart-broken"></i>
                        <p>Your wishlist is empty. Start adding products!</p>
                    </div>
                )}
            </div>

            <div className='flex-ro justify-between mt-8'>
                <div className="label-text ">
                    <span></span>
                    <p>Our Products</p>
                </div>
                <button onClick={ViewAllPro} className='Btn-large-white'>See All</button>
            </div>
            <div className="Wrapper mt-6">
                {forYouPro?.map((element) =>
                    <FirstCard key={element.id} item={element} />
                )}

            </div>
        </div>
    )
}

export default WishlistCard;


