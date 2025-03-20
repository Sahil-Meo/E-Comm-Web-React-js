import React, { useEffect, useState } from 'react'

const CheckOut = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('products'))
        setItems(data)
    }, [])

    const subprice = (items?.reduce((subtotal, item) => {
        return subtotal + Number(item.subprice)
    }, 0)).toFixed(2)
    return (
        <div className='Container'>
            <div className="path  mt-6">
                <p>Home / My Account / Product / View Cart / CheckOut</p>
            </div>
            <div className="Section-heading mt-8">
                <h2>Billing Details</h2>
            </div>
            <div className="checkout-section mt-6">
                <div className="chekout-details">
                    <div className="checkout-Inputs">
                        <label htmlFor="name-input">First Name<span className='imp-star' >*</span></label>
                        <input id='name-input' type="text" />
                    </div>
                    <div className="checkout-Inputs">
                        <label htmlFor="name-input">Company Name</label>
                        <input id='name-input' type="text" />
                    </div>
                    <div className="checkout-Inputs">
                        <label htmlFor="name-input">Street Address<span className='imp-star' >*</span></label>
                        <input id='name-input' type="text" />
                    </div>
                    <div className="checkout-Inputs">
                        <label htmlFor="name-input">Apartment,floor,etc. (optional)</label>
                        <input id='name-input' type="text" />
                    </div>
                    <div className="checkout-Inputs">
                        <label htmlFor="name-input">Town/City<span className='imp-star' >*</span></label>
                        <input id='name-input' type="text" />
                    </div>

                    <div className="checkout-Inputs">
                        <label htmlFor="name-input">Phone Number<span className='imp-star' >*</span></label>
                        <input id='name-input' type="text" />
                    </div>

                    <div className="checkout-Inputs">
                        <label htmlFor="name-input">Email Address<span className='imp-star' >*</span></label>
                        <input id='name-input' type="text" />
                    </div>
                    <div className="Save-info">
                        <input type="checkbox" />
                        <p className='saveinfo-text'>Save this information for faster check-out-next time</p>
                    </div>
                </div>
                <div className="checkout-products">
                    {items?.map((item) => (
                        <div key={item.id} className="checkout-items flex-ro justify-between check-item-detail">
                            <div className="chekout-pro-img">
                                <img src={item.image} alt="" />
                                <p className="heading">{item.name}</p>
                            </div>
                            <p className="chekout-pro-price">{item.subprice}</p>
                        </div>
                    ))}
                    <div className="flex-ro justify-between check-item-detail">
                        <p>Subtotal:</p>
                        <p>Rs {subprice}</p>
                    </div>
                    <hr className='check-item-detail' />
                    <div className="flex-ro justify-between check-item-detail">
                        <p>Shipping:</p>
                        <p>Free</p>
                    </div>
                    <hr className='check-item-detail' />
                    <div className="flex-ro justify-between check-item-detail">
                        <p>Total:</p>
                        <p>Rs {subprice}</p>
                    </div>
                    <div className="flex-ro justify-between check-item-detail">
                        <div className='payment payment-method  flex-ro '>
                            <input type="radio" />
                            <p>Bank</p>
                        </div>
                        <img className='payment-card-img' src="https://www.nicepng.com/png/detail/382-3829449_major-credit-card-logo-png-file-major-credit.png" alt="" />
                    </div>
                    <div className="payment payment-method check-item-detail">
                        <input type="radio" />
                        <p>Casho on delivery</p>
                    </div>
                    <div className="coupan-box">
                        <input className="coupon-Input" placeholder="Coupon code" type="text" />
                        <button className="Btn">Apply</button>
                    </div>
                    <div>
                        <button className="Btn">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
