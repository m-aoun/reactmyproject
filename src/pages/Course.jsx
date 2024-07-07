import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const courses = [
  {
    title: 'Intermediate',
    description: 'Our intermediate course is designed to build a strong foundation in your chosen field. You will learn essential concepts and skills that will prepare you for more advanced studies.'
  },
  {
    title: 'Degree',
    description: 'The degree course offers comprehensive education in various disciplines. It equips students with in-depth knowledge and practical skills required for professional success.'
  },
  {
    title: 'Post Graduation',
    description: 'Our post-graduation course provides advanced learning opportunities for students who wish to specialize in their field. It is research-oriented and focuses on developing expert-level knowledge.'
  }
];

const Course = () => {
  return (

   <>    
     <header className="sub-header" >
    <h1>OUR CERTIFICATE & ONLINE PROGRAMS FOR 2021</h1>
    </header>
    
    <section className="course">
    
      <Container>
        <h2 className="text-center mb-5">Explore Our Courses</h2>
        <Row>
          {courses.map((course, index) => (
            <Col key={index} md={4}>
              <Card className="course-card">
                <Card.Body>
                  <Card.Title className="text-center">{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </>
  );
};

export default Course;
