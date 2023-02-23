import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/gol-logo.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content" style={{ background: '#41A5C1' }}>
                <div>
                    <img src={img1} alt="" width='50' height='50' />
                    <p className='text-white'>Lorem Ipsum is simply dummy <br /> text of the printing and type <br />setting industry.</p>
                </div>
                <div>
                    <span className="footer-title text-white">Company</span>
                    <Link className=" text-white">Branding</Link>
                    <Link className="text-white">Events</Link>
                    <Link className="text-white">Blogs</Link>
                    <Link className="text-white">FAQ</Link>
                    <Link className="text-white">Join Us</Link>
                </div>
                <div>
                    <span className="footer-title text-white">About</span>
                    <Link className="text-white">Project</Link>
                    <Link className="text-white">Lorem</Link>
                    <Link className="text-white">Services</Link>
                    <Link className="text-white">Our Story</Link>
                </div>
                <div>
                    <span className="footer-title text-white">Contact Us</span>
                    <Link className="text-white">abc@lorem.com</Link>
                    <Link className="text-white">India</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;