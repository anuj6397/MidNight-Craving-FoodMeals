import React from 'react';
import img from './Image/img5.jpg';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { DiAndroid } from 'react-icons/di';

export default function Footer() {
    return (
        <>
            <footer className='footer-container'>
                {/* Logo Section */}
                <div className='footer-1'>
                    <img src={img} alt="Midnight Craving Logo" height="350px" width="400px" />
                </div>

                {/* Content & Social Section */}
                <div className='footer-2'>
                    <h2 className='footer-heading'>MIDNIGHT-CRAVING</h2>

                    <div className='footer-3'>
                        <p>✨ Whether it's 2PM or 2AM, cravings don’t follow the clock — and neither do we.</p>
                        <p>
                            <strong>MIDNIGHT-CRAVING</strong> is your one-stop destination for discovering, ordering, and indulging in delicious meals even during those late-night hunger pangs.
                            From mouth-watering snacks to wholesome meals, we bring your favorite food right to your doorstep — fast, fresh, and hot.
                        </p>
                        <p>
                            With real-time location services, smart search, and a user-friendly cart system, we ensure a smooth experience from craving to checkout.
                            Because great food should never have a closing time.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className='social-media-icon'>
                        <ul style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '1.5rem',
                            padding: 0,
                            marginTop: '2rem'
                        }}>
                            <li>
                                <a href='https://www.linkedin.com/in/anuj-rajput-7279b81b9/' target='_blank' rel='noopener noreferrer'>
                                    <FaLinkedin style={{ fontSize: '2rem', color: '#0077B5' }} />
                                </a>
                            </li>
                            <li>
                                <a href='https://github.com/anuj6397' target='_blank' rel='noopener noreferrer'>
                                    <FaGithub style={{ fontSize: '2rem', color: '#000' }} />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/__anujrajput_6397/' target='_blank' rel='noopener noreferrer'>
                                    <FaInstagram style={{ fontSize: '2rem', color: '#E1306C' }} />
                                </a>
                            </li>
                            <li>
                                <a href='/ques' target='_blank'>
                                    <DiAndroid style={{ fontSize: '2rem', color: 'green' }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <div className='footer-4'>
                <p>Copyright © 2025 MIDNIGHT-CRAVING | Made with ❤️ by Anuj 21BCS4654 | All Rights Reserved</p>
            </div>
        </>
    );
}
