import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './timeline.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Timeline() {
  return (
    <>
      <section id='timeline'>
        <Col><h1>Schedule</h1></Col>
        <Col><VerticalTimeline
          lineColor='black'>
          <VerticalTimelineElement
            date='15th January 2023'
            iconStyle={{ background: 'rgb(0,0, 0)', color: '#fff' }}>
            <h2 className='vertical-timeline-element-title'
              style={{ textAlign: "left" }}>Registrations Start</h2>
            <p>You can register for our hackathon using the DevFolio link provided above.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='6th February - 8th February'
            iconStyle={{ background: 'rgb(0,0, 0)', color: '#fff' }}>
            <h2 className='vertical-timeline-element-title'
              style={{ textAlign: "left" }}>Team Confirmation and RSVP</h2>
            <p>We will be reviewing and contacting the participants and confirming their participation.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='5th February'
            iconStyle={{ background: 'rgb(0,0, 0)', color: '#fff' }}>
            <h2 className='vertical-timeline-element-title'
              style={{ textAlign: "left" }}>Registration End</h2>
            <p>We will be reviewing and contacting the participants and confirming their participation.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='10th February'
            iconStyle={{ background: 'rgb(0,0, 0)', color: '#fff' }}>
            <h2 className='vertical-timeline-element-title'
              style={{ textAlign: "left" }}>Release of Problem Statements</h2>
            <p></p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='11th February'
            iconStyle={{ background: 'rgb(0,0, 0)', color: '#fff' }}>
            <h2 className='vertical-timeline-element-title'
              style={{ textAlign: "left" }}>Hackathon Begins</h2>
            <p>Let the HACKATHON begin..!!</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date='12th February'
            iconStyle={{ background: 'rgb(0,0, 0)', color: '#fff' }}>
            <h2 className='vertical-timeline-element-title'
              style={{ textAlign: "left" }}>Hackathon Ends</h2>
            <p>The hackathon would end and we would contact winning teams for further processes.</p>
          </VerticalTimelineElement>
        </VerticalTimeline></Col>
        

      </section>

    </>
  );
}

export default Timeline;