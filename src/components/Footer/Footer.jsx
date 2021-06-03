import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { GiConfirmed } from 'react-icons/gi';
import './Footer.scss';



const Footer = () => {
    return (
        <div className="Footer">
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault(e);
                    e.target.reset();
                    document.querySelector('.email-success').style = "visibility: visible;"
                }}>
                    <h1>Sign Up to Receive Exclusive Promotions, Coupons, and the Latest Events</h1>
                    <input  type="email" name="email" label="Email" placeholder="Enter Your E-mail" />
                    <button>JOIN</button>
                    <p className="email-success" style={{visibility: 'hidden'}}> <GiConfirmed style={{color: 'green', fontSize: '2em', marginRight: '10px'}} />You have been successfully subscribed.</p>
                </form>
                <div className="social-media-container">
                    <h1>Connect With Us</h1>
                    <div>
                        <SocialIcon url="https://facebook.com" />
                        <SocialIcon url="https://instagram.com" />
                        <SocialIcon url="https://twitter.com" />
                        <SocialIcon url="https://youtube.com" />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p>	&copy; GAMER PARADISE 2021</p>
                </div>
                <div>
                    <a href="#">Privacy & Cookies</a>
                    <a href="#">| Ts&Cs |</a>
                    <a href="#">Accessibility</a>
                </div>
            </div>

        </div>
    )
}

export default Footer
