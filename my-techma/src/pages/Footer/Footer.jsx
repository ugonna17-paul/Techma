import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <h3 className="logo">BrandNest</h3>
                    <p>
                        We specialize in elevating business efficiency and innovation through
                        our expert IT consulting services.
                    </p>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Zoho CRM Solutions</a></li>
                            <li><a href="#">Monday.com Solutions</a></li>
                            <li><a href="#">Automation with Zapier</a></li>
                            <li><a href="#">Digital Transformation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">Terms and conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright © 2024 BrandNest, Inc. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
