import React, { useEffect, useState } from 'react';
import { Navbar, Container, Image, Button } from 'react-bootstrap';
import profileImage from '../assets/img/profile.jpg';

const Navbarmobile = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar bg="black" expand="lg" className={isNavbarFixed ? 'fixed-top' : ''}>
      <Container>
        <Navbar.Brand href="#">
          <Image className="profile-picture" src={profileImage} alt="Foto di Profilo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-md-center">
          <div className="d-flex flex-column">
            <Button className="btn mb-2" onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              <strong>HOME</strong>
            </Button>
            <Button className="btn mb-2" onClick={() => {
              window.scrollTo({ top: 500, behavior: 'smooth' });
            }}>
              <strong>MY COURSE</strong>
            </Button>
            <Button className="btn mb-2" onClick={() => {
              window.scrollTo({ top: 3600, behavior: 'smooth' });
            }}>
              <strong>PROJECT</strong>
            </Button>
            <Button className="btn mb-2" onClick={() => {
              window.scrollTo({ top: 4100, behavior: 'smooth' });
            }}>
              <strong>CONTACT</strong>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarmobile;
