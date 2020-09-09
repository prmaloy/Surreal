import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./process-box";

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processes : [
                { id : "01", title : "Airline Tickets", desc : "Enjoy VIP discounts for all destinations" },
                { id : "02", title : "Insurance", desc : "We prepare for the unexpected" },
                { id : "03", title : "Public Notary", desc : "Your travel documents have been a challenge - until now!" },
                { id : "04", title : "Destination Packages", desc : "Enjoy the hot spots near any destination" },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="bg-progress section">
                    <div className="bg-overlay"></div>
                    <Container>
                    <SectionTitle
                        title="Our Services"
                        desc="Get all of the most vital travel services under one roof. With insurance, documents, and destination activities taken care of, your free to relax. We plan you enjoy!"
                        isLight={true}
                    />

                        <Row className="mt-5 pt-2">
                            <ProcessBox processes={this.state.processes} />
                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Process;