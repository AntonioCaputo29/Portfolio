import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contattami() {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSendEmail = () => {
        const { user_name, user_email, message } = formData;
        const emailBody = `Nome: ${user_name}\nEmail: ${user_email}\nMessaggio: ${message}`;
        const emailSubject = 'Messaggio dal modulo di contatto';
        const mailtoLink = `mailto:antocapu29@gmail.com?subject=${emailSubject}&body=${emailBody}`;
        window.location.href = mailtoLink;
    };

    return (
        <Container>
            <h2 className='text-center mt-5 mb-5' style={{ color: 'white' }}>CONTATTAMI</h2>
            <Form className="d-flex flex-column align-items-center responsive-form snake-border-form" id="contact-form">
                <Form.Group controlId="formName" className="d-flex flex-column align-items-start">
                    <Form.Label className="fotmLabel mb-2" style={{ color: 'white' }}>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Inserisci il tuo nome"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className="form"
                        style={{ backgroundColor: 'transparent', color: 'white' }}
                    />
                </Form.Group>
                <Form.Group controlId="formEmail" className="d-flex flex-column align-items-start">
                    <Form.Label className="fotmLabel mb-2 mt-1" style={{ color: 'white' }}>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Inserisci la tua email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        className="form"
                        style={{ backgroundColor: 'transparent', color: 'white' }}
                    />
                </Form.Group>
                <Form.Group controlId="formMessage" className="d-flex flex-column align-items-start">
                    <Form.Label className="fotmLabel mb-2 mt-1" style={{ color: 'white' }}>Messaggio</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="Inserisci il tuo messaggio"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form"
                        style={{ backgroundColor: 'transparent', color: 'white' }}
                    />
                </Form.Group>
                <Button className='mt-2 mb-2' variant="primary" type="button" onClick={handleSendEmail}>
                    Invia
                </Button>
            </Form>
        </Container>
    );
}

export default Contattami;
