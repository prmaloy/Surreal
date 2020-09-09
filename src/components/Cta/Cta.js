import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Cta extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="section bg-cta">
                <div className="bg-overlay"></div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-cebter">
                                <h2 className="text-white text-center">Become a part of Surreals community today</h2>
                                <p className=" text-white text-center mt-3">Our repeat travelers are much more than clients, they're family! </p>
                                <div className="text-center mt-4">
                                    <Link to="#" className="btn btn-primary mt-2">Connect With Us</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> 
            </React.Fragment>
        );
    }
}

export default Cta;