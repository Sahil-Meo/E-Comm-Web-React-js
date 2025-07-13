import React, { useEffect, useState } from 'react'

const Employe = () => {
    const Employe = [
        { id: 1, image: "https://onboarded.com.au/wp-content/themes/hello-theme-child-master/assets/images/banner1.png", name: "Muhammad Ahsaan", post: "Founder & Chairman", social: [<i className="fa-brands fa-twitter"></i>, <i className="fa-brands fa-instagram"></i>, <i className="fa-brands fa-linkedin-in"></i>] },
        { id: 2, image: "https://static.vecteezy.com/system/resources/previews/024/558/280/non_2x/businessman-isolated-illustration-ai-generative-free-png.png", name: "Muhammad Ahmad", post: "Managing Director", social: [<i className="fa-brands fa-twitter"></i>, <i className="fa-brands fa-instagram"></i>, <i className="fa-brands fa-linkedin-in"></i>] },
        { id: 3, image: "https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-confident-businessman-with-mic-make-speech-png-image_10094926.png", name: "Sahil Meo", post: "Product Designer", social: [<i className="fa-brands fa-twitter"></i>, <i className="fa-brands fa-instagram"></i>, <i className="fa-brands fa-linkedin-in"></i>] },
        { id: 4, image: "https://png.pngtree.com/png-clipart/20231007/ourmid/pngtree-businessman-in-formal-wear-using-tablet-transparent-background-png-image_10196279.png", name: "M Sahil", post: "Order Processor", social: [<i className="fa-brands fa-twitter"></i>, <i className="fa-brands fa-instagram"></i>, <i className="fa-brands fa-linkedin-in"></i>] },
        { id: 5, image: "https://png.pngtree.com/png-clipart/20240329/original/pngtree-front-view-man-working-as-a-real-estate-agent-on-transparent-png-image_14708766.png", name: "Muhammad Sahil", post: "Service Manager", social: [<i className="fa-brands fa-twitter"></i>, <i className="fa-brands fa-instagram"></i>, <i className="fa-brands fa-linkedin-in"></i>] },
        { id: 6, image: "https://png.pngtree.com/png-clipart/20240329/original/pngtree-front-view-man-working-as-a-real-estate-agent-on-transparent-png-image_14708767.png", name: "Ahsaan Meo", post: "Company Adviser", social: [<i className="fa-brands fa-twitter"></i>, <i className="fa-brands fa-instagram"></i>, <i className="fa-brands fa-linkedin-in"></i>] },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((previndex) => (previndex + 1) % Employe.length)
    }
    const prevSlide = () => {
        setCurrentIndex((previndex) => (previndex - 1 % Employe.length) % Employe.length)

    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000);
        return () => clearInterval(interval)
    }, [])

    const getVisibleSlides = () => {
        const slides = []
        for (let i = 0; i < 3; i++) {
            slides.push(Employe[(currentIndex + i) % Employe.length])
        }
        return slides
    }



    return (

        <div className='about-Employes'>
            <div className="Employe-Wrapper">
                {getVisibleSlides()?.map((curEmp) => (
                    <div className="Employe" key={curEmp.id}>
                        <div className="Employe-image">
                            <img src="/page-heading/background.jpg" className='w-10 h-10' alt="Employe Image" />
                        </div>
                        <p className='Eploye-Name'>{curEmp.name}</p>
                        <p className="Employe-Post">{curEmp.post} </p>
                        <div className="Employe-social-accounts">
                            {curEmp.social?.map((social, index) => (
                                <div key={index}>
                                    {social}
                                </div>
                            ))}
                            <i className='fa-solif fa-facebook'></i>
                        </div>
                    </div>
                ))}
            </div>
            <div className="circles">
                {Employe?.map((_, index) => (
                    <span
                        className={`circle ${index === currentIndex ? "active" : ""}`}
                        key={index}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    )
}
export default Employe
