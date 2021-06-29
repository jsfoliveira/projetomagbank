import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  faMobileAlt,
  faMobile,
  faGlobe,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import IconText from "./IconText";
import "./Institutional.scss";

const Institutional = () => (
  <section className="institutional text-light py-5">
    <Container>
      <Row>
        <Col xs={12} lg={5}></Col>
        <Col xs={12} lg={7}>
          <h2 className="my-5">Já nascemos digital</h2>
          <p className="mb-5">
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
          <IconText icon={faMobileAlt} color="#FFF" className="mb-2">
            Sem fila e sem burocracia
          </IconText>
          <IconText icon={faMobile} color="#FFF" className="mb-2">
            Simples e prático
          </IconText>
          <IconText icon={faGlobe} color="#FFF" className="mb-2">
            Abertura da conta 100% online
          </IconText>
          <IconText icon={faShieldAlt} color="#FFF" className="mb-2">
            Transações mais seguras
          </IconText>
          <Button varianr="outline-light" className="mt-5">
            Abra sua conta
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institutional;

//12 é o número máximo que tem no bootstrap, então a coluna vai ocupar o espaço máximo
//No react, pra dar uma classe, precisa escrever className//
