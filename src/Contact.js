import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row>
        <Col md={3}>
          <Card className="contactCard p-4 shadow">
            <Card.Title>
              <img src={require("./icons/customer-support.png")} alt="Contact Icon" className="contactImg mr-2"/>
              Phone Number
            </Card.Title>
            <Card.Text>+44-736-516-3365</Card.Text>
            <Button variant="primary">Call Now</Button>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="contactCard p-4 shadow">
            <Card.Title>
              <img src={require("./icons/mail.png")} alt="Email Icon" className="contactImg mr-2" />
              Email Address
            </Card.Title>
            <Card.Text>info@kiteup.com</Card.Text>
            <Button variant="primary">Send Email</Button>
          </Card>
        </Col>
      
        <Col md={3}>
          <Card className="contactCard p-4 shadow">
            <Card.Title>
              <img src={require("./icons/social-media.png")} className="contactImg mr-2" />
              Social Media
            </Card.Title>
            <Card.Text>
              Connect with us on social media.
            </Card.Text>
            <Row>
             <Col><FaFacebook style={{color: '#3b5998', fontSize: '30px'}}/></Col>
             <Col><FaInstagram style={{color: '#8a3ab9', fontSize: '30px'}}/></Col>
             <Col><FaTwitter style={{color: '#66757f', fontSize: '30px'}}/></Col>
              
            </Row>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="contactCard p-4 shadow">
            <Card.Title>
              <img src={require("./icons/location.png")} alt="Location Icon" className="contactImg mr-2" />
              Physical Address
            </Card.Title>
            <Card.Text>
              283, Passage Road, Henbury
              <br />
              Bristol, United Kingdom
            </Card.Text>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
        <Card className="p-4 shadow">
        <Card.Title style={{textAlign:'center', fontSize:'25px'}} className='mb-4'>Location</Card.Title>
          <iframe
            title="KiteUp Office Location"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.07008460475!2d-2.6216138!3d51.511930199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871923ecb7ed7bd%3A0xeeaf67b49e29ef95!2sPassage%20Rd%2C%20Henbury%2C%20Bristol%20BS10%207HY!5e0!3m2!1sen!2suk!4v1692237112265!5m2!1sen!2suk"
            ></iframe>
            </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
