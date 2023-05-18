import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
import { Feature } from "../../componets";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly ",
    text:
      "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active ",
    text:
      "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing ",
    text:
      "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county ",
    text:
      "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        translateY: 0,
        transition: { type: "tween", duration: 1 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        translateY: -25,
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="gpt3__features section__padding" id="features">
      <motion.div animate={animation} className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </motion.div>
      <motion.div animate={animation} className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
