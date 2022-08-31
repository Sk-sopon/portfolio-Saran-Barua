import './home.css'
import React from 'react'
import Top from '../nav/Top'
import { Col, Container, Row } from 'react-bootstrap';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Type from '../typewriter/Type';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Skill from '../skill/Skill';


export default function Home() {

    return (
        <div className='home'>
            <Top className='topber' />
            <Container className='homecontent'>
                <Row className='homewrapper'>
                    <Col md={5} className='homeimgwrapper' >
                        <img className='homeimg' src="images/sk.jpg" alt="" />
                    </Col>

                    <Col className='homeright' md={7}>
                        <h1>Saran Barua</h1>
                        <Type />
                        <hr className='hr' />
                        <p className='homep'>I am a passionate web developer who wants to learn more and more about web-based technology. I want to touch the highest peak of web development and provide value to the organization I work.</p>

                        <div className="iconsbtn">

                            <Row>
                                <Col md={4} className="homeicon">
                                    <a className='iconlink' href="SaranBarua.pdf"><CloudDownloadIcon className='icon' /><span>resum</span></a>
                                </Col>
                                <Col md={4} className="homeicon">
                                    <a className='iconlink' href="https://www.linkedin.com/in/saran-barua/?fbclid=IwAR1Gr_-pWSuTsAH1M_6L8sNHfkHOvnNHIaqm_Jg1AIKvrzB6Tth7lb83QY0"><LinkedInIcon className='icon' /><span>LinkedIn</span></a>
                                </Col>
                                <Col md={4} className="homeicon">
                                    <a className='iconlink' href="https://github.com/saranbarua?fbclid=IwAR0a5Ss0xcdZOJnLDgs7Pp2e2gTrE33R7ZAcidMvtV8nuaEwAOrLk1jjKNs"><GitHubIcon className='icon' /><span>GitHub</span></a>
                                </Col>
                            </Row>


                        </div>

                    </Col>
                </Row>


                {/* ----------skill-------- */}

<Skill/>

                {/* --------projects---------- */}




                {/* ---------projects--------- */}


           <Projects/>

 {/* -------contact--------- */}
              <Contact/>
            </Container>

        </div>
    )
}
