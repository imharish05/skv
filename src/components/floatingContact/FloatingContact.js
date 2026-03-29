import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaAngleUp, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const FloatingContact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const phoneNumber = "1234567890"; 

    const isHomePage = location.pathname === "/" || location.pathname === "/home";

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [isHomePage]);

    if (isHomePage) return null;

    return (
        <div className={`floating-container ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
             style={{ transition: 'opacity 0.4s ease', pointerEvents: isVisible ? 'auto' : 'none' }}>
            
            {/* WhatsApp - Original Green */}
            <a href={`https://wa.me/${phoneNumber}`} 
               className="btn-floating text-white shadow-lg" 
               target="_blank" rel="noopener noreferrer">
                <IoLogoWhatsapp/>
            </a>

            {/* Phone - Your Blue or BS Primary */}
            <a href={`tel:${phoneNumber}`} 
               className="btn-floating bg-primary text-white shadow-lg">
                <FaPhoneAlt />
            </a>

            {/* Scroll Top - Black Background */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="btn-floating bg-dark text-white shadow-lg border-0">
                <FaAngleUp/>
            </button>
        </div>
    );
};

export default FloatingContact;