import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import WhyChooseFour from '../components/why-choose-us/WhyChooseFour';
import FeatureTwo from '../components/features/FeatureTwo';
import ProjectOne from '../components/project/ProjectOne';
import ServiceFour from '../components/services/ServiceFour';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';
import Header from '../common/header/Header';

const ServicesPage = () => {
    return (
        <>
        <Header/>
            <Breadcrumb
                heading="Services Us"
                currentPage="Services Us" 
            />
            <WhyChooseFour />
            <FeatureTwo />
            <ProjectOne />
            <ServiceFour />
            <FooterOne />
        </>
    )
}

export default ServicesPage;