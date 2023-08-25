import React, { useState } from 'react';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import blogsData from './data/blogData.json';
import { FaBoxOpen} from "react-icons/fa";

const Blogs = () => {
  const itemsPerPage = 3;
  const [activePage, setActivePage] = useState(1);

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };


  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Latest Blogs</h2>

      <Row>
        {blogsData.slice(startIndex, endIndex).map((blog) => (
          <Col key={blog.id} md={4} className="mb-4">
            <Card className="text-center p-4 shadow blogCard">
            <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }}></div>
              <Card.Title className='mt-2'>{blog.title}</Card.Title>
              <Card.Text style={{height:'100px'}}>
              {blog.content}
              </Card.Text>
              <Card.Footer>
              <div className="icon-wrapper">
              <a href={blog.url} target="_blank" ><FaBoxOpen style={{ fontSize: '20px', color: '#003566' }} size={30}/> </a>
              </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          {Array.from({ length: Math.ceil(blogsData.length / itemsPerPage) }).map((_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === activePage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>

      
    </Container>
  );
};

export default Blogs;
