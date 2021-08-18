import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Profile from '../../Profile.jpg';
import './About.css'

const About = () => {
    return (
        <div id="about">
           <div className="about">
                <h1 className='pt-3 text-center font-details pb-3'>ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center mb-2 mr-2">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center">
                                <Image className="profile justify-content-end rounded-circle" alt="profile" src={Profile} rounded fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className="align-items-start rounded p-3 my-details"  >
                                Hi There! I am Janhvi Patel
                                <br/>
                                <br/>

                                A passionate programmer , born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and MySQL as my tech stack.
                                <br />
                                <br/>


                                Currently I'm in 7th Semester of 'Computer Engineering'.
                                <br />
                                My goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                <br/>
                                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                                <br /> <br />

                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="https://drive.google.com/file/d/12U1gQCs4YsW67PAFrtQyEKllV5YgrBm0/view?usp=sharing">
                                            <Button className="m-2" variant="outline-danger">
                                                My Resume
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/janhvi-patel">
                                            <Button className="m-2" variant="outline-success">
                                                Git Hub</Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/patel-janhvi-a347b0201/">
                                            <Button className="m-2" variant="outline-info">
                                                Linkedin
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default About;
