import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ProjectsTwoGrid from '../components/Projects/ProjectsTwoGrid';
import Footer from '../components/Layout/Footer';
import LatestNews from '../components/Common/LatestNews';
import Testimonials from '../components/Common/Testimonials';

class Projects3 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Projects And Press" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Projects And Press" 
                />
                
                <ProjectsTwoGrid />
                <LatestNews /> 
                {/* uncomment this for Testimonials section
                <Testimonials />                 */}
                <Footer />
            </>
        );
    }
}

export default Projects3;