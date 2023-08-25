import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


function FAQ (){
  const faqs = [
    {
      questionNo: 1,
      question: "What services does KiteUp provide?",
      answer: "KiteUp specializes in website development, website animation, SEO, and UI/UX development.",
    },
    {
      questionNo: 2,
      question: "How can I request a quote for a project?",
      answer: "You can request a project quote by filling out the 'Get a Quote' form on our website.",
    },
    {
      questionNo: 3,
      question: "Do you offer e-commerce website development?",
      answer: "Yes, we provide e-commerce website development to help businesses establish their online presence.",
    },
    // Add more FAQs here
  ];

  return (
      <Container className="my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Card style={{padding:'40px'}}>
      <Accordion>
      {faqs.map((faq) => (
        <Accordion.Item eventKey={faq.questionNo} className='mb-2'>
        <Accordion.Header><b>{faq.question}</b></Accordion.Header>
        <Accordion.Body>{faq.answer}</Accordion.Body>
      </Accordion.Item>
       ))}
    </Accordion>
      </Card>
      {/* <Accordion>
        {faqs.map((faq) => (
          <Card key={faq.questionNo}>
            <Accordion.Toggle as={Card.Header} eventKey={faq.questionNo}>
              {faq.question}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={faq.questionNo}>
              <Card.Body>{faq.answer}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion> */}
    </Container>
  );
};

export default FAQ;
