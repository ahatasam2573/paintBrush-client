import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const yearNow = new Date().getFullYear();
    return (
        <footer className=" p-10 mt-14">
            <div className='footer'>
                <div>
                    <span className="footer-title">SERVICES</span>
                    <a className="link link-hover">Emergency Order</a>
                    <a className="link link-hover">Monthly Order</a>
                    <a className="link link-hover">Weekly Order</a>
                    <a className="link link-hover">Advanced Order</a>
                </div>
                <div>
                    <span className="footer-title">Imported Brushes</span>
                    <a className="link link-hover">American</a>
                    <a className="link link-hover">Indonesian</a>
                    <a className="link link-hover">Germany</a>
                </div>
                <div>
                    <span className="footer-title">OUR Address</span>
                    <a className="link link-hover">New York-1010101 Hudson</a>
                </div>
            </div>
            <div className='text-center pt-5'>
                <p>Copyright © {yearNow} - All right reserved by Ahatasam Siam</p>
            </div>
        </footer>

    );
};

export default Footer;