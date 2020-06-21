import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'


const Contacts = (props) => {
  const { t } = useTranslation();
  return (
    <>
    <h3 className="page-header">{t('contacts.title')}</h3>
      <Container>
        <Form className="contact-form border rounded bg-light shadow-sm">
          <Form.Group controlId="formName">
            <Form.Label>Your name:</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Your e-mail is in safe hands :)
          </Form.Text>
          </Form.Group>
          <Form.Group controlId="messageTextarea">
            <Form.Label>Your message:</Form.Label>
            <Form.Control as="textarea" rows="7" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send
        </Button>
        </Form>
      </Container>
    </>
  );
}

export default Contacts;