import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../ContextApi/CartContext";

const AddToCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { setCartItemsCount } = useAppContext();
    const [quantity, setquantity] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
        setCartItemsCount(cartItems.length)
    }, [cartItems])


    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
        setCartItems(storedProducts);
    }, []);

    const updateCartItems = (updatedData) => {
        const updatedItems = cartItems.map((item) =>
            item.id === updatedData.id
                ? { ...item, quantity: updatedData.quantity, subprice: updatedData.subprice }
                : item
        );
        setCartItems(updatedItems);
        localStorage.setItem("products", JSON.stringify(updatedItems));
    };


    const removeCartProduct = (id) => {
        const remainPro = cartItems.filter((pro) => pro.id !== id)
        setCartItems(remainPro)
        localStorage.setItem("products", JSON.stringify(remainPro));
    }


    const SubtotalPrice = cartItems.reduce((accumulater, product) => {
        return accumulater + Number(product.subprice);
    }, 0).toFixed(2)

    const totalPricev = SubtotalPrice;

    const handleReturnToShop = () => {
        navigate('/products')
    }

    const handleProceedCheckout = () => {
        navigate('/checkout')
    }

    const handleQuantityChange = (newQuantity, price, id) => {
        const newSubPrice = parseFloat(price * newQuantity).toFixed(2);
        const updatedData = { id, quantity: newQuantity, subprice: newSubPrice };

        updateCartItems(updatedData);
    };


    const handleIncrementQuantity = (q, price, id) => {
        if (5 > q) {
            const qty = q + 1
            handleQuantityChange(qty, price, id)

        }
    }

    const handleDecrementQuantity = (q, price, id) => {
        if (q > 1) {
            const qty = q - 1
            handleQuantityChange(qty, price, id)
        }
    }

    return (
        <div className="Container">
            <div className="path  mt-6">
                <p>Home / Cart</p>
            </div>
            <div className="cart-heading mt-6">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
            <div className="cart-cards">
                {cartItems?.map((item) => (
                    <div key={item.id} className="addtocart-card">
                        <div className="cartPro-img cart-box">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name.split(' ').slice(0, 2).join(' ')}</p>
                            <i onClick={() => removeCartProduct(item.id)} className="fa-solid fa-circle-xmark remove-product"></i>
                        </div>
                        <div className="pro-price cart-box">
                            <p className="cartItemPrice">Rs {item.price.toFixed(2)}</p>
                        </div>
                        <div className="product-Quantity cart-box">
                            <input
                                defaultValue={item.quantity}
                                onChange={(e) =>
                                    handleQuantityChange(Number(e.target.value), item.price, item.id)
                                }
                                type="number"
                                className="inputquantity"
                                min={1}
                            />
                            <div className="quantity secquantityinput">
                                <button className="quantity-decriment" onClick={() => handleDecrementQuantity(item.quantity, item.price, item.id)}>-</button>
                                <p className="quantity-number"> {item.quantity} </p>
                                <button className="quantity-increment" onClick={() => handleIncrementQuantity(item.quantity, item.price, item.id)}>+</button>
                            </div>
                        </div>
                        <div className="sub-price cart-box">
                            <p className="subprice">Rs {item.subprice}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex-ro justify-between mt-3">
                <button onClick={handleReturnToShop} className="Btn-large-white">Return To Shop</button>
                <button className="Btn-large-white">Update Cart</button>
            </div>
            <div className="cart-price-section justify-between mt-6">
                <div className="flex-ro justify-between">
                    <input className="coupon-Input" placeholder="Coupon code" type="text" />
                    <button className="Btn">Apply</button>
                </div>
                <div className=" price-counter">
                    <p className="heading">Cart Total</p>
                    <div className="flex-ro justify-between">
                        <p>Subtotal:</p>
                        <p>Rs {SubtotalPrice}</p>
                    </div>
                    <hr />
                    <div className="flex-ro justify-between">
                        <p>Shipping:</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="flex-ro justify-between">
                        <p>Total:</p>
                        <p>Rs {totalPricev}</p>
                    </div>
                    <div className="proceed-btn">
                        <button onClick={handleProceedCheckout} className="Btn">Procees to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;
