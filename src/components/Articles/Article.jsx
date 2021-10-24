import React, { Component } from "react";
import { articles } from "./ArticlesData";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import "./Article.css";

class Article extends React.Component {
  state = {
    selectedArticle: articles[0][0],
    eventKey: null,
  };

  handleCard(x) {
    this.setState({ selectedArticle: x, eventKey: "0" });
  }

  render() {
    const { selectedArticle } = this.state;

    return (
      <div>
        <h1>Articles</h1>

        <Carousel variant={"dark"} interval={5000}>
          {articles.map((x, index) => (
            <Carousel.Item className="carousel-item header">
              <div className="inner-card">
                {x.map((item, index) => (
                  <div>
                    <Card
                      onClick={() => this.handleCard(item)}
                      style={{ width: "18rem", margin: "15px" }}
                      key={index}
                    >
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Img
                          variant="top"
                          src={item.image}
                          className="image"
                        />
                        {/* <Card.Text>{x.body}</Card.Text> */}
                      </Card.Body>
                    </Card>{" "}
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{selectedArticle.title}</Accordion.Header>
            <Accordion.Body>{selectedArticle.body} </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

export default Article;
