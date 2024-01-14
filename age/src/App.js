import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Create this file for your custom styles

function App() {
  const [birthday, setBirthday] = useState('');
  const [result, setResult] = useState('');

  const calculateAge = () => {
    if (birthday === '') {
      alert('Please enter your birthday');
    } else {
      const age = getAge(birthday);
      setResult(`Your age is ${age} ${age > 1 ? 'years' : 'year'} old`);
    }
  };

  const getAge = (birthdayValue) => {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <Container className="mt-5 bg-dark text-light">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center mb-4">Age Calculator</h1>
          <Form>
            <Form.Group controlId="birthday">
              <Form.Label>Enter your date of birth</Form.Label>
              <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={calculateAge}>
              Calculate Age
            </Button>
            <p id="result" className="mt-3 font-weight-bold">
              {result}
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;