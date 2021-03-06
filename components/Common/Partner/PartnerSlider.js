import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    mouseDrag: false,
    touchDrag: false,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 2,
        },
        576: {
            items: 3,
        },
        768: {
            items: 4,
        },
        1200: {
            items: 5,
        }
    } 
}

class PartnerSlider extends Component {

    _isMounted = false;
    state = {
        display:false
    }

    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <>
                <div className="partner-area ptb-100 pt-0">
                    <div className="container">
                        <div className="section-title">
                            <h2>Partners</h2>
                        </div>
                        {this.state.display ? <OwlCarousel 
                            className="partner-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-partner-item">
                                <a href="https://www.bioeconomy.co/" target="_blank">
                                    <img src="/images/partner-image/1.png" alt="image" />
                                    <img src="/images/partner-image/1.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="https://www.perl.eco/" target="_blank">
                                    <img src="/images/partner-image/partner-img2.png" alt="image" />
                                    <img src="/images/partner-image/partner-img2.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="https://www.aprilasia.com/en/ " target="_blank">
                                    <img src="/images/partner-image/partner-img3.png" alt="image" />
                                    <img src="/images/partner-image/partner-img3.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="https://www.olamgroup.com/" target="_blank">
                                    <img src="/images/partner-image/partner-img4.png" alt="image" />
                                    <img src="/images/partner-image/partner-img4.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="https://www.linkedin.com/company/cibcongo/ " target="_blank">
                                    <img src="/images/partner-image/partner-img5.png" alt="image" />
                                    <img src="/images/partner-image/partner-img5.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="https://www.ata-marie.com/" target="_blank">
                                    <img src="/images/partner-image/partner-img6.png" alt="image" />
                                    <img src="/images/partner-image/partner-img6.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="https://www.space-intelligence.com/" target="_blank">
                                    <img src="/images/partner-image/partner-img7.png" alt="image" />
                                    <img src="/images/partner-image/partner-img7.png" alt="image" />
                                </a>
                            </div>
                            <div className="single-partner-item">
                                <a href="https://www.aircarbon.co/" target="_blank">
                                    <img src="/images/partner-image/partner-img8.png" alt="image" />
                                    <img src="/images/partner-image/partner-img8.png" alt="image" />
                                </a>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </>
        );
    }
}

export default PartnerSlider;