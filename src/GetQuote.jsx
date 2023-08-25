import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

// const GetQuote = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     projectDetails: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/send-email', formData);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
    
//   );
// };

// export default GetQuote;



export default function ContactForm() {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [recipient_email, setEmail] = useState(localStorage.getItem("email"));
  const [subject, setSubject] = useState(localStorage.getItem("subject"));
  const [message, setMessages] = useState(localStorage.getItem("message"));

  function sendMail() {
    console.log("Sending Email");

    if (name && recipient_email && subject && message) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", recipient_email);
      localStorage.setItem("subject", subject);
      localStorage.setItem("message", message);

      axios
        .post("http://localhost:3001/send_email", {
          recipient_email: recipient_email,
          subject: subject,
          message: subject,
        })
        .then(() => alert("Message Send Succesfuly"))
        .catch(() => alert("All Good"));
      return;
    }
    return alert("Fill in all the fields to continue");
  }

  return (
    <div style={{backgroundColor:'#27283d', padding:'30px'}}>
      <Row>
        <Col md={6}>
      <h2 className='text-white'>Get a Quote</h2>
      <Form >
        <Form.Group controlId="name">
          <Form.Label className='text-white'>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="email" className='mt-3'>
          <Form.Label className='text-white'>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={recipient_email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="subject" className='mt-3'>
          <Form.Label className='text-white'>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="message" className='mt-3'>
          <Form.Label className='text-white'>Project Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="projectDetails"
            value={message}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => sendMail()} className='mt-3'>
          Get Quote
        </Button>
      </Form>
      </Col>
        <Col md={1}>
        <div class="vertical-line"></div>
        </Col>
        <Col md={5}>
        <img src='./res/quote.jpg' className='quoteImg'/>
        </Col>
      </Row>
    </div>
    // <div>
    //   <section className="bg-white dark:bg-gray-900">
    //     <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    //       <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
    //         Contact Us
    //       </h2>
    //       <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
    //         Got a technical issue? Want to send feedback about a beta feature?
    //         Need details about our Business plan? Let us know.
    //       </p>
    //       <form className="space-y-8">
    //         <div>
    //           <label
    //             htmlFor="email"
    //             className="flex self-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //           >
    //             Your email
    //           </label>
    //           <input
    //             type="email"
    //             id="email"
    //             value={recipient_email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
    //             placeholder="username@email.com"
    //             required
    //           ></input>
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="subject"
    //             className="flex self-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //           >
    //             Subject
    //           </label>
    //           <input
    //             type="text"
    //             id="subject"
    //             value={subject}
    //             onChange={(e) => setSubject(e.target.value)}
    //             className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
    //             placeholder="Let us know how we can help you"
    //             required
    //           ></input>
    //         </div>
    //         <div className="sm:col-span-2">
    //           <label
    //             htmlFor="message"
    //             className="flex self-center block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    //           >
    //             Your message
    //           </label>
    //           <textarea
    //             id="message"
    //             rows="6"
    //             value={message}
    //             onChange={(e) => setMessages(e.target.value)}
    //             className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    //             placeholder="Leave a comment..."
    //           ></textarea>
    //         </div>
    //       </form>
    //       <button
    //         onClick={() => sendMail()}
    //         className="py-3 px-5 m-10 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    //       >
    //         Send message
    //       </button>
    //       <button
    //         onClick={() => localStorage.clear()}
    //         className="py-3 px-5 m-10 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    //       >
    //         Delete All
    //       </button>
    //     </div>
    //   </section>
    // </div>
  );
}