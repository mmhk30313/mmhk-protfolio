import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import './Works.css';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import fakeData from '../../FakeData/fakeData';

const Blog = () => {
    const blogs = fakeData;
    return (
        <div className="">
            <Container className="mt-5">
                <h3 className="text-center text-white">My Recent Works</h3>
                <Row className="pb-5 mt-3">
                    {
                        blogs.map(blog => <Col className="py-3 d-flex justify-content-center">
                            <Card style={{ width: '22rem'}}>
                                <Card.Img variant="top" src={blog.img} />
                                <div className="details">
                                    <div className="content">
                                        <h3>{blog.title}</h3>
                                        <p>{blog.description}</p>
                                        <div className="link-repo">
                                            <a href={blog.link} className="p-3" target="_blank"><FontAwesomeIcon icon={faGithubSquare} size="2x"/></a>
                                            <a href={blog.liveLink} className="p-3" target="_blank"><FontAwesomeIcon icon={faExternalLinkSquareAlt} size="2x"/></a>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Blog;