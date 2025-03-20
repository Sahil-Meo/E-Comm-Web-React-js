import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const QuickView = ({ product }) => {

    const [selectedSize, setSelectedSize] = useState(null);
    const [mainImage, setMainImage] = useState('')
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setquantity] = useState(1)

    const imageview = (image) => {
        setMainImage(image)

    }

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const handleIncrementQuantity = () => {
        if (product.stock > quantity) {
            const qty = quantity + 1
            setquantity(qty)
        }
    }

    const handleDecrementQuantity = () => {
        if (quantity > 1) {
            const qty = quantity - 1
            setquantity(qty)
        }
    }



    return (
        <div className="ShowProduct-QuickView">
            <div className="product-images">
                <div className="images-list">

                    {product.images?.map((image, index) => (
                        <div key={index} className="small-image">
                            <img onClick={() => imageview(image)} src={image} alt="" />
                        </div>
                    ))}
                </div>
                <div className="main-image">

                    <img src={mainImage ? mainImage : product.thumbnail} alt="" />

                </div>
            </div>
            <div className="product-details">
                <div className="product-desc">
                    <h1>{product.title}</h1>
                    <div className="review-stock">
                        <div className="product-reviews">
                            <div className="rating">
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                            </div>
                            <div className="reviews">
                                ({product.rating} rating)
                            </div>
                        </div>
                        <p className="product-stock">{product.stock > 0 ? "In Stock" : "Out Stock"}</p>
                    </div>
                    <p className="product-price">Rs: {product.price}</p>
                    <p className="product-description">{product.description}</p>
                </div>
                <hr />
                <div className="porduct-variation">
                    <div className="product-colors">
                        <p>Colours:</p>
                        <div className="color-available">
                            {["#0000FF", "#4CAF50", "#FF0000",].map((color) => (
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
                    <div className="product-sizes">
                        <p className="label">Size:</p>
                        <div className="size-options">

                            {["XS", "S", "M", "L", "XL"].map((size) => (
                                <button className={`size-btn ${selectedSize === size ? "active" : ""}`}
                                    key={size} onClick={() => handleSizeClick(size)}>{size}</button>
                            ))}
                        </div>
                    </div>
                    <div className="quantity-buy">
                        <div className="quantity">
                            <button className="quantity-decriment" onClick={handleDecrementQuantity}>-</button>
                            <p className="quantity-number"> {quantity} </p>
                            <button className="quantity-increment" onClick={handleIncrementQuantity}>+</button>
                        </div>
                        <div className="buynow-btn">
                            <a className='Btn a-sec' href="#">Buy Now</a>
                        </div>
                        <div className="like-btn">
                            <i className='fa-regular fa-heart'></i>
                        </div>
                    </div>
                </div>
                <div className="our-policies">
                    <div className="delivery-policy">
                        <i className='fa-solid fa-truck-fast'></i>
                        <div className="delivery-detail">
                            <p className="delivery-condition">Free Delivery</p>
                            <p><a href="#">Enter your postal code for Delivery Availability</a></p>
                        </div>
                    </div>
                    <hr />
                    <div className="return-policy">
                        <i className="fa-solid fa-rotate"></i>
                        <div className="return-detail">
                            <p className="return-condition">Return Delivery</p>
                            <p>{product.returnPolicy}<a href="#">Details</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickView
