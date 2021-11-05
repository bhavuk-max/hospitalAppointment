import React from "react";
import { useLocation } from "react-router";

export default function ArticleDetails() {
  const location = useLocation();
  const { body, image } = location.state;

  return (
    <div>
      <img src={image} className="article-card" />
      <div>{body}</div>
    </div>
  );
}
