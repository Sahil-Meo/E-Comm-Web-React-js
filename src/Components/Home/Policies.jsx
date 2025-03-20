import React from 'react'

const Policies = () => {
    return (

        <div className="policy-container">
            <div className="policies">
                <div className="policy-img">
                    <a href="#"><i className="fa-solid fa-truck-fast"></i></a>
                </div>
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free Delivery for all order Over $140</p>
            </div>

            <div className="policies">
                <div className="policy-img">
                    <a href="#"><i className="fa-solid fa-headset"></i></a>
                </div>
                <h3>24/7 CUSTOMER SERVICE</h3>
                <p>Friendly 24/7 customer support</p>
            </div>

            <div className="policies">
                <div className="policy-img">
                    <a href="#"><i className="fa-solid fa-check-to-slot"></i></a>
                </div>
                <h3>MONEY BACK GUARANTEE</h3>
                <p>We return money within 30 days</p>
            </div>

        </div>

    )
}

export default Policies
