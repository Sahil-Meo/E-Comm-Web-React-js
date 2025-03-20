import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { fetchCategory } from '../../ApiHandling/ApiKey'
import { useAppContext } from '../ContextApi/CartContext'

function Navbar() {
    const { isLoad, cartItemsCount, wishlistItemsCount, setCartItemsCount, setWishlistItemsCount } = useAppContext();
    const [search, setSearch] = useState('')
    const [suggetion, setSuggetion] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const [navItems, setNavItems] = useState(false)
    const [searchItem, setSearchItem] = useState(null)

    const navigate = useNavigate()

    const handleAddToCart = () => {
        navigate('/addtocart')
    }

    const handleWishlist = () => {
        navigate('/wishlist')
    }


    useEffect(() => {

        const fetchData = async () => {
            const res = await fetchCategory()
            const productsnames = res.map((product) => product.slug)
            setSuggetion(productsnames)

        }
        fetchData()

        const cartitem = JSON.parse(localStorage.getItem('products'))
        const wishitem = JSON.parse(localStorage.getItem('wishlist'))
        setCartItemsCount(cartitem?.length)
        setWishlistItemsCount(wishitem?.length)
    }, [])

    const handleSearchItems = (category) => {
        const apikey = `https://dummyjson.com/products/category/${category}`
        navigate(`/${category}`, { state: { url: apikey } })
        setSearch('')
        setFilteredProducts([])
        setSearchItem(false)
    }

    const handleSearch = (event) => {
        const value = event.target.value
        setSearch(value)

        if (value.trim() === "") {
            setFilteredProducts([]);
            return;
        }

        const suggestions = suggetion?.filter((product) =>
            product.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredProducts(suggestions);
        setHighlightIndex(-1);
    }

    const handleKeyDown = (event) => {
        if (filteredProducts.length > 0) {
            if (event.key === 'ArrowDown') {
                // Move down the suggestions
                setHighlightIndex((prevIndex) =>
                    prevIndex < filteredProducts.length - 1 ? prevIndex + 1 : 0
                );
            } else if (event.key === 'ArrowUp') {
                // Move up the suggestions
                setHighlightIndex((prevIndex) =>
                    prevIndex > 0 ? prevIndex - 1 : filteredProducts.length - 1
                );
            } else if (event.key === 'Enter') {
                // Select the highlighted suggestion
                if (highlightIndex >= 0) {
                    handleSearchItems(filteredProducts[highlightIndex]);
                } else {
                    handleSearchItems(search);
                }
            }
        }
    };

    const handlShowNavItem = () => {
        if (!navItems) {
            setNavItems(true)
        }
        else if (navItems) {
            setNavItems(false)
        }
    }

    const handlesearchbar = () => {
        if (!searchItem) {
            setSearchItem(true)
        }
        else if (searchItem) {
            setSearchItem(false)
        }
    }

    // const handleProfile = () => {
    //     navigate('/profile')
    // }



    return (
        <>
            <div className='top-nav'>
                <div className='top-nav-link'>
                    <p className='top-link'>Summer Sale For All Swim Suit And Free Express Delivery - OFF 50%! <Link to="/products" className='a-sec '>ShopNow</Link></p>
                </div>
            </div>
            <div className="nav-container">
                <nav className="navbar Container">

                    <div className="burger-box">
                        <i onClick={handlShowNavItem} className={`fa-solid ${!navItems ? 'fa-bars' : 'fa-xmark'} burger`}></i>
                    </div>

                    <div className="navbar-left">
                        <h1 className="Logo"><Link href="/">E-Commerce</Link></h1>
                    </div>


                    <div className={`navbar-center ${!navItems ? '' : 'active'}`}>
                        <ul className="nav-items">

                            <li>
                                <NavLink
                                    to=''
                                    className={({ isActive }) =>
                                        `${isActive ? 'active' : ''}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="contact"
                                    className={({ isActive }) =>
                                        `${isActive ? 'active' : ''}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="about"
                                    className={({ isActive }) =>
                                        `${isActive ? 'active' : ''}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="signup"
                                    className={({ isActive }) =>
                                        `${isActive ? 'active' : ''}`
                                    }
                                >
                                    SignUp
                                </NavLink>
                            </li>
                        </ul>
                    </div>


                    <div className="navbar-right">
                        <i onClick={handlesearchbar} className={`fa-solid fa-magnifying-glass show-search icon`}></i>
                        <div className={`search-container ${searchItem === true ? "active" : ''}`}>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                handleSearchItems(search)
                            }}>
                                <input
                                    value={search}
                                    onChange={handleSearch}
                                    onKeyDown={handleKeyDown}
                                    type="text" placeholder="Search..." />
                                <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
                                {filteredProducts.length > 0 && (
                                    <ul className="suggestions-list">
                                        {filteredProducts.map((product, index) => (
                                            <li key={index}
                                                onClick={() => handleSearchItems(product)}
                                                className={`suggestion-item ${index === highlightIndex ? 'highlighted' : ''
                                                    }`}>
                                                {product}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </form>
                            <i className="fa-solid fa-xmark cros-icon" onClick={handlesearchbar} ></i>
                        </div>
                        <span onClick={handleWishlist} className="icon"><i className="fa-regular fa-heart"></i> <span className='shownum'>{wishlistItemsCount ? wishlistItemsCount : ''}</span>  </span>
                        <span onClick={handleAddToCart} className="icon"><i className="fa-solid fa-cart-shopping"></i>  <span className='shownum'>{cartItemsCount ? cartItemsCount : ''}</span>  </span>
                        {isLoad===false ? (<span className="icon profile-icon">
                            <NavLink
                                to="profile"
                                className={({ isActive }) =>
                                    `${isActive ? 'active' : ''}`
                                }
                            >
                                <i className="fa-regular fa-user "></i>
                            </NavLink>
                        </span>) : ''}
                    </div>
                </nav >
            </div>
            <hr />
        </>
    )
}

export default Navbar
