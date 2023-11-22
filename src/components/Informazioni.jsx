import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import epicodeImage from '../assets/img/epicode_4-removebg-preview.png';
import progettoImage from '../assets/img/Progetto_senza_titolo-removebg-preview.png';

const Content = () => {
  return (
    <Container className="sfondo">
      <div>
        <h1>Antonio Caputo</h1>
        <h3>Junior web developer</h3>
      </div>
      <Row>
        <Col xs={12} sm={6}>
          <Image src={epicodeImage} alt="Epicode" className="img-small1" fluid />
        </Col>
        <Col xs={12} sm={6}>
          <Image src={progettoImage} alt="Progetto Senza Titolo" className="img-small" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
