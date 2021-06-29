import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import IconText from "./IconText";
import {
  faCreditCard,
  faWallet,
  faShieldAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Faq.scss";

const Faq = () => (
  <section className="faq text-light">
    <Container className="faq py-5">
      <Row className="justify-content-center">
        <h2 className="faq-title my-5">Dúvidas frequentes</h2>
      </Row>
      <Row className="d-flex align-items-center justify-items-center">
        <Col className="d-lg-none" xs={12}>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faCreditCard} size="2x" color="#FFF" />
            </Col>
            <Col className="d-flex justify-items-center">
              <FontAwesomeIcon icon={faWallet} size="2x" color="#FFF" />
            </Col>
            <Col className="d-flex justify-items-center">
              <FontAwesomeIcon icon={faShieldAlt} size="2x" color="#FFF" />
            </Col>
            <Col className="d-flex justify-items-center">
              <FontAwesomeIcon icon={faUserTie} size="2x" color="#FFF" />
            </Col>
          </Row>
        </Col>
        <Col className="d-none d-lg-block">
          <IconText
            icon={faCreditCard}
            size={3}
            className="mb-3"
            textClassName="lead"
            color="#FFF"
          >
            Cartão de crédito e débito
          </IconText>
          <IconText
            icon={faWallet}
            size={3}
            className="mb-3"
            textClassName="lead"
            color="#FFF"
          >
            Conta e abertura
          </IconText>
          <IconText
            icon={faShieldAlt}
            size={3}
            className="mb-3"
            textClassName="lead"
            color="#FFF"
          >
            Token digital
          </IconText>
          <IconText icon={faUserTie} size={3} textClassName="lead" color="#FFF">
            Produtos e serviços
          </IconText>
        </Col>

        <Col>
          <Accordion defaultActiveKey="0">
            <Card className="faq_card">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Lorem ipsum dolor sit amet
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor
                  dignissim. Nam eget quam semper, varius ligula sed, auctor
                  augue. Maecenas et porta magna. Nulla mattis tortor vitae
                  metus vestibulum scelerisque. Ut mollis a nisl vel suscipit.
                  Curabitur scelerisque placerat ultrices. Proin purus ante,
                  congue vel arcu ac, porta condimentum mauris. Maecenas massa
                  orci, fringilla eget fermentum nec, dignissim nec diam.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="faq_card">
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Nulla porttitor eros ac ex tristique posuere
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor
                  dignissim. Nam eget quam semper, varius ligula sed, auctor
                  augue. Maecenas et porta magna. Nulla mattis tortor vitae
                  metus vestibulum scelerisque. Ut mollis a nisl vel suscipit.
                  Curabitur scelerisque placerat ultrices. Proin purus ante,
                  congue vel arcu ac, porta condimentum mauris. Maecenas massa
                  orci, fringilla eget fermentum nec, dignissim nec diam.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="faq_card">
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Quisque fringilla tincidunt arcu
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor
                  dignissim. Nam eget quam semper, varius ligula sed, auctor
                  augue. Maecenas et porta magna. Nulla mattis tortor vitae
                  metus vestibulum scelerisque. Ut mollis a nisl vel suscipit.
                  Curabitur scelerisque placerat ultrices. Proin purus ante,
                  congue vel arcu ac, porta condimentum mauris. Maecenas massa
                  orci, fringilla eget fermentum nec, dignissim nec diam.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="faq_card">
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Nam elementum lobortis purus a maximus tortor
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor
                  dignissim. Nam eget quam semper, varius ligula sed, auctor
                  augue. Maecenas et porta magna. Nulla mattis tortor vitae
                  metus vestibulum scelerisque. Ut mollis a nisl vel suscipit.
                  Curabitur scelerisque placerat ultrices. Proin purus ante,
                  congue vel arcu ac, porta condimentum mauris. Maecenas massa
                  orci, fringilla eget fermentum nec, dignissim nec diam.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Faq;

//FontAwesomeIcon não recebe número tipo size=2, mas sim string
