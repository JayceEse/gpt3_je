import React from "react";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.9, type: "tween" }}
      className="gpt3__blog-container_article"
    >
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <div>
          <p>Read Full Article</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Article;
