import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
import { Feature } from "../../componets";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        translateY: 0,
        transition: {
          type: "tween",
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        translateY: -50,
      });
    }
    console.log("use effect hook what sec, inView=", inView);
  }, [inView]);

  return (
    <div ref={ref} className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <motion.div animate={animation} className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </motion.div>
      <motion.div animate={animation} className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </motion.div>
      <motion.div animate={animation} className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </motion.div>
    </div>
  );
};

export default WhatGPT3;
