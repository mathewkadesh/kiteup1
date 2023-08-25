import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About(){
  return (
    <Container className="py-5">
      <Row>
        <Col md={{span:5, offset:2}}>
          <Container className='aboutImageBg'>
          <img src={"./res/about.jpg"} className='aboutImage'/>
          </Container>
        </Col>
        <Col style={{textAlign:'justify'}}>
          <h1 className='mb-4'>A new site for your <br/> agency? It's here.</h1>
          <p>
            At KiteUp, we take pride in weaving the latest <br/>trends into our creations.
            Our passion for crafting <br/>eye-catching UI/UX designs sets us apart as<br/> digital artisans.
            We don't just build websites; <br/>we sculpt experiences that immerse, engage, <br/>and leave an indelible mark.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
