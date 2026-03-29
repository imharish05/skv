import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleGeneralContracting from '../components/single-service/SingleGeneralContracting';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';
import Header from '../common/header/Header';

const GeneralContracting = () => {
    return (
        <>
        <Header/>
            <Breadcrumb
                heading="General Contracting"
                currentPage="General Contracting" 
            />
            <SingleGeneralContracting />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default GeneralContracting;