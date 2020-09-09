import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Blog Box
import CounterBox from "./counter-box";

//Import Images
import img2 from "../../assets/images/features/surrealfeature4.jpg";

class Counter extends Component {
    state = {
        counters1 : [
            { icon : "mdi mdi-emoticon-cool", title : "Happy Clients", end : 40585 },
            { icon : "mdi mdi-account-plus", title : "Repeat Clients", end : 37541 }
        ],
        counters2 : [
            { icon : "mdi mdi-heart", title : "Joined The Surreal Family", end : 24251 },
            { icon : "mdi mdi-percent", title : "Client Retention", end : 91 }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        <Row className="vertical-content">
                            <Col lg={6}>
                                <div className="counter-box">
                                    <Col lg={12}>
                                        <h4>Our Achivements</h4>
                                        <p className="text-muted mt-2">Our repeat travelers are much more than clients, they're family! We are building a large community of travelers and cultivating lifetime friendships. Join the family today!</p>

                                        <div className="mt-4">
                                            <Row id="counter">
                                                <CounterBox counters={this.state.counters1} />
                                            </Row>

                                            <Row>
                                                <CounterBox counters={this.state.counters2} />
                                            </Row>
                                        </div>

                                    </Col>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="img">
                                    <img src={img2} className="img-fluid box-shadow-lg rounded" alt=""/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Counter;