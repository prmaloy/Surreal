import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team1 from "../../assets/images/users/img-1.jpg";
import team2 from "../../assets/images/users/img-2.jpg";
import team3 from "../../assets/images/users/img-3.jpg";
import team4 from "../../assets/images/users/img-4.jpg";

class OurTeam extends Component {
    state = {
        members : [
            { img : team1, name : "Ross Westerfield", post : "Travel Agent", desc : "From Harrisburg, Pennsylvania Sam has been on the team for 6 years." },
            { img : team2, name : "Tyler Raymer", post : "Travel Agent", desc : "From Raleigh, North Carolina Tyler has been on the team for 8 years." },
            { img : team3, name : "Anna Lewis", post : "Travel Agent", desc : "From Austin, Texas Anna has been on the team for 9 years." },
            { img : team4, name : "Jonathan Waddell", post : "Manager", desc : "From Harrisburg, Pennsylvania Jonathan has been on the team for 9 years." },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section" id="team">
                    <Container>
                    <SectionTitle
                        title="Our Team"
                        subtitle="Meet"
                        desc="Experience... ours will make yours perfect. Our team of travel agents is experienced and passionate about creating life changing experiances"
                    />
                        <Row className="mt-5 pt-2">
                            <TeamBox members={this.state.members} />
                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default OurTeam;