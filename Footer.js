// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="section">
                    <h4>Sign Up and Save</h4>
                    <input type="email" placeholder="Enter Your Email" />
                </div>
                <div className="section">
                    <h4>Location</h4>
                    <p>007, James Bond Street,<br />London, England</p>
                </div>
                <div className="section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Orders</li>
                        <li>Returns</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
