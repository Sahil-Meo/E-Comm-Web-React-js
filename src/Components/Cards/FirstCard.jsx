import React, { forwardRef, } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../ContextApi/CartContext';
import QuickView from './QuickView';

const FirstCard = ({ item: curPro }) => {
    const navigate = useNavigate()
    const { setCartItemsCount, setWishlistItemsCount } = useAppContext();


    const ShowProductdetail = (product) => {
        navigate(`/${product.category}/${product.id}`, { state: { id: product.id } })
        window.scroll(0, 0)
    }

    const handleWishlist = async (curPro) => {
        const items = await JSON.parse(localStorage.getItem('wishlist'))
        const newitem = [...(items || []), curPro]

        const productExists = items?.find((item) => item.id === curPro.id)
        if (!productExists) {
            localStorage.setItem('wishlist', JSON.stringify(newitem))
            setWishlistItemsCount(newitem.length)
        }
    }

    const handleQucitView = (product) => {
        // <QuickView product={product} />
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

    return (
        <div className="card" >
            <div className='image-box'>
                <div className='img-div'>
                    <img onClick={() => ShowProductdetail(curPro)} id='card-img' src={curPro?.thumbnail} alt="" />
                </div>
                <i onClick={() => handleWishlist(curPro)} className="fa-regular fa-heart wishlist-icon"></i>
                <i onClick={() => handleQucitView(curPro)} className="fa-regular fa-eye quick-detail-icon"></i>
                <p className='disc-percentage'>-{curPro?.discountPercentage}%</p>
                <button onClick={() => handleAddToCart(curPro)} className='add-to-cart-btn'>Add To Cart</button>
            </div>
            <div>
                <h1 className='productName' onClick={() => ShowProductdetail(curPro)}>{curPro?.title}</h1>
                <div className='price-box'>
                    <p className='productPrice'>Rs: {curPro?.price}</p>
                    <p className='productActualPrice'>Rs: {curPro?.price * 2} </p>
                </div>
                <div className="stars product-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <p className='rating-count'>{curPro?.rating}</p>
                </div>
            </div>
        </div>

    )


}

export default FirstCard;


