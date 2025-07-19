import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Home.css";


const Home = () => {
  const featuredMovie = {
    title: "Inception",
    description: "A mind-bending thriller that blurs the line between dream and reality.",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
  };

  const categories = [
    { name: "Action", image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/12/10-best-action-movies-of-the-last-25-years.jpg" },
    { name: "Comedy", image: "https://filmfare.wwmindia.com/thumb/content/2022/nov/top-comedy-films-21667975848.jpg?width=1280&height=720" },
    { name: "Drama", image: "https://hips.hearstapps.com/hmg-prod/images/before-sunrise-everett-1651175088.jpg?crop=1xw:1xh;center,top&resize=980:*" },
    { name: "Horror", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpE5fhJdprt4Xdij2NSx9gGYl4Mq8x6ljMg&s" },
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="hero-content">
              <h1 className="hero-title">{featuredMovie.title}</h1>
              <p className="hero-description">{featuredMovie.description}</p>
              <Button className="watch-now-btn">
                Watch Now
                <span className="btn-hover-effect"></span>
              </Button>
            </Col>
            <Col md={6} className="hero-image-container">
              <img
                src={featuredMovie.image}
                alt={featuredMovie.title}
                className="hero-image"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="categories-section">
        <h2 className="section-title">Browse by Genre</h2>
        <Row>
          {categories.map((cat, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <div className="category-card">
                <div className="card-image-wrapper">
                  <Card.Img variant="top" src={cat.image} className="category-image"/>
                  <div className="image-overlay">
                    <Button className="explore-btn">
                      Explore {cat.name}
                    </Button>
                  </div>
                </div>
                <div className="category-content">
                  <h3 className="category-title">{cat.name}</h3>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="movie-footer">
        <Container>
          <p className="footer-text">© 2025 MovieMania. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;