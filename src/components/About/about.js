import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import AboutBox from "./about-box";
import BestSkills from "./bestSkills";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                { icon : "mdi mdi-map-marker-radius", title : "Airline Tickets", desc : "Contact us for cheap flights and ask about the flight of the week" },
                { icon : "mdi mdi-terrain", title : "Adventure Packages", desc : "Budle all your services in one convenient package", isLight : true },
                { icon : "mdi mdi-compass-outline", title : "Visas", desc : "We can help you get apply for Visas/OCI/PIO & more" },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="section" id="about">
                    <Container>
                        <SectionTitle
                            title="About Agency"
                            subtitle="WHO WE ARE?"
                            desc="We’ll make your next vacation cheap and easy for you and your family. Offering great deals on flights, public notary, and insurance, by budling services, you’ll have more money in your pocket."
                        />

                        <Row className="mt-5 pt-2">
                            <AboutBox data={this.state.data} />
                        </Row>
                    </Container>
                </section>

                
            </React.Fragment>
        );
    }
}

export default About;