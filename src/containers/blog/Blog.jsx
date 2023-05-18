import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import { Article } from "../../componets";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const titleAnimate = useAnimation();
  const cardAnimate = useAnimation();

  useEffect(() => {
    if (inView) {
      titleAnimate.start({
        opacity: 1,
        translateX: 0,
        transtion: { type: "tween", duration: 1.5 },
      });

      cardAnimate.start({
        opacity: 1,
        translateX: 0,
        transition: { type: "tween", duration: 1.5 },
      });
    }
    if (!inView) {
      titleAnimate.start({
        opacity: 0,
        translateX: -50,
        transtion: { type: "tween", duration: 1 },
      });

      cardAnimate.start({
        opacity: 0,
        translateX: 50,
        transition: { type: "tween", duration: 1 },
      });
    }
  });

  return (
    <div ref={ref} className="gpt3__blog section__padding" id="blog">
      <motion.div animate={titleAnimate} className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </motion.div>
      <motion.div animate={cardAnimate} className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
