import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import { motion } from "framer-motion/dist/framer-motion";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <motion.div
      className="gpt3__header-content"
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: "tween", duration: 1 }}
    >
      <h1 className="gradient__text">
        Let&apos;s Build Something amazing with GPT-3 OpenAI
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>

      <motion.div
        className="gpt3__header-content__input"
        initial={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ type: "tween", duration: 1, delay: 0.2 }}
      >
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </motion.div>

      <motion.div
        className="gpt3__header-content__people"
        initial={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ type: "tween", duration: 1, delay: 0.4 }}
      >
        <img src={people} alt="people" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ y: 25, opacity: 1 }}
      whileInView={{ opacity: 1 }}
      animate={{ y: [-25, 25, -25, 25, -25] }}
      transition={{ repeat: Infinity, duration: 6 }}
      className="gpt3__header-image"
    >
      <img src={ai} alt="ai" />
    </motion.div>
  </div>
);

export default Header;
