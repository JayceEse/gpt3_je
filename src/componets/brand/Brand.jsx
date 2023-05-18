import React from "react";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";
import { useEffect } from "react";

const Brand = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        translateX: 0,
        transition: {
          type: "tween",
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        translateX: -50,
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="gpt3__brand section__padding">
      <motion.div animate={animation}>
        <img src={google} alt="google" />
      </motion.div>
      <motion.div animate={animation}>
        <img src={slack} alt="slack" />
      </motion.div>
      <motion.div animate={animation}>
        <img src={atlassian} alt="atlassian" />
      </motion.div>
      <motion.div animate={animation}>
        <img src={dropbox} alt="dropbox" />
      </motion.div>
      <motion.div animate={animation}>
        <img src={shopify} alt="shopify" />
      </motion.div>
    </div>
  );
};

export default Brand;
