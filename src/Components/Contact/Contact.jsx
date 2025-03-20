import React, { useEffect, useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [result, setResult] = useState('')
    const [submitResult, setSubmitResult] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitForm = () => {
        const { name, email, phone, message } = formData;

        if (!name || !email || !phone || !message) {
            setResult("Please fill in all fields before submitting.");
            return;
        }

        setResult("");
        setSubmitResult("Your Message Is Sended!")

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });

        setTimeout(() => {
            setSubmitResult('')
        }, 1000);
    };

    return (
        <div className="Container">
            <div className="path mt-8">
                <p>Home / Contact</p>
            </div>
            <div className="contact-main mt-6">
                <div className="contact-detail">
                    <div className="call-to-us">
                        <div className="call-logo">
                            <i className="fa-solid fa-phone"></i>
                            <p>Call To Us</p>
                        </div>
                        <p className="text">We are available 24/7, 7 days a week.</p>
                        <p className="text">Phone: +923265141541</p>
                    </div>

                    <hr />

                    <div className="message-to-us mt-3">
                        <div className="message-logo">
                            <i className="fa-regular fa-envelope"></i>
                            <p>Write To Us</p>
                        </div>
                        <p className="text">
                            Fill out the form, and we will contact you within 24 hours
                        </p>
                        <p className="text">
                            <span>Email:</span> customer@exclusive.com
                        </p>
                        <p className="">
                            <span>Email:</span> support@exclusive.com
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmitForm();
                    }}
                    className="message-main"
                >
                    <p className="result" style={{ color: `${result.length > 0 ? 'red' : 'green'}` }}>{result.length > 0 ? result : submitResult}</p>
                    <div className="inputs-box">
                        <input
                            placeholder="Your Name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            placeholder="Your Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            placeholder="Your Phone"
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="textarea-box">
                        <textarea
                            placeholder="Enter Your Message"
                            rows={10}
                            cols={10}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className="send-msg-btn">
                        <button type="submit" className="Btn">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
