import i18next from "i18next";
import React, { useState } from "react"
import { Nav, NavDropdown, Navbar, Container, Col, Row, Modal, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { GrLanguage } from 'react-icons/gr'
import emailjs from 'emailjs-com'
import { ToastContainer, Toast } from "react-bootstrap";

function Header() {

    const [t] = useTranslation("global")

    const [leng, uploadLeng] = useState('English 🏴󠁧󠁢󠁥󠁮󠁧󠁿')

    const [show3, setShow3] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendEmail = e => {
        e.preventDefault()
        console.log('hola')
        emailjs.sendForm('service_m5gaves','template_7d06myf',e.target,'nZ8pq_vJo9drXEAwA').then(res=>{
            setShow3(true)
            console.log(res)
        })
        handleClose()
    }

    const changeLeng = () => {
        if (leng === 'English 🏴󠁧󠁢󠁥󠁮󠁧󠁿') {
            uploadLeng("Español 🇪🇸")
            i18next.changeLanguage('en')
        } else {
            i18next.changeLanguage('es')
            uploadLeng("English 🏴󠁧󠁢󠁥󠁮󠁧󠁿")
        }
    }

    return (
        <React.Fragment>

            <Navbar bg="" expand="lg">
                <Container fluid>
                    <div onClick={changeLeng} className='mx-4 d-flex align-items-center'><GrLanguage className="mx-2 fs-5" />{leng}</div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="d-flex justify-content-end w-100 mx-5 fs-6" >
                            <Nav.Link href="http://localhost:3000/home" className="mx-2"> {t('header.x0')}</Nav.Link>
                            <Nav.Link href="http://localhost:3000/aboutme" className="mx-2"> {t('header.x1')}</Nav.Link>
                            <Nav.Link href="http://localhost:3000/skills" className="mx-2"> {t('header.x3')}</Nav.Link>
                            <Nav.Link href="http://localhost:3000/portfolios" className="mx-2"> {t('header.x2')}</Nav.Link>
                           
                            <Nav.Link onClick={handleShow} className="mx-2"> {t('header.x4')}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Row>
                    <ToastContainer className="p-3" position='top-start'>
                        <Toast onClose={() => setShow3(false)} show={show3} delay={3000} autohide>
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
            </Navbar>

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
                            <textarea class="form-control" required placeholder={t('contact.x3')} id="message" name="message" style={{height: "140px"}}></textarea>
                            <label for="message">{t('contact.x3')}</label>
                        </div>
                        <div className="mt-3 d-flex justify-content-end" >
                        <Button variant="light" onClick={handleClose}>
                            {t('contact.x5')}
                        </Button>
                        <Button variant="light" type="submit" className="mx-2" >
                            {t('contact.x4')}
                        </Button>
                        </div>
                        
                    </Form>
                </Modal.Body>
               
            </Modal>

        </React.Fragment>
    )
}

export default Header;