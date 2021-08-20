import React, { Component } from 'react';
import Link from 'next/link';

class TeamCard extends Component {
    render() {
        return (
            <>
                <section className="team-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <img style={{filter: "grayscale(100%)", width:"220px"}} className="rounded-circle shadow" src="/images/team-image/dorjee.jpg" alt="team" />
                                <h4 className="mt-4">Dorjee Sun</h4>
                                <h6>Co Founder, Himpanzee</h6>
                                <p>Dorjee is a serial social entrepreneur who has co-founded 20 companies with 2 acquisitions and 4 exits and assets sales in the areas of conservation, agriculture, philanthropy, technology and financial innovation. He helped secure $400M+ with project partners and clients such as Rio Tinto, Bank of America Merrill Lynch, Olam and Twitter. 
                                <br/><br/>TIME Magazine named him a “Hero of the Environment” and the African Rainforest Conservancy honoured him with an Earth Day Award and by naming a newly discovered blue spotted species of chameleon from the Tanzania rainforest – the “Kinyongia dorjeesuni”. 
                                <br/><br/>Dorjee has been named a World Economic Forum Young Global Leader, CPA Top 20 Business Leaders, one of Esquire Magazine’s 5 Gentlemen of Philanthropy, he has won the Asialink Leaders Program Alumni Award, was named an Asia Society 21 Fellow, a World Cities Summit Future Leader, is on the board of Al Gore's Australian charity "Climate Reality" and his work has been covered in the Wall Street Journal, Forbes, Fortune, TIME, Esquire, ABC, PBS, BBC, Discovery, CNBC, Sydney Morning Herald, NASDAQ and other media outlets.
                                </p>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <img style={{filter: "grayscale(100%)", width:"220px"}} className="rounded-circle shadow" src="/images/team-image/ralph.jpg" alt="team" />
                                <h4 className="mt-4">Dorjee Sun</h4>
                                <h6>Co-founder, Head of Carbon & Legal Counsel, Himpanzee</h6>
                                <p>Ralph is a carbon mitigation expert with experience in all scales of activity, particularly with regards to large-scale forestry and agroforestry activity. He is also the chairman of the Greenhouse Gas Management Institute, a supporting organization that is dedicated to the coordination of GHG experts and consults and teaches GHG accounting on a global basis.
                                <br/><br/>During his time at Carbon Conservation, he was responsible for all aspects of the development of all its forest carbon projects, including Minding the Carbon Store with Rio Tinto in Queensland, Australia, Ulu Masen in Aceh, Indonesia which was the first CCBA validated REDD project, Lebong in Indonesia, and also in achieving the validation and verification of North Pikounda REDD+ Project (via VCS methodology VM0011), which was Africa's first Sustainable Forest Management Carbon (REDD+) project, setting aside 93,530 hectares of virgin rainforest, which became a habitat for 6,000 lowland gorillas and is expected to originate a total of 4.9 million emission reduction credits. 
                                <br/><br/>As the director of Greenlaw International LLC., Ralph developed the Republic of Congo's forest based Emission Reduction Program information note (ER-PIN), including national baselines (a jurisdictional REDD+ LEDS program), achieving selection to the World Bank's FCPF Carbon Fund's Pipeline and releasing $.65 million for program design.
                                </p>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <img style={{filter: "grayscale(100%)", width:"220px"}} className="rounded-circle shadow" src="/images/team-image/joshua.jpg" alt="team" />
                                <h4 className="mt-4">Joshua Ng</h4>
                                <h6>Project Specialist, Himpanzee</h6>
                                <p>Joshua has worked with Himpanzee since 2020, when he successfully co-developed the world’s largest REDD+ project in Indonesia. He completed the carbon project technical work, development, and assisted in the on-site validation of the project.
                                <br/><br/>Joshua has always been passionate about nature and the outdoors and has spent his education at the intersection of the environment and technology. Educated in molecular biology, with a specialisation in tropical ecology, Joshua’s specialist expertise is in sustainability, carbon project development and biodiversity with a special interest in protecting genetic diversity and ecosystem conservation.
                                <br/><br/>Joshua has always been an activist in social change. During his university studies, he led a team of 22 undergraduate students to Yangon, Myanmar and achieved project milestones by constructing a section of a school and rebuilding a kitchen walkway. He collaborated with 3 different project teams to create a comprehensive curriculum to Burmese students to comprehend English, Mathematics and Science knowledge.
                                </p>
                            </div>

                        {/* <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team-image/team10.jpg" alt="team" />
                                        
                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>John Smith</h3>
                                        <span>CEO & Founder</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team-image/team11.jpg" alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Lucy Eva</h3>
                                        <span>Backend Team Leader</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team-image/team12.jpg" alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Steven Smith</h3>
                                        <span>ReactJS Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team-image/team13.jpg" alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Williams Smith</h3>
                                        <span>AngularJS Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team-image/team14.jpg" alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Harry</h3>
                                        <span>VueJS Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team-image/team15.jpg" alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>George</h3>
                                        <span>Web Designer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team-image/team16.jpg" alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Charlie</h3>
                                        <span>SEO Specialist</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team-image/team17.jpg" alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Amelia</h3>
                                        <span>Marketing Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="single-team-box">
                                    <div className="image">
                                        <img src="/images/team-image/team18.jpg" alt="team" />

                                        <div className="social">
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="/team#">
                                                <a target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3>Joe Root</h3>
                                        <span>Web Developer</span>
                                    </div>
                                </div>
                            </div>

                        
                            <div className="col-lg-12 col-sm-12">
                                <div className="pagination-area">
                                    <Link href="/team#">
                                        <a className="prev page-numbers">
                                            <i className="fas fa-angle-double-left"></i>
                                        </a>
                                    </Link>
                                    <Link href="/team#">
                                        <a className="page-numbers">1</a>
                                    </Link>
                                    <span className="page-numbers current" aria-current="page">2</span>
                                    <Link href="/team#">
                                        <a className="page-numbers">3</a>
                                    </Link>
                                    <Link href="/team#">
                                        <a className="page-numbers">4</a>
                                    </Link>
                                    <Link href="/team#">
                                        <a className="next page-numbers">
                                            <i className="fas fa-angle-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Animation shape image */}
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
                    <div className="shape-img9">
                        <img src="/images/shape/shape9.png" alt="image" />
                    </div>
                    <div className="shape-img10">
                        <img src="/images/shape/shape10.png" alt="image" />
                    </div>
                    </div>
                </section>
            </>
        );
    }
}

export default TeamCard;