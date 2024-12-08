import React from 'react';
import './footer.css'; // Import your CSS for footer styles
import { FaLinkedin } from 'react-icons/fa'; // Font Awesome LinkedIn icon (make sure to install react-icons)

function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/pradeep-k-6349b527a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} color="white" />
                
            </a>
        </div>
    );
}

export default Footer;
