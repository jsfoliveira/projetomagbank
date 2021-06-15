import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Institutional.scss";

const Institutional = () => (
  <section className="institutional text-light py-5">
    <Container>
      <Row>
        <Col xs={12} lg={5}></Col>
        <Col xs={12} lg={7}>
          <h2>Já nascemos digital</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes b accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <Button varianr="outline-light">Abra sua conta</Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institutional;

//12 é o número máximo que tem no bootstrap, então a coluna vai ocupar o espaço máximo
//No react, pra dar uma classe, precisa escrever className//
