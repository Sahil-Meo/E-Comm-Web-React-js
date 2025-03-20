import React, { useEffect, useState } from 'react'
import { fetchSkipedProductData } from '../../ApiHandling/ApiKey'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../ContextApi/CartContext'

const SecondProCard = ({ item: curPro }) => {

    const [selectedColor, setSelectedColor] = useState('#4CAF50')
    const navigate = useNavigate()
    const { setCartItemsCount, setWishlistItemsCount } = useAppContext();


    const ShowProductdetail = (curPro) => {
        navigate(`/${curPro.category}/${curPro.id}`, { state: { id: curPro.id } })
    }

    const handleColorClick = (color) => {
        setSelectedColor(color);

    };


    const handleWishlist = async (curPro) => {
        const items = await JSON.parse(localStorage.getItem('wishlist'))
        const newitem = [...(items || []), curPro]

        const productExists = items?.find((item) => item.id === curPro.id)
        if (!productExists) {
            localStorage.setItem('wishlist', JSON.stringify(newitem))
            setWishlistItemsCount(newitem.length)
        }
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


        if (item?.length > 0) {
            const productExists = item.find((product) => product.id === id);
            if (!productExists) {
                localStorage.setItem('products', JSON.stringify(products))
                setCartItemsCount(products.length)

            }
        } else {
            localStorage.setItem('products', JSON.stringify(products))
            setCartItemsCount(products.length)
        }
    }

    const handleQucitView = (e) => {
        e.stopPropagation()

    }

    return (

        <div className="card">
            <div className='image-container'>
                <div className='img-box'>
                    <img id='card-img' src={curPro?.thumbnail} alt="" onClick={() => ShowProductdetail(curPro)} />
                </div>
                <i onClick={() => handleWishlist(curPro)} className="fa-regular fa-heart wishlist-icon"></i>
                <i onClick={handleQucitView} className="fa-regular fa-eye quick-detail-icon"></i>
                <p className='disc-percentage'>-{(curPro?.price / (curPro?.price * 2)) * 100}%</p>
                <button onClick={() => handleAddToCart(curPro)} className='add-to-cart-btn' >Add To Cart</button>
            </div>
            <div>
                <h1 onClick={() => ShowProductdetail(curPro)} className='productName'>{curPro.title}</h1>
                <div className='price-box'>
                    <p className='productPrice'>Rs: {curPro.price}</p>
                    <div className="stars product-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <p className='rating-count'>{curPro.rating}</p>
                    </div>
                </div>
            </div>
            <div className="color-available">
                {["#4CAF50", "#FF0000",].map((color) => (
                    <button
                        key={color}
                        className={`color-circle ${selectedColor === color ? "active" : ""
                            }`}
                        style={{
                            backgroundColor: color,
                            borderColor: color,
                        }}
                        onClick={() => handleColorClick(color)} // Update selected color
                    >

                        <span
                            className="circle-dot"
                            style={{ backgroundColor: color }}
                        ></span>

                    </button>
                ))}
            </div>
        </div>

    )
}

export default SecondProCard
