import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import "./cta.css";

const CTA = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        translateY: 0,
        transition: { type: "tween", duration: 1, dely: 0.2 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        translateY: -25,
      });
    }
  });

  return (
    <motion.div ref={ref} animate={animation} className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button>
      </div>
    </motion.div>
  );
};

export default CTA;
