import React from 'react'
import Row from 'react-bootstrap/Row';
import fbg from '../resources/backdropa.svg'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './intro.css'

function Intro() {
    return ( 
        <>
        <section id='intro'>
            <Container>
                <Col>
                <Col>
                <img src={fbg} alt=''/>
                </Col>
                <Col>
                <div className='infobox center col-md-12'>
                    <h1>UNSCR;PT 2023</h1>
                    <h2>Rookie's Hackathon</h2>
                    <h3>Exclusively for <br/> 2nd Year Students</h3>
                </div>
                </Col>
                
                </Col>
            </Container>
        </section>
        </>
     );
}

export default Intro;