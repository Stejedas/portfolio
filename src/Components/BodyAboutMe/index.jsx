import React from "react";
import './style.css'

import { Container, Row, Col } from "react-bootstrap";
import cv from '/Users/sergioylaura/Desktop/PORTAFOLIOS/portafolio/src/Assets/pdf/CVSergioTejeda.pdf'
import { useTranslation } from "react-i18next";
import { FaFileDownload } from 'react-icons/fa'

export function BodyAboutMe() {

    const [t] = useTranslation('global')

    return (
        <React.Fragment>
            <Container fluid className="mt-5">
                <Row className=" pt-lg-3 mt-5 mb-3" >

                    <Col xl={{ span: 6, offset: 1 }} >
                        <div className="p-5 m-4">
                            <h5>{t('about.x5')}</h5>
                            <p className="mt-4">{t('about.x6')}</p>
                            <p>{t('about.x7')}</p>
                            <p>{t('about.x8')}</p>
                        </div>
                    </Col>
                    <Col xl={{ span: 4 }}>

                        <div className="p-5 m-4">

                            <p ><strong>{t('about.x9')}</strong> Valencia</p>
                            <p><strong>E-mail:</strong> stejedas3@gmail.com</p>
                            <p><strong>Bootcamp:</strong> NEOLAND</p>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <a href={cv} className="cvClass" download='CV_Sergio_Tejeda.pdf'>{t('about.x0')}<FaFileDownload className="fs-4" /></a>
                        </div>
                    </Col>


                </Row>
                <Row >


                </Row>

            </Container>
        </React.Fragment >
    )
}