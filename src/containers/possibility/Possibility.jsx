import React from "react";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        translateX: 0,
        transition: {
          type: "tween",
          duration: 1.5,
          delay: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        translateX: 25,
      });
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="gpt3__possibility section__padding"
      id="possibilty"
    >
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibilty" />
      </div>
      <motion.div animate={animation} className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </motion.div>
    </div>
  );
};

export default Possibility;
