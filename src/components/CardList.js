import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CardList = ({ posts }) => (
  <Container>
    <Row>
      {posts &&
        posts.map((posts) => (
          <Col xs={12} lg={4} key={posts.id}>
            <Card className="mx-auto my-3">
              <Card.Img variant="top" src={posts.image} />
              <Card.Body>
                <Card.Title>{posts.title}</Card.Title>
                <Card.Text>{posts.excerpt}</Card.Text>
                <Button variant="danger">{posts.action}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  </Container>
);

export default CardList;
