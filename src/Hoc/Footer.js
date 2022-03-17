import React from 'react';
import phone from '../img/subscribe-banner.png';
import img1 from '../img/be-a-part.png';
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

function Footer() {
    const company = ['About Us', 'Term of Use','Privacy Policy', 'Press & Media']
    const products = ['Marketplace','Magazine','Seller','Wholesale','Services']
    const careers = ['Become a Campus Rep','Become a Vasiti Influencer','Become a Campus Writer','Become an Affliate']
    const touch = ['Contact us','Partner with us','Advertise with us','Help/FAQs']
    
    return (
        <div className='footer'>
            <div className="top_section">
               
                <img src={phone} alt="icon" />
               
                <section className="subscribe">
                    <img src={img1} alt="icon" />
                    <p>
                        We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.  
                    </p>
                    <form >
                        <input type="text" placeholder='enter your email address' />
                        <input type="button" value="SUBSCRIBE" />
                    </form>
                </section>
            </div>
            <div className="bottom_section">
                <section>
                    <h3>Company</h3>
                    <ul>
                        {
                            company.map((element)=>(
                                <li key={element}>{element}</li>
                            ))
                        }
                    </ul>
                </section>
                <section>
                    <h3>Products</h3>
                    <ul>
                        {
                            products.map((element)=>(
                                <li key={element}>{element}</li>
                            ))
                        }
                    </ul>
                </section>
                <section>
                    <h3>Careers</h3>
                    <ul>
                        {
                            careers.map((element)=>(
                                <li key={element}>{element}</li>
                            ))
                        }
                    </ul>
                </section>
                <section>
                    <h3>Get in touch</h3>
                    <ul>
                        {
                            touch.map((element)=>(
                                <li key={element}>{element}</li>
                            ))
                        }
                    </ul>
                </section>
                <section>
                    <h3>Join our community</h3>
                    <div className="icons">
                        <span><FaFacebookF className='icon' /></span>
                        <span><FaInstagram className='icon' /></span>
                        <span><FaTwitter className='icon' /></span>
                        <span><FaLinkedinIn className='icon' /></span>
                       
                    </div>
                    <h4>Email Newsletter</h4>
                </section>
            </div>
        </div>
    )
}

export default Footer
