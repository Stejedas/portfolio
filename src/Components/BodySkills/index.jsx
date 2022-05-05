import React from "react";
import './style.css'
import './index.scss'
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { DiMongodb, DiNodejsSmall, DiCss3, DiHtml5, DiReact, DiJsBadge } from 'react-icons/di'


export function BodySkills() {

    const [t] = useTranslation('global')
    return (
        <React.Fragment>
            <Container fluid>
                <Row className="mt-3 pt-lg-3">
                    <Col xl={6}>
                    <div className="p-5 m-4">
                        <h5>{t('about.x1')}</h5>
                        <p className="mt-4">{t('about.x2')}</p>
                        <p>{t('about.x3')}</p>
                        <p>{t('about.x4')}</p>
                        </div>
                    </Col>
                    <Col xl={2} style={{"min-height": "550px"}}>
                        <ul class="list-group list-group-flush text-center px-3">
                            <li class="list-group-item">React</li>
                            <li class="list-group-item">HTML 5</li>
                            <li class="list-group-item">CSS3</li>
                            <li class="list-group-item">JavaScript</li>
                            <li class="list-group-item">Node.js</li>
                            <li class="list-group-item">MongoDB</li>
                            <li class="list-group-item">SASS</li>
                            <li class="list-group-item">Boostrap</li>
                            <li class="list-group-item">Git</li>
                            <li class="list-group-item">TypeScript</li>
                            <li class="list-group-item">Responsive Web Design</li>
                        </ul>
                    </Col>
                    <Col xl={4} className='text-center d-flex justify-content-center' style={{height: "500px"}}>
                        <div className="stage-cube-cont mt-lg-5 pt-lg-5" style={{'height': "10px", width: "200px"}}>
                            <div className="cubespinner">
                                <div className="face1">
                                    <DiReact />
                                </div>
                                <div className="face2">
                                    <DiCss3 />
                                </div>
                                <div className="face3">
                                    <DiNodejsSmall />
                                </div>
                                <div className="face4">
                                    <DiHtml5 />
                                </div>
                                <div className="face5">
                                    <DiJsBadge />
                                </div>
                                <div className="face6">
                                    <DiMongodb />
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>

            </Container>
        </React.Fragment >
    )
}




