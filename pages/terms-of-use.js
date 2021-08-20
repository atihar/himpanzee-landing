import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import TermsAndConditionsContent from '../components/TermsAndConditions/TermsAndConditionsContent';
import Footer from '../components/Layout/Footer';

class TermsAndConditions extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Terms of Use" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Terms of Use" 
                />

                <TermsAndConditionsContent />
                
                <Footer/>
            </>
        );
    }
}

export default TermsAndConditions;