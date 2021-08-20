import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import TeamCard from '../components/Team/TeamCard';
import Footer from '../components/Layout/Footer';

class Team extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Team"  
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Team" 
                />

                <TeamCard />
                
                <Footer />
            </>
        );
    }
}

export default Team;