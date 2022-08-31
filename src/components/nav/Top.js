import React from 'react'
import "./nav.css"
import { Nav, Navbar, Container, } from 'react-bootstrap'; 
// import {Link} from "react-router-dom"

export default function Top() {
    return (
        <div className='top'>
            <Navbar className='topcontent' expand="lg">
                <Container className='topwrapper'>
                    <Navbar.Brand href="#">
                        <img src="images/logo1.jpg" alt="" className="logo" />
                        {/* <h1 className="logo">saran Bowea</h1> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <div className="ul">
                            <a href="#">Home</a>
                        </div>

                        <div className="ul">
                            <a href="#">Porjects</a>
                        </div>

                        <div className="ul">
                            <a href="#">Bogs</a>
                        </div>

                        <div className="ul">
                            <a href="#">About me</a>
                        </div>
                        <div className="ul">
                            <a href="#">Contact</a>
                        </div>







                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
