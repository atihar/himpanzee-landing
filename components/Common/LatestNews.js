import React, { Component } from 'react';
import Link from 'next/link';

class LatestNews extends Component {
    render() {
        return (
            <>
                <section className="blog-area ptb-100 bg-F4F7FC">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">See Himpanzee’s team in the press:</span>
                            <h2>Press</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link href="https://www.aircarbon.co/gnt-launch">
                                            <a>
                                                <img src="/images/blog-image/blog-image1.jpg" alt="image" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                    <div className="post-meta">
                                            <ul>
                                                <li>By: 
                                                    <Link href="#">
                                                        <a>himpanzee</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link href="https://www.aircarbon.co/gnt-launch">
                                                <a>Himpanzee’s forest credits on AirCarbon Exchange</a>
                                            </Link>
                                        </h3>
                                        <p>Himpanzee was the first project developer to commit to listing its forest credits using AirCarbon Exchange’s Global Nature Token.</p>

                                        <Link href="https://www.aircarbon.co/gnt-launch">
                                            <a className="read-more-btn">
                                                Read More <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link href="https://youtu.be/t7CD1v-AzBQ">
                                            <a>
                                                <img src="/images/blog-image/blog-image2.jpg" alt="image" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <ul>
                                                <li>By: 
                                                    <Link href="#">
                                                        <a>himpanzee</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link href="https://youtu.be/t7CD1v-AzBQ">
                                                <a>Burning Season</a>
                                            </Link>
                                        </h3>
                                        <p>Watch co-founder Dorjee Sun in the Burning Season trailer, narrated by Hugh Jackman</p>

                                        <Link href="https://youtu.be/t7CD1v-AzBQ" target="_blank">
                                            <a className="read-more-btn">
                                                Watch the trailer <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link href="http://content.time.com/time/specials/packages/article/0,28804,1924149_1924155_1924438,00.html">
                                            <a>
                                                <img src="/images/blog-image/blog-image3.jpg" alt="image" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <ul>
                                                <li>
                                                    By: 
                                                    <Link href="#">
                                                        <a>himpanzee</a>
                                                    </Link>
                                                </li>
                                                {/* <li>June 25, 2019</li> */}
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link href="http://content.time.com/time/specials/packages/article/0,28804,1924149_1924155_1924438,00.html">
                                                <a>TIME Hero of the Environment</a>
                                            </Link>
                                        </h3>
                                        <p>Co-founder Dorjee Sun was named 2009 TIME Hero of the Environment</p>

                                        <Link href="http://content.time.com/time/specials/packages/article/0,28804,1924149_1924155_1924438,00.html">
                                            <a className="read-more-btn">
                                                Read More <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <Link href="https://web.archive.org/web/20110708164950/http:/www.climos.com/news/articles/indonesianproposal.htm">
                                            <a>
                                                <img src="/images/blog-image/blog-image2.jpg" alt="image" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <ul>
                                                <li>By: 
                                                    <Link href="#">
                                                        <a>himpanzee</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <Link href="https://web.archive.org/web/20110708164950/http:/www.climos.com/news/articles/indonesianproposal.htm">
                                                <a>Pay us not to chop down our trees</a>
                                            </Link>
                                        </h3>
                                        <p>Read about the Indonesian proposal in the Wall Street Journal</p>

                                        <Link href="https://web.archive.org/web/20110708164950/http:/www.climos.com/news/articles/indonesianproposal.htm" target="_blank">
                                            <a className="read-more-btn">
                                                Read More <i className="flaticon-right-arrow"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation Shape Image */}
                    <div className="shape-img2">
                        <img src="/images/shape/shape2.svg" alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src="/images/shape/shape3.svg" alt="image" />
                    </div>
                </section>
            </>
        );
    }
}

export default LatestNews;