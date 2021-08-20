import React, { Component } from 'react';
import Link from 'next/link';

class OurServices extends Component {
    render() {
        return (
            <>
                <section className="overview-area ptb-100 pt-0">
                    <div className="container">
                        <div className="section-title">
                            {/* <span className="sub-title">Our Services</span> */}
                            <h2>Recent Projects</h2>
                            <p>Our team has led, funded and completed the carbon project development in projects around the world, including</p>
                        </div>

                        {/* Our Services One */}
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content">
                                    <h2>Riau Ecosystem Restoration Project</h2>
                                    <p><b>Location:</b> Kampar Peninsula, Indonesia <br/>
                                    <b>Size:</b> 130,000 hectares, twice the size of Singapore
                                    </p>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Biodiversity:</h4>
                                        <p>Sumatran Tiger, Storm’s Stork, Rhinoceros Hornbill, Malayan Sun Bear, Flat-headed Cat.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Outcome:</h4>
                                        <p>Avoided release of 6+ million emission reductions per year.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/Picture1.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        {/* Our Services Two */}
                        <div className="overview-box">
                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/Picture2.png" alt="image" />
                                </div>
                            </div>
                            
                            <div className="overview-content">
                                <div className="content right-content">
                                    <h2>North Pikounda</h2>
                                    <p><b>Location:</b> North-western portion of Congo River Basin, Republic of Congo<br/>
                                    <b>Size:</b> 94,000 hectares
                                    </p>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Biodiversity:</h4>
                                        <p>Lowland Gorilla, African Forest Elephant, Hippopotamus, Leopard </p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i>Outcome:</h4>
                                        <p>1,126,587 emission reductions, with further millions to come.</p>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                        <div className="btn-box text-center">
                            <Link href="/projects">
                                <a className="default-btn">Find out more <span></span></a>
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default OurServices;