import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="banner-section">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12" style={{marginTop:"12vw"}}>
                                    <div className="banner-content">
                                        <span className="sub-title">Creating. Results.</span>
                                        <h1>Restore natural <br/>& economic ecosystems.</h1>
                                        <p>Helping you conserve and restore natural habitats through carbon, water and biodiversity projects.</p>

                                        <div className="btn-box">
                                            <Link href="/contact">
                                                <a className="default-btn my-4">Book a consultation <span></span></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="banner-image">
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            {/* <img src="/images/group-1.png" alt="image" /> */}
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="fadeIn" delay={100} animateOnce={true}>
                                            {/* <img src="/images/banner-image/illustration@2x.jpg" alt="image" /> */}
                                        </ScrollAnimation>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="row text-center">
                                        <div className="counter d-flex">
                                        <blockquote class="blockquote">
                                            <p className="text-left">We have helped prevent over 301,126,587 tonnes CO2 emission </p>
                                        </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animation Shape Images */}
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.png" alt="image" />
                </div>
                <div className="shape-img7">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
                <div className="cloud-shape">
                    <img src="/images/banner-image/illustration@2x.jpg" alt="image" />
                </div>
                <div className="cloud-icon1">
                    <img src="/images/cloud1.png" alt="image" />
                </div>
                <div className="cloud-icon2">
                    <img src="/images/cloud2.png" alt="image" />
                </div>
                <div className="cloud-icon3">
                    <img src="/images/cloud3.png" alt="image" />
                </div>
            </div>
        );
    }
}

export default Banner;