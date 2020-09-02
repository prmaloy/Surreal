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
                { icon : "mdi mdi-map-marker-radius", title : "Travel Packages", desc : "Aliquam tempor an tidunt liberonon feugiat quam risu tortor." },
                { icon : "mdi mdi-terrain", title : "Adventure Packages", desc : "Aliquam tempor an tidunt liberonon feugiat quam risu tortor.", isLight : true },
                { icon : "mdi mdi-compass-outline", title : "Scuba Diving", desc : "Aliquam tempor an tidunt liberonon feugiat quam risu tortor.-" },
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
                            desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
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