import React from 'react';
import './about.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import LargePurpleBubble from './purple_bubble_L';
// import MediumPurpleBubble from './purple_bubble_m';
// import SmallPurpleBubble from './purple_bubble_s';
// import MediumRedBubble from './red_bubble_m';
// import SmallRedBubble from './red_bubble_s';
import bgb from '../resources/layer5.svg'


function AboutUs() {
    return (
        <section id="about"  className="parta">
            
            <Container>
                <Row><h1>ABOUT</h1></Row>
                <Row  className=" align-items-center list-inline mx-auto">
                <Col md={12} className="w-40 list-inline-item mx-3">
                    <div className='seca'>
                        <Container className='about_info col-md-8 center w-100'>
                            <Row className="align-items-center"><Row className='text-justify ml-3 mr-3'>
                                <p className='about_text'>UnScript, Fr.CRCE's annual national level hackathon has entered its 4th edition.</p>
                            </Row>
                            <Row>
                                <Col className='center info_box'><p className='info_text'>24 hrs</p></Col>
                                <Col className='center info_box'><p className='info_text'>2 Domains</p></Col>
                                <Col className='center info_box'><p className='info_text'>40 Teams</p></Col>
                            </Row>
                            <Row className='text-justify ml-3 mr-3'>
                                <p className='about_text'>UnScript wishes in bringing opportunities to all coders to have a
                                    hands-on experience on various domains and bring the best out of them. </p>
                            </Row></Row>
                            

                        </Container>

                    </div>
                </Col>
                <Col md={12} className="sideim list-inline-item mx-3 w-40">
                    <img src={bgb} alt='' />
                </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutUs;