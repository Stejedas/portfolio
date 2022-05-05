import React, { useTransition, useState } from "react"
import { Container, Col, Row, Modal, Button, Form } from "react-bootstrap"
import './style.css'
import { useTranslation } from "react-i18next"
import img2 from '/Users/sergioylaura/Desktop/PORTAFOLIOS/portafolio/src/Assets/foto.jpeg'
import { useNavigate } from "react-router-dom"
import emailjs from 'emailjs-com'
import { Toast, ToastContainer } from "react-bootstrap"



export default function BodyHome() {

    const [t] = useTranslation("global");

    const [show1, setShow1] = useState(false);

    let navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const sendEmail = e => {
        e.preventDefault()
        console.log('hola')
        emailjs.sendForm('service_m5gaves', 'template_7d06myf', e.target, 'nZ8pq_vJo9drXEAwA').then(res => {
            setShow1(true)
            console.log(res)
            console.log('JOLA')
        })
        handleClose()
    }

    return (
        <React.Fragment>
            <Container fluid className="mt-4">
                <Row>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} className='pt-5'>

                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <div className="h-100 text-start text-center mb-5 pt-lg-0 pt-xl-5 mt-lg-5 w-100">


                                <h1 >Sergio Tejeda</h1>

                                <h3 className="mt-3 mt-lg-4">Full Stack Developer</h3>
                                <h5 className="fs-5">Front-End and Back-End</h5>


                                <div className="mt-4 mt-lg-5 fs-5 ">
                                    <span className="buttonContact" onClick={handleShow}>{t('me.x5')}</span>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center w-100">
                                <img src={img2} class="imgContact d-flex justify-content-center" alt="..." />
                            </div>

                        </div>
                    </Col>

                </Row>

                <Row>
                    <ToastContainer className="p-3" position='top-start'>
                        <Toast onClose={() => setShow1(false)} show={show1} delay={3000} autohide>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">{t('contact.x7')}</strong>

                            </Toast.Header>
                            <Toast.Body>{t('contact.x6')}</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </Row>
            </Container>



            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <h5 className="mt-1 text-center w-100">{t('contact.x0')}</h5>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={sendEmail}>
                        <Form.Group className="mb-3 form-floating" controlId="formBasicName">
                            <input type="text" class="form-control" required id="name" name="from_name" placeholder={t('contact.x1')} />
                            <label for="name">{t('contact.x1')}</label>
                        </Form.Group>

                        <Form.Group className="mb-3 form-floating" controlId="formBasicEmail">
                            <input type="email" class="form-control" required id="email" name="reply_to" placeholder={t('contact.x2')} />
                            <label for="email">{t('contact.x2')}</label>
                        </Form.Group>
                        <div class="form-floating">
                            <textarea class="form-control" required placeholder={t('contact.x3')} id="message" name="message" style={{ height: "140px" }}></textarea>
                            <label for="message">{t('contact.x3')}</label>
                        </div>
                        <div className="mt-3 d-flex justify-content-end" >
                            <Button variant="light" onClick={handleClose}>
                                {t('contact.x5')}
                            </Button>
                            <Button variant="light" type="submit" className="mx-2">
                                {t('contact.x4')}
                            </Button>
                        </div>

                    </Form>
                </Modal.Body>

            </Modal>
        </React.Fragment>

    )
}