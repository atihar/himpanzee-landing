import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <>
                <section className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    {/* <h3>Contact Info</h3> */}

                                    <Link href="/">
                                        <a className="navbar-brand">
                                            <img src="/images/Himpanzee-logo-white.png" alt="logo" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget pl-5">
                                    <h3>Quick Links</h3>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/projects">
                                                <a>Projects & Press</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>Team</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>                                        
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-footer-widget pl-5">
                                    <h3>Socials</h3>
                                    <div className="row">
                                        <div className="col-12">
                                            <p><a style={{color:"white"}} href="https://www.linkedin.com/company/hpanzee/" target="_blank"><i className='bx bxl-linkedin' ></i> Linkedin</a></p>
                                            <p><a style={{color:"white"}} href="https://twitter.com/himpanzee" target="_blank"><i className='bx bxl-twitter' ></i> Twitter</a></p>
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p>
                                        Copyright &copy;{currentYear} Himpanzee. 
                                        All rights reserved
                                    </p>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link href="/terms-of-use">
                                                <a>Terms of use</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Footer;