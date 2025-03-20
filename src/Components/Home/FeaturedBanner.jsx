import React from 'react'

const FeaturedBanner = () => {
    return (
        <>
            <div className="Represent-label">
                <div className="label-text">
                    <span></span>
                    <p>Featured</p>
                </div>
            </div>
            <div className="Section-heading">
                <h2>New Arival</h2>
            </div>
            <div className='Arival-banner-container mt-6'>
                <div className="banner-xl" style={{ backgroundImage: "url(https://en.letsgodigital.org/uploads/2020/10/ps5-slim-game-console.jpg)" }}>
                    <div className="banners-text">
                        <h1>Playstaion 5</h1>
                        <p>Black and White version of PS5 coming out on the sale.</p>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
                <div className="banner-sm">
                    <div className='small-signle-banner' style={{ backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/1021/651/626/women-hat-monochrome-lips-covered-eyes-hd-wallpaper-preview.jpg)" }}>
                        <div className="banners-text">
                            <h1>Women's Collections</h1>
                            <p>Featured Women's collection that give you another vibe</p>
                            <a href="#" >Shop Now</a>
                        </div>
                    </div>
                    <div className='small-two-banner' >
                        <div className="mini-banner" style={{ backgroundImage: "url(https://images.pexels.com/photos/13650608/pexels-photo-13650608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>
                            <div className="banners-text">
                                <h1>Speakers</h1>
                                <p>Best Quality Speakers</p>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                        <div className="mini-banner" style={{ backgroundImage: "url(https://i.pinimg.com/736x/db/8a/4c/db8a4cdb10242501af56489331713981.jpg)" }}>
                            <div className="banners-text">
                                <h1>Perfumes</h1>
                                <p>GUCCI INTENCE OUD EDP</p>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedBanner
