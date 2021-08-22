import React, { Component } from 'react';

class OurServices extends Component {
    render() {
        return (
            <section className="pt-100 pb-70 gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Taking action on the Global Goals</h2>
                            <p>We support in your implementation of the United Nations Sustainable Development Goals, in particular:</p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon p-3">
                                    <a href="https://sdgs.un.org/goals/goal13" target="_blank">
                                        <img src="/images/sdg-13.png"></img>
                                    </a>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>SDG 13</h3>
                                <p>Take urgent action to combat climate change and its impacts.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon p-3">
                                <a href="https://sdgs.un.org/goals/goal15" target="_blank">
                                    <img src="/images/sdg-15.png"></img>
                                </a>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>SDG 15</h3>
                                <p>Protect, restore and promote sustainable use of terrestrial ecosystems.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one bg-white center">
                                <div className="icon p-3">
                                <a href="https://sdgs.un.org/goals/goal17" target="_blank">
                                    <img src="/images/sdg-17.png"></img>
                                </a>
                                    <i className='bx bxs-badge-check check-icon'></i>
                                </div>
                                <h3>SDG 17</h3>
                                <p>Strengthen the means of implementation and revitalize the global.</p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
        );
    }
}

export default OurServices;