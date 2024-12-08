
import React from 'react';
import './body.css'; // Custom styles for the body
import Header from '../Header/header.jsx';
import Footer from '../Footer/footer.jsx';

function Body() {
    return (
        <div className="body">
            
            <div className="content">
                <h1>About Me</h1>
                <p className="intro">
                    I am a web developer with expertise in <strong>LIMS</strong> and <strong>Crystal Reports</strong>.
                </p>
                <p className="intro">
                    I have knowledge in the following technologies:
                </p>
                <ul className="tech-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>React</li>
                </ul>
            </div>
           
        </div>
    );
}

export default Body;
