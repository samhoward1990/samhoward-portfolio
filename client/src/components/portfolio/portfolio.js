import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './portfolio.css';

import Continuum from '../../images/continuum.png';
import TrebleFinder from '../../images/treble-finder.png';
import Eureka from '../../images/eureka.png';

const Portfolio = () => (
    <Container className="mt-3">
        <div className="bg-white">
            <Row>
                <Col xs="12">
                    <h2 className="styled-header p-3 ml-5 mr-5 border-bottom">Portfolio</h2>
                </Col>
            </Row>
            <Row>
                <Col xs="4">
                    <div className="img-container">
                        <Image src={Continuum} alt="Continuum" fluid />
                        <div className="img-text">Continuum</div>
                    </div>
                </Col>
                <Col xs="4">
                    <div className="img-container">
                        <Image src={TrebleFinder} alt="Treble Finder" fluid />
                        <div className="img-text">Treble Finder</div>
                    </div>
                </Col>
                <Col xs="4">
                    <div className="img-container">
                        <Image src={Eureka} alt=" Eureka" fluid />
                        <div className="img-text">Eureka</div>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
);

export default Portfolio;