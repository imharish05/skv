import React from 'react';
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ContactMap from "../components/contact/ContactMap";
import ContactForm from "../components/contact/ContactForm";
import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";
import Header from '../common/header/Header';

const ContactPage = () => {
    return (
        <>
        <Header/>
            <Breadcrumb
                heading="Contact Us"
                currentPage="Contact Us" 
            />
            <ContactForm />
            <ContactMap />
            <FooterOne />
        </>
    )
}

export default ContactPage;