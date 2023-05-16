import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <motion.div
        initial={{ x: "-100vw" }}
        whileInView={{ x: 0 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <img src={google} alt="google" />
      </motion.div>
      <motion.div>
        <img src={slack} alt="slack" />
      </motion.div>
      <motion.div>
        <img src={atlassian} alt="atlassian" />
      </motion.div>
      <motion.div>
        <img src={dropbox} alt="dropbox" />
      </motion.div>
      <motion.div>
        <img src={shopify} alt="shopify" />
      </motion.div>
    </div>
  );
};

export default Brand;
