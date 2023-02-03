import React from "react";
import "./Details.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

//object is data passed from the Home component as a prop
const Details = ({ object }) => {
  return (
    <div>
      <div>
        <Container fluid key={object.id}>
          <Card className="details-card">
            <Card.Body className="details-card-body">
              <Row>
                <Col xs={12} md={2}>
                  <b>Name</b>
                  <br />
                  {object.name}
                </Col>
                <Col xs={12} md={3}>
                  <b>Email</b>
                  <br />
                  {object.email}
                </Col>
                <Col xs={12} md={3}>
                  <b>City</b>
                  <br />
                  {object.address.city}
                </Col>
                <Col xs={12} md={2}>
                  <b>Street</b>
                  <br />
                  {object.address.suite}
                </Col>
                <Col xs={12} md={2} style={{ textAlign: "right" }}>
                  <Link to="/">
                    <button className="btnn">Hide Details</button>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="description-card">
                    <Card.Body>
                      <Row>
                        <Col>
                          <b>Description</b>
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Placeat dolorum ratione, quas ad deleniti
                          facilis! Nemo eaque ea, dolorem quo reiciendis sunt at
                          saepe neque minus, fuga illum exercitationem, officiis
                          omnis facere enim obcaecati qui laborum eius? Illo
                          sapiente rerum eos, eius similique beatae illum quo
                          quod. Voluptatum, ea minima!
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "20px" }}>
                        <Col>
                          <b>Name</b>
                          <br />
                          {object.name}
                        </Col>
                        <Col>
                          <b>Website</b>
                          <br />
                          {object.website}
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "20px" }}>
                        <Col>
                          <b>Username</b>
                          <br /> {object.username}
                        </Col>
                        <Col>
                          <b>Company Name</b>
                          <br /> {object.company.name}
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "20px" }}>
                        <Col>
                          <b>Address</b>
                          <br /> {object.address.street}, {object.address.suite}
                          , {object.address.city}, {object.address.zipcode}
                        </Col>
                        <Col>
                          <b>Company Phrase</b>
                          <br /> {object.company.catchPhrase}
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "20px" }}>
                        <Col>
                          <b>Phone</b>
                          <br /> {object.phone}
                        </Col>
                        <Col>
                          <b>BS</b>
                          <br /> {object.company.bs}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Details;
