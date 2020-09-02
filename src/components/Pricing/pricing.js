import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from './pricing-box';

class Pricing extends Component {
    state = {
        pricings : [
           { title : "Classic", price : 399, duration : "Week",
                features : [
                    { title : "Customizad Plans" },
                    { title : "Billing Report" },
                    { title : "Access to Asana" },
                ]
            },
            { title : "Delux", price : 799, duration : "Week", isNew : true,
                features : [
                    { title : "Customizad Plans" },
                    { title : "Billing Report" },
                    { title : "Access to Asana" },
                ]
            },
            { title : "Ultimate", price : 2400, duration : "2 Weeks",
                features : [
                    { title : "Customizad Plans" },
                    { title : "Billing Report" },
                    { title : "Access to Asana" },
                ]
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="pricing">
                    <Container>
                    <SectionTitle
                        title="OUR Packages"
                        subtitle="OFFERS"
                        desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
                    />

                        <Row className="mt-5 pt-2">
                            <PricingBox pricings={this.state.pricings} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Pricing;