import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import L_ReactToDoList from "../../assets/img/todo.png";
import L_JanhviFashion from "../../assets/img/jf.png";
import L_REACT from "../../assets/img/react.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/html-5.svg";
import L_CSS3 from "../../assets/img/css3.svg";
import L_FLASK from "../../assets/img/flask.svg";
import L_PYTHON from "../../assets/img/python.svg";
import L_MATERIALUI from "../../assets/img/material-ui-1.svg";

import "./timeline.style.css";

const Projectstimeline = () => {
    return (
        <div id="projects">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <Timeline>
          <Events>
          {/* Project: Todo List With MUI */}
          <ImageEvent
              date="01/10/2020"
              className="text-center"
              text="React ToDo App"
              src={L_ReactToDoList}
              alt="React ToDo App"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>
  
                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                          <hr />
                          <strong>Features:</strong>
                          <ul className="list-styles pt-1">
                            <li>Keeps track of your Todos</li>
                            <li>Powered by React and Material UI</li>
                            <li>Respoisive Design</li>
                          </ul>
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_HTML5}
                                  alt="HTML 5"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                HTML5
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_CSS3}
                                  alt="CSS 3"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                CSS3
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_REACT}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                React
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_MATERIALUI}
                                  alt="Material-UI"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Material-UI
                              </span>
                            </li>
                            
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center ">
                
                  <UrlButton 
                    href="https://github.com/janhvi-patel/To-do-List"
                    target="_blank"
                    
                  >
                    SOURCE CODE
                  </UrlButton>
                
                </div>
              </div>
            </ImageEvent>


        {/*Janhvi Fashion*/}

            <ImageEvent
            date="19/07/2020"
            className="text-center"
            text="Janhvi Fashion"
            src={L_JanhviFashion}
            alt="JanhviFashion"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This website made with purpose of personal buisness.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>See all over clothes</li>
                          <li>Contact with us</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FLASK}
                                alt="Flask"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Flask
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              python
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/janhvi-patel/janhvi-fashion"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
            </Events>
            </Timeline>
            
        </div>
    )
}

export default Projectstimeline;
