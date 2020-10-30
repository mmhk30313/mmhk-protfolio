import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CV from "../../images/MMHK's CV.pdf";
import Typewriter from 'typewriter-effect';
import me from '../../images/imgMMHK2.png';
import './About.css'


const About = () => {
    return (
        <div className="about home">
            <div className="mt-3">
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <div className="d-flex justify-content-center portfolio-img">
                            <img height="300px" src={me} alt="..." />
                        </div>
                    </Col>
                    <Col sm={6} className="d-flex info mt-3 align-items-center">
                        <div className="aboutMe-text">
                            <h2 className="text-warning">Hello,</h2>
                            <h4 className="text-danger">I'm <span className="text-light"><Typewriter
                                options={{
                                    strings: ["Md. Mehedi Hasan Khan"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></span></h4>
                            <p className="text-info">I'm a Simple, Honest, Soft Spoken & Moderate Educated. A Hardworking Person, Passionate about new technology. Always interested in learning new things.</p>
                            <a href={CV} target="_blank" className="btn btn-outline-danger text-white" download="MMHK'S-CV">Download CV</a>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 details">
                    <Col sm={3}>
                        <div className="box p-3 aboutMe-text">
                            <h6>Education</h6>
                            <p>Wev Development: <span className="color">Programming Hero.com (2020)</span></p>
                            <p>H.S.C: <span className="color">Govt. Science College, Tejgoan, Dhaka (2016)</span></p>
                            <p>Dakhil: <span className="color">UBIKM (2014)</span></p>
                        </div>
                    </Col>
                    <Col sm={5}>
                        <div className="box p-3">
                            <h6>Skills</h6>
                            <p>Web: <span className="color"> HTML5, CSS3, Bootstrap, JavaScript, ES6, React JS, REST Api, Git, Firebase</span></p>
                            <p>Database: <span className="color">Nodejs, Express, MongoDB</span></p>
                            <p>Familiar With: <span className="color">AngularJS</span></p>
                            <p>Tools: <span className="color">VS Code, Github, Chrome Dev</span></p>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="box p-3 portfolio-img">
                            <h6>Personal Info</h6>
                            <p>Name: <span className="color">Md. Mehedi Hasan Khan</span></p>
                            <p>DOB: <span className="color">05-Dec-1998</span></p>
                            <p>Nationality: <span className="color">Bangladeshi</span></p>
                            <p>Blood Group: <span className="color">AB+</span></p>
                        </div></Col>
                </Row>
            </div>
        </div>
    );
};

export default About;