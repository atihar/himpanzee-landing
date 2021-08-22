import React, { Component } from 'react';

class FeaturedServices extends Component {
    render() {
        return (
            <>
                <section className="featured-services-area ptb-100 pt-0">
                    <div className="container">
                        <div className="section-title">
                            <h2>The path to ecosystem protection</h2>
                            {/* <p>Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.</p> */}
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-featured-box">
                                    <div className="icon">
                                    <img style={{width: "100px"}} className="rounded-circle shadow" src="/images/feature-icon/avoid-cutting.png" alt="team" />
                                    </div>

                                    <h3 className="mt-25">Avoid trees being cut down, and replant trees in degraded areas </h3>
                                    <p>Achieve incentives to avoid planned deforestation and gain revenue from natural assets, rather than traditional methods that destroy our ecosystems.</p>

                                    {/* <a href="/service-details" className="default-btn">Read More <span></span></a> */}
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-featured-box">
                                    <div className="icon color-facd60">
                                    <img style={{width: "100px"}} className="rounded-circle shadow" src="/images/feature-icon/plant-tree.png" alt="plant-tree" />
                                    </div>

                                    <h3 className="mt-25">Protect vulnerable peatlands and blue carbon</h3>
                                    <p>Sustainably manage biologically rich habitats that store carbon, provide coastal protection or improve water quality.</p>

                                    {/* <a href="/service-details" className="default-btn">Read More <span></span></a> */}
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-box">
                                    <div className="icon color-1ac0c6">
                                    <img style={{width: "100px"}} className="rounded-circle shadow" src="/images/feature-icon/tech-monitor.png" alt="plant-tree" />
                                    </div>

                                    <h3 className="mt-25">Use new technology to protect and monitor </h3>
                                    <p>Use innovative technology which makes protection and monitoring easier and more efficient, while maintaining scientific rigour. </p>

                                    {/* <a href="/service-details" className="default-btn">Read More <span></span></a> */}
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-box">
                                    <div className="icon color-1ac0c6">
                                    <img style={{width: "100px"}} className="rounded-circle shadow" src="/images/feature-icon/local-benifits.png" alt="plant-tree" />
                                    </div>

                                    <h3 className="mt-25">Benefits to local economy  </h3>
                                    <p>Undertake meaningful projects that inject long-term benefits into the community, where revenue can flow back to preserving the ecosystem and to Indigenous and local communities. </p>

                                    {/* <a href="/service-details" className="default-btn">Read More <span></span></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default FeaturedServices;