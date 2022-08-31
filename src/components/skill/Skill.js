import React from 'react'
import "./skill.css"
import { Container,Row,Col,ProgressBar } from 'react-bootstrap'

export default function Skill() {

    const Html = 90;
    const Css = 80;
    const Javascript = 90;
    const Bootstrap = 70;
    const ReactJs = 80;
    const Wordpress = 90;
    const mongodb = 90;
    const nodeJs = 80;
    const express = 90;
    const Laravel = 70;
    const Php = 80;
    const DatabaseMysql = 90;


  return (
    <div>
      <Container>
        
      <div className="skillcontent">
                    <h1>My Skills & Familiarity</h1>
                    <hr />
                    <p>
                        Below is the list of skills and technologies that I used till now. The assumptions are made based on my thinking and confidence.
                    </p>
                </div>

                <Row className='softskill'>
                    <Col md={6} className='skillwrapper'>

                        <h1>Html</h1>
                        {/* <ProgressBar now={html} label={`${html}%`} />; */}
                        <ProgressBar now={Html} label={`${Html}%`} />

                        <h1>Css</h1>
                        <ProgressBar now={Css} label={`${Css}%`} />

                        <h1>Javascript</h1>
                        <ProgressBar now={Javascript} label={`${Javascript}%`} />

                        <h1>Bootstrap</h1>
                        <ProgressBar now={Bootstrap} label={`${Bootstrap}%`} />
                        <h1>ReactJs</h1>
                        <ProgressBar now={ReactJs} label={`${ReactJs}%`} />


                        <h1>Wordpress</h1>
                        <ProgressBar now={Wordpress} label={`${Wordpress}%`} />

                    </Col>
                    <Col md={6} className='skillwrapper'>
                        <h1>mongodb</h1>
                        <ProgressBar now={mongodb} label={`${mongodb}%`} />

                        <h1>nodeJs</h1>
                        <ProgressBar now={nodeJs} label={`${nodeJs}%`} />

                        <h1>express</h1>
                        <ProgressBar now={express} label={`${express}%`} />

                        <h1>Laravel</h1>
                        <ProgressBar now={Laravel} label={`${Laravel}%`} />
                        <h1>Php</h1>
                        <ProgressBar now={Php} label={`${Php}%`} />


                        <h1>DatabaseMysql</h1>
                        <ProgressBar now={DatabaseMysql} label={`${DatabaseMysql}%`} />
                    </Col>
                </Row>
      </Container>
    </div>
  )
}
