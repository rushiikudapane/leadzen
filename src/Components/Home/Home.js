import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Container } from "react-bootstrap";
//bootstrap is used for making cards and grid
import "./Home.css";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

const Home = ({ setObject }) => {
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  //first index and last index are found to slice the data for paging
  const cardPerPage = 3;
  const lastIndex = currentPage * cardPerPage;
  const startIndex = lastIndex - cardPerPage;

  //function to fetch data from API using axios
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //slicing the data array for pagination
  const presentPage = result.slice(startIndex, lastIndex);

  return (
    <div>
      <div>
        {presentPage.map((user) => {
          return (
            <Container fluid key={user.id}>
              <Card className="card">
                <Card.Body className="card-body">
                  <Row>
                    <Col xs={12} md={2}>
                      <b>Name</b>
                      <br />
                      {user.name}
                    </Col>
                    <Col xs={12} md={3}>
                      <b>Email</b>
                      <br />
                      {user.email}
                    </Col>
                    <Col xs={12} md={3}>
                      <b>City</b>
                      <br />
                      {user.address.city}
                    </Col>
                    <Col xs={12} md={2}>
                      <b>Street</b>
                      <br />
                      {user.address.suite}
                    </Col>
                    <Col xs={12} md={2} style={{ textAlign: "right" }}>
                      <Link to="/details">
                        <button
                          className="btnn"
                          onClick={() => {
                            setObject(user);
                          }}
                        >
                          View Details
                        </button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          );
        })}
      </div>
      <Pagination
        totalCards={result.length}
        cardsPerPage={cardPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
