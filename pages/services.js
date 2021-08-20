import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ServicesOverview from '../components/ServicesTwo/ServicesOverview';
import OurServices from '../components/ServicesTwo/OurServices';
import Footer from '../components/Layout/Footer';

class Services2 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Our Services" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Services" 
                />

                <ServicesOverview />

                <OurServices />
                
                <Footer />
            </>
        );
    }
}

export default Services2;