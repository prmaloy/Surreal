import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import work1 from "../../assets/images/gallery/surrealpackage.jpg";
import work2 from "../../assets/images/gallery/surrealpackage1.jpg";
import work3 from "../../assets/images/gallery/surrealpackage2.jpg";
import work4 from "../../assets/images/gallery/surrealpackage3.jpg";
import work5 from "../../assets/images/gallery/surrealpackage6.jpg";
import work6 from "../../assets/images/gallery/surrealpackage5.jpg";

//creating array of images for image portfolio
const images = [
    work1, work2, work3, work4, work5, work6
];

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects : [
                { id : 1, image : work1, title : "Scenic Views", subtitle : "Travel Package", category : "Scenic" },
                { id : 2, image : work2, title : "Historic Sites", subtitle : "Travel Package", category : "Historic" },
                { id : 3, image : work3, title : "Stunning Back Country", subtitle : "Travel Package", category : "Scenic" },
                { id : 4, image : work4, title : "Tropical Paradise", subtitle : "Travel Packagee", category : "Scenic" },
                { id : 5, image : work5, title : "Natural Wonders", subtitle : "Travel Package", category : "Historic" },
                { id : 6, image : work6, title : "Arctic Adventures", subtitle : "Travel Package", category : "Arctic" },
            ],
            displayCategory: "All",
            photoIndex: 0,
            isOpen: false,
        }
        this.setCategory.bind(this);
    }

    setCategory(category) {
        this.setState({
          displayCategory: category
        });
    }
    
    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
                <section className="section" id="gallery">
                    <Container>
                    <SectionTitle
                        title="Premium Destinations"
                        subtitle="Gallery"
                        desc="Check out Surreals hidden destinations. After 10 years in the game we know all the best spots. Enjoy a unique travel experience off the beaten path."
                    />
                
                        <Row className="mt-5 pt-2">
                            <Col lg={12}>
                                <div className="text-center">
                                    <ul className="col container-filter portfolioFilte list-unstyled mb-0" id="filter">
                                        <li className="ml-1"><Link to="#" onClick={() => this.setCategory("All")} className={this.state.displayCategory === "All" ? "categories active" : "categories"}>All</Link></li>
                                        <li className="ml-1"><Link to="#" onClick={() => this.setCategory("Historic")} className={this.state.displayCategory === "Historic" ? "categories active" : "categories"}>Historic</Link></li>
                                        <li className="ml-1"><Link to="#" onClick={() => this.setCategory("Scenic")} className={this.state.displayCategory === "Scenic" ? "categories active" : "categories"}>Scenic</Link></li>
                                        <li className="ml-1"><Link to="#" onClick={() => this.setCategory("Arctic")} className={this.state.displayCategory === "Arctic" ? "categories active" : "categories"}>Arctic</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                
                        <div className="port portfolio-masonry mt-5">
                            <div className="portfolioContainer row">
                            { this.state.projects
                            .filter(
                                ({ category }) =>
                                this.state.displayCategory === category || this.state.displayCategory === "All"
                            )
                            .map(({ title, image, subtitle }, key) => (
                                
                                <Col lg={4} md={4} key={key} className="p-3">
                                    <FadeIn>
                                        <div className="item-box">
                                            <Link to="#" onClick={(event) => {event.preventDefault(); this.setState({ isOpen: true, photoIndex : key })}} className="cbox-gallary1 mfp-image" title="Project Name">
                                                <img className="item-container rounded" src={image} alt="work-img" />
                                                <div className="item-mask">
                                                    <div className="item-caption">
                                                        <h5 className="f-18">{title}</h5>
                                                        <p className="text-primary">{subtitle}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </FadeIn>
                                </Col>
                                
                            ))}
                                
                                {/* lightbox for portfolio images */}
                                { isOpen && (
                                    <Lightbox
                                        mainSrc={images[photoIndex]}
                                        nextSrc={images[(photoIndex + 1) % images.length]}
                                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                        imagePadding={100}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                        }
                                        imageCaption="Project Name"
                                    />
                            ) }
                            </div>
                        </div>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Gallery;