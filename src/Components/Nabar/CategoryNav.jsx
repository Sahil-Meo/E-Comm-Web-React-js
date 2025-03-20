import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { fetchCategory } from '../../ApiHandling/ApiKey'

function CategoryNav() {

    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchcate = async () => {
            const res = await fetchCategory()
            setCategories(res)
        }
        fetchcate()
    }, [])

    const ShowProductCateory = (category) => {
        const cate = categories?.find((cur)=> cur.name === category)
        navigate(`/${cate.slug}`, { state: { url: cate.url } })
    }

    return (
        <div className='Col-Nav'>
            <nav>
                <ul>
                    {/* {categories?.map((category, index) => 
                        <li onClick={()=>ShowProductCateory(category) } key={index}> {category.name} </li>
                    )} */}
                    <li onClick={()=> ShowProductCateory('Mens Shirts')}>Man's Fasion</li>
                    <li onClick={()=> ShowProductCateory('Womens Jewellery')}>Women's Fasion</li>
                    <li onClick={()=> ShowProductCateory('Laptops')}>Electronic</li>
                    <li onClick={()=> ShowProductCateory('Home Decoration')}>Home & LifeStyle</li>
                    <li onClick={()=> ShowProductCateory('Tablets')}>Madicine</li>
                    <li onClick={()=> ShowProductCateory('Sports Accessories')}>Sport & Outdor</li>
                    <li onClick={()=> ShowProductCateory('Womens Bags')}> Baby's & Toys</li>
                    <li onClick={()=> ShowProductCateory('Groceries')}>Groceries & Pets</li>
                    <li onClick={()=> ShowProductCateory('Skin Care')}>Health & Beauty</li>

                </ul>
            </nav>
        </div>
    )
}

export default CategoryNav
