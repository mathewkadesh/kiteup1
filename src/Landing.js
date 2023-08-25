import React from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';


function Landing() {
  return (
    <Row className='landingRow'>
      <Col lg={6}>
          {/* <h1>Welcome to KiteUp</h1> */}
          <div className='headingText'>Crafting Digital Experiences Beyond Boundaries!</div>
          <div style={{marginTop:'40px', color:'white'}}>
            KiteUp is your compass in the vast digital landscape, guiding you towards the pinnacle of online success. As a premier website development company, we harness the winds of innovation to create stunning online platforms that captivate, engage, and leave a lasting impact.
          </div>
          <Form style={{marginTop:'40px'}}>
            <Row>
              <Col sm={8}><Form.Control type="email" placeholder="name@example.com" /></Col>
              <Col><Button variant='success'>Contact Us</Button></Col>
            </Row>
          </Form>
        </Col>
        <Col>
          <img src={"./res/web2.jpg"} className='landingImg'/>
      </Col>
    </Row>
  )
}

export default Landing