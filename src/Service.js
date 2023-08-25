import React, { useState } from 'react';
import servicesData from './data/serviceData.json';
import { Container, Card, Row, Col, Modal, Button} from 'react-bootstrap';
import "./style.css";

function Service()  {

  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };


  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Expertise</h2>
      <Row>
        {servicesData.map((service)=>(

        
        <Col md={6} lg={3} className="mb-4">
          <Card className="service-card"  key={service.id} onClick={() => openModal(service)}>
            <Card.Img variant="top" src={service.image} className='serviceImage'/>
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.shortContent}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        ))}
       
      </Row>

           <Modal show={showModal} onHide={closeModal} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={8}>
             
            <div className='serviceModelDiv'>{selectedService?.longContent}</div>
            
            </Col>
            <Col xs={6} md={4}>
            <img src={selectedService?.image} style={{width:'200px'}}/>
            </Col>
          </Row>
          </Container>
          </Modal.Body>
   
      </Modal>
    </Container>
  );
};

export default Service;
