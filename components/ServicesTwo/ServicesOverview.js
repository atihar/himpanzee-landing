import React, { Component } from 'react';

class ServicesOverview extends Component {
    render() {
        return (
            <section className="overview-area ptb-100">
                <div className="container">
                    <h2 className="py-4">Himpanzee conserves and restores natural habitats around the world. Our company is a carbon project developer with a proven business model that delivers benefits for partners, local communities and the environment.</h2>
                    <div className="overview-box it-overview">
                        <div className="overview-content">
                            <div className="content">
                                <h2>Second to none technical experience</h2>
                                <p>Our team has more than 15 years of experience in supporting landowners and partners to identify, implement and monitor carbon and biodiversity projects that deliver results. We can help revegetate heavily degraded land and recreate forests to capture carbon, and conserve vulnerable peatlands to stop the emission of carbon and protect habitats for biodiversity. </p>
                                <p>We assess carbon; obtain community support; and prepare documents for projects to be validated under rigorous standards including the Verified Carbon Standard (VCS) and obtain carbon credits. We are proud to work under the VCS, the world’s most widely used voluntary emissions reduction standard. </p>
                                <p>We are proud to offer an end-to-end carbon origination service including: </p>
                                <ul className="features-list">
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Feasibility Review
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Project Design
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Validation
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className='bx bxs-badge-check'></i>
                                            Monitoring and verification 
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="overview-image">
                            <div className="image">
                                <img src="/images/services/it-service1.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="overview-box it-overview">
                        <div className="overview-image">
                            <div className="image">
                                <img src="/images/services/it-service2.png" alt="image" />
                            </div>
                        </div>
                        
                        <div className="overview-content">
                            <div className="content right-content">
                                <h2>Innovative technologies</h2>
                                <p>We scale our projects by investing in technology and partnering with key industry players to make protection more effective and monitoring more efficient. </p>
                                <p>With the urgency of climate change, we bring new and innovative technologies from around the world to your site to accelerate meaningful change. We recognise that the challenge is meaningfully tracking what’s happening on site including measuring biodiversity - and we are doing something about it. </p>
                                <p>We are revolutionising projects through the use of remote sensing technology, drones, artificial intelligence, and environmental DNA. </p>
                            </div>
                        </div>
                    </div>

                    <div className="overview-box it-overview">
                        <div className="overview-content">
                            <div className="content">
                                <h2>Creating opportunities for local communities</h2>
                                <p>Our projects strengthen economies through creation of jobs for local communities. Himpanzee's core focus is on creating alternative revenue streams that do not destroy nature. </p>
                                <p>We also ensure there is consultation with local communities and Indigenous populations in forest management plans that impact them. Our team performs a comprehensive needs assessment to take a data-led approach to development interventions. </p>
                                <p>Across the world, there are companies which have caused widespread destruction of the remaining peatlands and tropical forests around the world. Often local communities are ignored as their forests are cut around them. At the heart of our success is our work with community leaders, consulting with government officials and forming partnerships with civil society to implement our projects.</p>                               
                            </div>
                        </div>

                        <div className="overview-image">
                            <div className="image">
                                <img src="/images/services/it-service3.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesOverview;