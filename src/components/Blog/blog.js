import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import BlogBox from "./blog-box";

//Import Images
import blog1 from "../../assets/images/blog/img-1.jpg";
import blog2 from "../../assets/images/blog/img-2.jpg";
import blog3 from "../../assets/images/blog/img-3.jpg";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs : [
                { img : blog1, title : "How do I find a safe desination?", category : "Travel, Family", date : "25", month : "Jan", desc : "After months of uncertainty amid the global pandemic, optimism is again on the rise." },
                { img : blog2, title : "Find hidden destinations.", category : "Travel, Adventure", date : "12", month : "Feb", desc : "When I decided to take that bucket list trip the last thing I wanted was to spend my time on packed busses " },
                { img : blog3, title : "Sailing is a lifestyle!", category : "Travel, Adventure", date : "31", month : "Jun", desc : "I left the corporate life behind and decided to become a full time sailor. This is how I succeeded" },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="section" id="blog">
                    <Container>
                    <SectionTitle
                        title="Our Blog"
                        subtitle="News"
                        desc="Check out our blog for awesome adventure stories, travel hacks, travel warnings, and travel meetup events!"
                    />
                        <Row className="mt-5 pt-2">
                            <BlogBox blogs={this.state.blogs} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Blog;