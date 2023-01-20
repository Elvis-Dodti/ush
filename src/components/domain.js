import React from 'react'
import './domain.css'
import web from '../resources/web-development.png'
import app from '../resources/developer.png'
import trophy from '../resources/trophy.svg'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Domains() {
    return (
        <>
            <section id='domains'>
                <Col md={12}>
                    <h1>Domains</h1>
                </Col>
                <Col md={12}>
                    <Row className='list-inline mx-auto'>

                        <Col className='da domaina list-inline-item mx-3'>
                            <div className='hold text-center'>
                                <img src={web} alt='' className='ima' />
                                <h3>WEB DEVELOPMENT</h3>
                                <img src={trophy} alt='' className='trophy'/>
                                <div class="grid-box-1">
                                    <p class="para-trophy">Winners<br /> 10,000</p>
                                    <p class="para-trophy"> Runner Ups <br />5,000</p>
                                </div>

                            </div>
                        </Col>
                        <Col className='da domainb list-inline-item mx-3'>
                            <div className='hold text-center'>
                                <img src={app} alt='' className='imb' />
                                <h3>APP DEVELOPMENT</h3>
                                <img src={trophy} alt='' className='trophy'/>
                                <div class="grid-box-1">
                                    <p class="para-trophy">Winners<br /> 10,000</p>
                                    <p class="para-trophy"> Runner Ups <br />5,000</p>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Col>

            </section>
        </>
    );
}

export default Domains;