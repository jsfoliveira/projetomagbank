import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = ({
  icon,
  size = 1,
  color = "#000",
  children,
  className = "",
}) => (
  <Row className={`d-flex align-items-center ${className}`}>
    <Col xs={size} className="d-flex justify-content-center">
      <FontAwesomeIcon icon={icon} size={`${size}x`} color={color} />
    </Col>
    <Col xs={10} className={className}>
      {children}
    </Col>
  </Row>
);

export default IconText;

//pode usar const IconText=(props) e nas linhas usar:props.icon, props.size...
