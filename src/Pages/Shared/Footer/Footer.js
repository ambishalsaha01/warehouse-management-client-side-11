import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container footer-item">
                    <div className="row gy-3">
                        <div className="col-3">
                            <div>
                                <img src={logo} alt="footer-logo" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis veritatis tenetur modi, ipsam itaque nesciunt odit natus exercitationem? Iusto architecto ad rerum aperiam sed?</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div>
                                <h3 className='footer-title'>QUICK LINKS</h3>
                                <div className="quick-link">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/">About Us</Link></li>
                                        <li><Link to="/">Services</Link></li>
                                        <li><Link to="/">Blogs</Link></li>
                                        <li><Link to="/">Faq</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div>
                                <h3 className='footer-title'>SERVICE OFFERS</h3>
                                <div className="services-offer">
                                    <ul>
                                        <li><Link to="/">Road Transport</Link></li>
                                        <li><Link to="/">Sea Freight</Link></li>
                                        <li><Link to="/">Air Freight</Link></li>
                                        <li><Link to="/">Railway Logistics</Link></li>
                                        <li><Link to="/">Packaging and Storage</Link></li>
                                        <li><Link to="/">Warehousing</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div>
                                <h3 className='footer-title'>Contact US</h3>
                                <address className='contact-item'>
                                    <ul>
                                        <li><strong>Address:</strong> 78 Oxfrod Street, Beverly Hill New York,  United States of America</li>
                                        <li><strong>Phone:</strong>  (800) 0123 4567 890</li>
                                        <li><strong>Fax:</strong>  (800) 0123 4567 891</li>
                                        <li><strong>E-mail:</strong>  inventory@gmail.com</li>
                                    </ul>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-item">
                <p>© 2022 by All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;