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
                                        <h1>Restore natural <br/>& economic ecosystems</h1>
                                        <p>Conserve and restore natural habitats<br/> through carbon and biodiversity projects</p>

                                        <div className="btn-box">
                                            <Link href="/contact">
                                                <a className="default-btn my-4">Book a consultation <span></span></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                        <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                            {/* <img src="/images/group-1.png" alt="image" /> */}
                                        </ScrollAnimation>
 
                                        <ScrollAnimation animateIn="fadeIn" delay={100} animateOnce={true}>
                                            {/* <img className="mt-5" src="/images/banner-image/HOME-PNG.png" alt="image" /> */}
                                        </ScrollAnimation>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="row text-center">
                                        <div className="counter d-flex">
                                            <p className="text-left">We have helped prevent over <span className="btn">301,126,587</span> tonnes CO2e</p>
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
                <div className="cloud-shape d-none d-md-block">
                    <img src="/images/banner-image/illustration-3n.jpg" alt="image" />
                </div>
                <div className="cloud-icon1">
                    {/* <img src="/images/cloud1.png" alt="image" /> */}
                </div>
                <div className="cloud-icon2">
                    {/* <img src="/images/cloud2.png" alt="image" /> */}
                </div>
                <div className="cloud-icon3">
                    {/* <img src="/images/cloud3.png" alt="image" /> */}
                </div>
            </div>
        );
    }
}

export default Banner;