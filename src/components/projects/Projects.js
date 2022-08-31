import React from 'react'
import "./project.css"
import { Container, Row, Col } from 'react-bootstrap'

export default function Projects() {
    return (
        <div>
            <Container>
                <div projecttitle>
                    <div className='projectContent'>
                        <h1>My Projects List</h1>
                        <hr />
                        <p>
                            Here are the top projects that I have done throughout my Journey of web development.
                        </p>
                    </div>
                </div>

                <Row>
                    <Col className='projectimgwrapper' >
                        <Row className='project'>
                            <Col className='projectimg' md={4}>
                                <div className="projectimage">
                                    <img src="images/1.jpg" alt="" />
                                </div>
                                <div className="projectover">
                                    <div className="projectContentWrapper">
                                        <h1>Pacific Cliff</h1>
                                        <p>It is a delivery service website created only with html and css and also included a admin panel design.</p>
                                        <button className="projectbtn">
                                            detils
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <Col className='projectimg' md={4}>
                                <div className="projectimage">
                                    <img src="images/2.jpg" alt="" />
                                </div>
                                <div className="projectover">
                                    <div className="projectContentWrapper">
                                        <h1>Aurna Watch</h1>
                                        <p>It is a niche website project of the watch. Here registered users can order watches and manage their orders.</p>
                                        <button className="projectbtn">
                                            detils
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <Col className='projectimg' md={4}>
                                <div className="projectimage">
                                    <img src="images/3.jpg" alt="" />
                                </div>
                                <div className="projectover projectthree">
                                    <div className="projectContentWrapper">
                                        <h1>Chiropractic Care</h1>
                                        <p>It is a Healthcare Service website where users can see the details of a service as well as book them.</p>
                                        <button className="projectbtn">
                                            detils
                                        </button>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Col>

                </Row>
                <Row>
                    <Col className='projectimgwrapper' >
                        <Row className='project'>
                            <Col className='projectimg' md={4}>
                                <div className="projectimage">
                                    <img src="images/2.jpg" alt="" />
                                </div>
                                <div className="projectover">
                                    <div className="projectContentWrapper">
                                        <h1>Aurna Watch</h1>
                                        <p>It is a niche website project of the watch. Here registered users can order watches and manage their orders.</p>
                                        <button className="projectbtn">
                                            detils
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <Col className='projectimg' md={4}>
                                <div className="projectimage">
                                    <img src="images/5.jpg" alt="" />
                                </div>
                                <div className="projectover">
                                    <div className="projectContentWrapper">
                                        <h1>Pacific Cliff</h1>
                                        <p>It is a delivery service website created only with html and css and also included a admin panel design.</p>
                                        <button className="projectbtn">
                                            detils
                                        </button>
                                    </div>
                                </div>

                            </Col>
                            <Col className='projectimg' md={4}>
                                <div className="projectimage">
                                    <img src="images/3.jpg" alt="" />
                                </div>
                                <div className="projectover">
                                    <div className="projectContentWrapper">
                                        <h1>Chiropractic Care</h1>
                                        <p>It is a Healthcare Service website where users can see the details of a service as well as book them.</p>
                                        <button className="projectbtn">
                                            detils
                                        </button>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
