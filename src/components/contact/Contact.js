import React from 'react'
import "./contact.css"
import { Container } from 'react-bootstrap'

export default function Contact() {
  return (
    <div>
      <Container>
      <div className="contactme">
                    <div className="contactcontent">
                        <h1>Contact me</h1>
                        <div className="hr">
                            <hr />
                        </div>
                        <p>
                            You can contact me by the form below or send email to kamrulhaider.ssb@gmail.com
                        </p>
                    </div>
                    <div className="contactform">
                        <h5>name</h5>
                        <input type="text" className="input" />

                        <h5>email</h5>
                        <input type="text" className="input" />

                        <h5>massees</h5>
                        <input type="text" className="messes" />
                         <div className="projectbtn contactbtn">
                          send
                         </div>
                    </div>
                </div>

                <div className="fotter">
                    <img src="images/logo2.jpg" alt="" />
                    <h4>Made by sopon khakha 2022 ** email:sksoponsk0@gmail.com</h4>
                </div>
      </Container>
    </div>
  )
}
