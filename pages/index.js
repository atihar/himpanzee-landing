import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/HoneThree/Banner';
import FeaturedServices from '../components/HoneThree/FeaturedServices';
import PartnerSlider from '../components/Common/Partner/PartnerSlider';
import OurServices from '../components/HoneThree/OurServices';
import Footer from '../components/Layout/Footer';

class Index3 extends Component {
    render() {
        return (
            <> 
                <Navbar />
                <Banner />
                <FeaturedServices />                
                <OurServices />
                <PartnerSlider />
                <Footer />
            </>
        );
    }
}

export default Index3;
