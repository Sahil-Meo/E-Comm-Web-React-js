import React from 'react'
import NewSlider from '../Slider/NewSlider'
import CategoryNav from '../Nabar/CategoryNav'
import TodayPro from './TodayPro'
import Categorys from './Categorys'
import ThisMothPro from './ThisMothPro'
import Banner from './Banner'
import OurProducts from './OurProducts'
import FeaturedBanner from './FeaturedBanner'
import Policies from './Policies'


function Home() {


    return (
        <div>
            <div className='hero-section Container'>
                <div className='Nav-div'>
                    <CategoryNav />
                </div>
                <div className='Slider-div'>
                    <NewSlider />
                </div>
            </div>
            <div className='first-item-sec mt-10 Container'>
                <TodayPro />
            </div>
            <hr  className='Container' />
            <div className='section-margin-y mb-6 Container'>
                <Categorys />
            </div>
            <hr   className='Container'/>
            <div className='section-margin-y mt-8 Container'>
                <ThisMothPro />
            </div>
            <div className="banner-section mt-10 Container">
                <Banner />
            </div>
            <div className="OurProduct-section mt-8 Container">
                <OurProducts />
            </div>
            <div className="featured-section mt-10 Container">
                <FeaturedBanner />
            </div>
            <div className="Policy-section mt-10 Container">
                <Policies />
            </div>
        </div>
    )
}

export default Home
