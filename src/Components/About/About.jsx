import React from 'react'
import Employe from '../Cards/Employe'
import Policies from '../Home/Policies'

const About = () => {
    return (
        <div className='Container'>
            <div className="path  mt-6">
                <p>Home/About</p>
            </div>

            <div className="about-main mt-4">
                <div className="about-text">
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur maiores voluptatum commodi veritatis, quis quibusdam enim error itaque officia earum suscipit, voluptatibus velit voluptate necessitatibus consectetur voluptates fugiat quia.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis placeat pariatur dolorum enim illo dolorem maiores a minima cupiditate, officiis saepe, sint error sapiente incidunt nulla, perferendis sit repellendus temporibus!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae labore animi qui facilis et incidunt asperiores inventore</p>
                </div>
                <div className="about-image" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/young-african-ladies-viewing-something-mobile-phone-while-carrying-shopping-bags_181624-45757.jpg)" }}></div>
            </div>
            <div className="about-progress mt-10 ">
                <div className="progress-box">
                    <i className="fa-solid fa-shop"></i>
                    <h2>10.5k</h2>
                    <p>Saller active our site</p>
                </div>

                <div className="progress-box">
                    <i className="fa-solid fa-dollar-sign"></i>
                    <h2>10.5k</h2>
                    <p>Monthly Product Sale</p>
                </div>

                <div className="progress-box">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <h2>10.5k</h2>
                    <p>Customer active in our site</p>
                </div>

                <div className="progress-box">
                    <i className="fa-solid fa-sack-dollar"></i>
                    <h2>10.5k</h2>
                    <p>Anual gross sale in our site</p>
                </div>
            </div>

            <div id="about-Employes" className='mt-10'>
                <Employe />
            </div>

            <div className="policy-section mt-8">
                <Policies />
            </div>
        </div>
    )
}

export default About
