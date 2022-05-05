import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React from 'react';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer';
import BodyHome from '../../Components/BodyHome';
import { Container, Col, Row } from 'react-bootstrap'
import { GrZoom } from 'react-icons/gr';

export default function HomePage() {
  return (
    <React.Fragment>
      <div className='final bg-sucess'>
        <Header></Header>
        <BodyHome></BodyHome>
      </div>
      <Footer> </Footer>
    </React.Fragment>
  );
}
