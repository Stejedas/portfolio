import './style.css'
import { ImMobile } from 'react-icons/im'
import { MdAlternateEmail } from 'react-icons/md'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { Col } from 'react-bootstrap'

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__social d-flex flex-row w-100 px-md-5  justify-content-center">
                <Col xs={6} className='d-flex justify-content-end'>
                    <p className='mx-2 mt-4'>  <ImMobile size="18" color="black" /> - (+34) 648 519 656 </p>
                </Col>
                <Col xs={6}>
                    <p className='mx-2 mt-4'> <MdAlternateEmail size="18" color="black" /> - stejedas3@gmail.com</p>
                </Col>
            </div>
            <div className="footer__copyright">
                <p className='footer_back'>Sergio Tejeda Sánchez De La Morena - Full Stack Web Developer</p>
                <p className='footer_back'><AiOutlineCopyrightCircle className='fs-6' color="black" /> 2022</p></div>
        </footer>
    )
}

export default Footer