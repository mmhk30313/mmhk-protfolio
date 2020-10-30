import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa500px, faFacebookSquare, faFlickr, faGithubSquare, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import './Links.css'
import { Col, Container, Row } from 'react-bootstrap';

const Links = () => {
    return (
        <Container style={{height: '22.3vh'}} className="mt-5 pb-2 container-fluid">
            <Row>
                <Col className="links mt-1 text-center pb-2">
                        <a href="https://github.com/mmhk30313" className="p-3" target="_blank"><FontAwesomeIcon icon={faGithubSquare} size="2x" /></a>
                        <a href="https://www.linkedin.com/in/mehedihasan30313/" className="p-3" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100024310209289" className="p-3" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></a>
                        <a href="https://500px.com/" className="p-3"><FontAwesomeIcon icon={fa500px} size="2x" target="_blank" /></a>
                        <a href="https://www.flickr.com/explore" className="p-3"><FontAwesomeIcon icon={faFlickr} size="2x" /></a>
                        {/* <a href="https://www.youtube.com/channel/UCirsujJyRcO05BQSERL-2iw?view_as=subscriber" className="p-3"><FontAwesomeIcon icon={faYoutubeSquare} size="2x" /></a> */}
                        <a href="mailto:{mehedihasan30313@gmail.com}" className="p-3" target="_blank"><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" /></a>
                </Col>
            </Row>
            <Row>
                <Col className={`copyright text-center pb-2 mt-1`}>
                    <p>Copyright @<span className="copyright-name">MMHK</span> {new Date().getFullYear()} || All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Links;