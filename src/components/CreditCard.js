import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  FaCreditCard,
  FaMobile,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import IconText from "./IconText";
import creditCard from "../assets/credit-card.jpg";
import "./CreditCard.scss";

const CreditCard = () => (
  <Container className="my-5">
    <Row>
      <Col xs={12} lg={7} className="mb-5 mb-lg-0 px-5 px-lg-0 py-lg-8">
        <Row>
          <h2 className="my-5">Cartão de crédito</h2>
        </Row>
        <Row>
          <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faCreditCard}
              size={2}
              color="#f05656"
              textClassName="h5 text-muted"
            >
              Crédito Pessoal
            </IconText>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <Row>
              <Col xs={2} className="d-flex justify-content-center">
                <FaMobile size="2x" color="#f05656" />
              </Col>
              <Col xs={10} className="h5 text-muted">
                APP
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <Row>
              <Col xs={2} className="d-flex justify-content-center">
                <FaShoppingCart size="2x" color="#f05656" />
              </Col>
              <Col xs={10} className="h5 text-muted">
                Pagamento Online
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6} className="mb-4">
            <Row>
              <Col xs={2} className="d-flex justify-content-center">
                <FaWallet size="2x" color="#f05656" />
              </Col>
              <Col xs={10} className="h5 text-muted">
                Carteira Digital
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={5}>
        <Image src={creditCard} alt="Magbank Credit Card Example" fluid />
      </Col>
    </Row>
  </Container>
);

export default CreditCard;
