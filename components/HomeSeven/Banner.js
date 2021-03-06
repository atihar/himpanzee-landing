import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class Banner extends Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    render() {
        return (
            <>
                {/* If you want change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            
                <div className="saas-banner-two">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container mt-50">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="banner-content">
                                            <h1>Manage Your Digital Marketing in One Place Taiker</h1>
                                            <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements.</p>
                                            
                                            <div className="banner-btn">
                                                <Link href="/contact">
                                                    <a className="default-btn mr-4">
                                                        Get Started <span></span>
                                                    </a>
                                                </Link>

                                                <Link href="/index7">
                                                    <a className="default-btn-two">
                                                        Try It Now <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="saas-banner-image animate-tb">
                                            <img src="/images/saas-banner/dashboard.png" alt="image" />

                                            <div className="solution-video">
                                                <div
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="video-btn popup-youtube"
                                                > 
                                                    <i className="flaticon-play-button"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Shape Images */}
                    <div className="shape-img2">
                        <img src="/images/shape/shape2.svg" alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src="/images/shape/shape3.svg" alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src="/images/shape/shape4.png" alt="image" />
                    </div>
                    <div className="shape-img5">
                        <img src="/images/shape/shape5.png" alt="image" />
                    </div>
                    <div className="shape-img6">
                        <img src="/images/shape/shape6.png" alt="image" />
                    </div>
                    <div className="shape-img7">
                        <img src="/images/shape/shape7.png" alt="image" />
                    </div>
                    <div className="shape-img8">
                        <img src="/images/shape/shape8.png" alt="image" />
                    </div>
                    <div className="shape-img9">
                        <img src="/images/shape/shape9.png" alt="image" />
                    </div>
                    <div className="shape-img10">
                        <img src="/images/shape/shape10.png" alt="image" />
                    </div>        
                </div>
            </>
        );
    }
}

export default Banner;