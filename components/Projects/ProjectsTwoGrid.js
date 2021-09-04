import React, { Component } from 'react';
import Link from 'next/link';

class ProjectsTwoGrid extends Component {
    render() {
        return (
            <div className="works-area ptb-100">
                <div className="container">
                    {/* <div className="section-title">
                        <h2>All Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div> */}

                    <div className="container">
                        {/* Our Services One */}
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content">
                                    <h2>Riau Ecosystem Restoration Project</h2>
                                    <p>The Riau Ecosystem Restoration Carbon Project is a commitment to protect and restore 130,000 hectares of peatland ecosystem located in the Kampar Peninsula, Indonesia, while at the same time preserving biodiversity and enhancing the livelihoods of local communities
                                    </p>
                                    <p>Twice the size of Singapore, the Riau ecosystem is made up of five former logging concessions spread across two landscapes in eastern Sumatra. </p>

                                    <p>Through the REDD+ process of avoiding planned deforestation and wetlands conservation and restoration, the Project will preserve the remaining peat swamp forests by preventing their conversion to forestry plantations, containing 823 species of animals and plants. </p>
                                    <p><b>Outcome:</b> 6+ million tonnes of emission reductions per year. </p>
                                    <p>The Riau Ecosystem Restoration Carbon Project seeks to protect and restore 130,090 ha of peatland ecosystem located in the Republic of Indonesia while at the same time preserving biodiversity and enhancing local livelihoods. The Project will avoid 78,425 ha of forest clearing and conversion to an industrial forestry plantation. The Project is on the island of Sumatra and in the Province of Riau. Specifically, it is located on the Kampar Peninsula, which is a rain-fed peatland forest made up of four former logging concessions. Through the REDD+ process of avoided planned deforestation and wetlands conservation and restoration, the Project will be preserving the remaining peat swamp forests by preventing their conversion to forestry plantations.</p>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/Tiger-graphic-Himpanzee.svg" alt="image" />
                                </div>
                            </div>
                        </div>

                        {/* Our Services Two */}
                        <div className="overview-box">
                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/Elephant-graphic-Himpanzee.svg" alt="image" />
                                </div>
                            </div>
                            
                            <div className="overview-content">
                                <div className="content right-content">
                                    <h2>Fire-Free Alliance</h2>
                                    <p>Himpanzee’s Dorjee Sun was the secretariat for the Fire-Free Alliance, which was founded by Indonesia’s largest agricultural companies and NGOs to support fire prevention and adaptation in the community.</p>
                                    <p><b>Outcome:</b> As of 2020, FFA initiatives are being implemented in more than 200 villages in Indonesia, covering more than 1.5 million hectares of land. </p>                                
                                </div>
                            </div>
                        </div>
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content">
                                    <h2>North Pikounda REDD+ Project</h2>
                                    <p>The North Pikounda REDD+ project was Africa’s first Sustainable Forest Management Carbon (REDD+) project, setting aside 93,530 hectares of virgin rainforest, which has become a habitat for 6000 lowland gorillas. </p>

                                    <p>The main activity is the cancellation of the planned degradation and deforestation activities and the decision to instead protect the forest area. The project implements carbon stock monitoring, remote sensed monitoring, field monitoring and social activities.</p>
                                    <p><b>Outcome:</b> Over 1.1 million tonnes of emission reductions, with further millions to come</p>
                                    <p>The North Pikounda REDD+ Project (the Project) is a reducing emission from deforestation and degradation plus conservation and sustainable forestry (REDD+) project designed to protect 92,530 hectares (ha) of unlogged native Congolese forest, legally designated as a selective logging concession. The anticipated selective logging would have been undertaken on the dry lands, consisting on an area of 55,950 ha. The main activity of the North Pikounda REDD+ Project is the cancelation of the planned degradation and deforestation activities and the decision to instead protect the forest area, while maintaining and protecting the biodiversity of the area.</p>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/Gorilla-graphic-Himpanzee.svg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
        );
    }
}

export default ProjectsTwoGrid;