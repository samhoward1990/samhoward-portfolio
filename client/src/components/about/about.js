import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './about.css';

import Sam from '../../images/sam.jpg';

const About = () => (
    <Container className="mt-3">
        <div className="bg-white">
            <Row>
                <Col xs="12">
                    <h2 className="styled-header border-bottom p-3 ml-5 mr-5 mb-0">About Me</h2>
                </Col>
            </Row>
            <Row>
                <Col xs="3">
                    <Image className="m-5" src={Sam} alt="Sam Howard" fluid />
                </Col>
                <Col xs="9">
                    <p className="ml-5 mt-5 mr-5 ">I am a musician, teacher and now an aspiring web developer in Dallas, Texas. Musically I enjoy playing jazz and blues, as well as writing in many styles. I have been teaching for over 5 years, and have taught students of all ages at several studios. I have played in several bands in the Dallas/Fort Worth area, and enjoy collaboration.</p>
                    <p className="ml-5 mr-5">As a developer I hope to bring creative and logical solutions to my workplace. I also would like to bring my spirit of teamwork and collaboration that I have learned from working in bands to the tech field. As an active learner I am looking forward to learning more everyday throughout my career.</p>
                </Col>
            </Row>
        </div>
    </Container>
);

export default About;