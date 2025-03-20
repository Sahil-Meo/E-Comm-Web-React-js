import React, { useEffect, useRef, useState } from 'react'
import { scrollNext, scrollPrev } from './useScroll';
import { useNavigate } from 'react-router-dom';
import { fetchCategory } from '../../ApiHandling/ApiKey';

function Categorys() {

    const categoriesImg = [
        { category: "beauty", icon: <i className='fa-solid fa-heart'></i> },
        { category: "fragrance", icon: <i className='fa-solid fa-cogs'></i> },
        { category: "furniture", icon: <i className='fa-solid fa-couch'></i> },
        { category: "groceries", icon: <i className='fa-solid fa-shopping-basket'></i> },
        { category: "home-decoration", icon: <i className='fa-solid fa-paint-roller'></i> },
        { category: "kitchen-accessories", icon: <i className='fa-solid fa-utensils'></i> },
        { category: "laptop", icon: <i className='fa-solid fa-laptop'></i> },
        { category: "mens-shirts", icon: <i className='fa-solid fa-tshirt'></i> },
        { category: "mens-shoes", icon: <i className='fa-solid fa-shoe-prints'></i> },
        { category: "mens-watches", icon: <i className='fa-solid fa-watch'></i> },
        { category: "mobile", icon: <i className='fa-solid fa-mobile-alt'></i> },
        { category: "motorcycle", icon: <i className='fa-solid fa-motorcycle'></i> },
        { category: "skin-care", icon: <i className='fa-solid fa-spa'></i> },
        { category: "smart-phone", icon: <i className='fa-solid fa-mobile'></i> },
        { category: "sports", icon: <i className='fa-solid fa-basketball-ball'></i> },
        { category: "sunglasses", icon: <i className='fa-solid fa-sunglasses'></i> },
        { category: "tablet", icon: <i className='fa-solid fa-tablet-alt'></i> },
        { category: "tops", icon: <i className='fa-solid fa-tshirt'></i> },
        { category: "vehicle", icon: <i className='fa-solid fa-car'></i> },
        { category: "bag", icon: <i className='fa-solid fa-shopping-bag'></i> }
    ];
    

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchcategory = async () => {
            const res = await fetchCategory()
            setCategories(res)
        }
        fetchcategory()
    }, [])

    const ref = useRef()
    const navigate = useNavigate()

    const ShowProductCateory = async (category) => {
        navigate(`/${category.slug}`, { state: { url: category.url } })
    }
    return (
        <>
            <div className="Represent-label">
                <div className="label-text">
                    <span></span>
                    <p>Categories</p>
                </div>
            </div>
            <div className='flex-ro justify-between'>
                <div className="Section-heading">
                    <h2>Browse By Category</h2>
                </div>
                <div className="buttons">
                    <button onClick={() => scrollPrev(ref)} ><i className="fa-solid fa-arrow-left"></i></button>
                    <button onClick={() => scrollNext(ref)}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="categories-box mt-6">
                <ul className="category-list" ref={ref}>
                    {categories?.map((category, index) => (
                        <li onClick={() => ShowProductCateory(category)} key={index} className='category-box'>

                            <div className="category-icon">
                                {categoriesImg[index]?.icon || categoriesImg[0]?.icon}
                            </div>


                            <p className='category-name'>{category.name}</p>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Categorys
