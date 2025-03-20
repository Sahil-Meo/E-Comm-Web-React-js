import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer mt-10">
            <div className="footer-container">
                <div className="footer-section logo-subscribe">
                    <h2 className="logo">Exclusive</h2>
                    <p className="heading">Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <div className="email-subscription">
                        <input type="email" placeholder="Enter your email" />
                        <button><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                {/* Support Links */}
                <div className="footer-section support">
                    <p className='heading'>Support</p>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Track Order</a></li>
                    </ul>
                </div>

                {/* Account Links */}
                <div className="footer-section account">
                    <p className='heading'>Account</p>
                    <ul>
                        <li>
                        <NavLink
                                to="/signup"
                                className={({ isActive }) =>
                                    `${isActive ? 'active' : ''}`
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                        <NavLink
                                to="/signup"
                                className={({ isActive }) =>
                                    `${isActive ? 'active' : ''}`
                                }
                            >
                                Register
                            </NavLink>
                        </li>
                        <li><a href="#">Order History</a></li>
                        <li><a href="#">Wishlist</a></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="footer-section quick-links">
                    <p className='heading'>Quick Links</p>
                    <ul>
                        <li>
                            <NavLink
                                to="contact"
                                className={({ isActive }) =>
                                    `${isActive ? 'active' : ''}`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Privacy Policy</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Terms of Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Support Center</NavLink>
                        </li>
                    </ul>
                </div>

                {/* App Download and Social Media */}
                <div className="footer-section app-download">
                    <p className='heading'>Download App</p>
                    <p>Scan the QR code to download our app:</p>
                    <div className="qr-and-stores">
                        <img src="https://hexdocs.pm/qr_code/docs/qrcode.svg" alt="QR Code" className="qr-code" />
                        <div className="store-images">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play Store" />
                            <img src="https://www.gov.br/pt-br/imagens-de-servicos/apple.png" alt="Apple App Store" />
                        </div>
                    </div>
                    <p className='heading'>Follow Us</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 MyEcommerce. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
