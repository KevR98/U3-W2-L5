import { useEffect, useState } from 'react';
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';

// Creo la funzione con la sua props messa in app.jsx
const Welcome = ({ cityChange }) => {
  const [city, setCity] = useState('Milan, IT'); // Setto lo stato a default

  useEffect(() => {
    cityChange('Milan, IT');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Alert className='text-center'>
        <h1>Benvenuto!</h1>
      </Alert>
      <Container>
        <Row className='justify-content-center my-5'>
          <Col xs={12} md={6}>
            <p className='text-center'>Choose your city</p>
            <Form.Select
              aria-label='Select for the city'
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                cityChange(e.target.value); // Salvo il valore nella props
              }}
            >
              <option>Milan, IT</option>
              <option>Firenze, IT</option>
              <option>Tokyo, JPN</option>
              <option>New York, US</option>
              <option>Manila, PH</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Welcome;
