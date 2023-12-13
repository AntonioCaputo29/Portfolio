import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Telefono from '../assets/img/Telefono.png';
import Gmail from '../assets/img/Gmail.png';
import Linkedin from '../assets/img/Linkedin.png';
import Facebook from '../assets/img/Facebook.png';
import Instagram from '../assets/img/Instagram.png';
import Github from '../assets/img/Github.png';
import CV from '../assets/img/cv.png';


function Contatti() {
    return (
        <Container className="text-center">
            <Row className="justify-content-center">
                <h4 className="contatto">VUOI SCAMBIARE DUE CHIACCHIERE CON ME?</h4>
                <Col xs={12} md={6} className="contact-info">
                    <h2 className="contact-text">(+39)324.1525557</h2>
                    <Image src={Telefono} alt="Icona 1" className="contact-icon ml-2 d-none d-md-block img-fluid h-50"/>
                </Col>
                <Col xs={12} md={6} className="contact-info">
                    <Image src={Gmail} alt="Icona 2" className="contact-icon mr-2 d-none d-md-block img-fluid h-50" />
                    <h2 className="contact-text">antocapu29@gmail.com</h2>
                </Col>
            </Row>
            <br />
            <br />
            <h4>SOCIAL</h4>
            <div className="image-container">
                <Row className="justify-content-center">
                    <Col>
                        <a href="http://www.linkedin.com/in/antonio-caputo29">
                            <Image src={Linkedin} alt="Immagine 1" className="img-fluid w-50" />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://github.com/AntonioCaputo29">
                            <Image src={Github} alt="Immagine 2" className="img-fluid w-50" />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.facebook.com/profile.php?id=100008169434165">
                            <Image src={Facebook} alt="Immagine 3" className="img-fluid w-50" />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.instagram.com/ntn_cpt/">
                            <Image src={Instagram} alt="Immagine 4" className="img-fluid w-50" />
                        </a>
                    </Col>
                </Row>
            </div>
            <br />
            <h4>VISUALIZZA IL MIO CV</h4>
            <div className="centered-image">
                <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                    <Image src={cv} alt="Anteprima CV" className="img-fluid" />
                </a>
            </div>
        </Container>
    );
}

export default Contatti;
