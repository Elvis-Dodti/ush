import React from 'react';
import './about.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import InfoBox from './info_box';
import Container from 'react-bootstrap/Container';
import LargePurpleBubble from './purple_bubble_L';
import MediumPurpleBubble from './purple_bubble_m';
import SmallPurpleBubble from './purple_bubble_s';
import MediumRedBubble from './red_bubble_m';
import SmallRedBubble from './red_bubble_s';
import bgb from '../resources/layer5.svg'


function AboutUs() {
    return (
        <section id="about">
            
            <Container>
                <Row><h1>ABOUT</h1></Row>
                <Row>
                <Col>
                    <div className='seca'>
                        <Container className='about_info col-md-8 center w-50'>

                            <Row className='text-justify ml-3 mr-3'>
                                <p className='about_text'>UnScript, Fr.CRCE's annual national level hackathon has entered its 4th edition.</p>
                            </Row>
                            <Row className=''>
                                <Col className='center info_box'><p className='info_text'>24 hrs</p></Col>
                                <Col className='center info_box'><p className='info_text'>2 Domains</p></Col>
                                <Col className='center info_box'><p className='info_text'>40 Teams</p></Col>
                            </Row>
                            <Row className='text-justify ml-3 mr-3'>
                                <p className='about_text'>UnScript wishes in bringing opportunities to all coders to have a
                                    hands-on experience on various domains and bring the best out of them. </p>
                            </Row>

                        </Container>

                    </div>
                </Col>
                <Col className="w-50">
                    <img src={bgb} alt='' />
                </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutUs;