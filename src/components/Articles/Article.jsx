import React, { Component } from "react";
import { articles } from "./ArticlesData";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import "./Article.css";
import { Link } from "react-router-dom";

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
    console.log(this.props);
    return (
      <div>
        <h1>Articles</h1>

        {/* <Carousel variant={"dark"} interval={5000}>
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
        </Accordion> */}
        <div className="articles">
          {articles.map((x) => (
            <Link
              // onClick={() => this.props.history.push("/articleDetails")}
              to={{
                pathname: "/articleDetails",
                state: {
                  body: x.body,
                  image: x.image,
                  content: x.content,
                },
              }}
              className="article-link"
              state={{ from: "Article" }}
            >
              <Card
                className="article-card"
                style={{ width: "18rem" }}
                // onClick={() => this.props.history.push("/articleDetails")}
              >
                <Card.Img
                  className="article-card-icon"
                  variant="top"
                  src={x.image}
                />
                <Card.Body>
                  <Card.Title>{x.title}</Card.Title>
                </Card.Body>

                <Card.Body>
                  <Card.Text className="article-body">{x.body}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Article;
