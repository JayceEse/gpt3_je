import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        translateY: 0,
        transition: { type: "tween", duration: 1.5 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        translateY: -50,
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="gpt3__footer section__padding">
      <motion.div animate={animation} className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </motion.div>

      <motion.div animate={animation} className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </motion.div>

      <motion.div animate={animation} className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </motion.div>

      <motion.div animate={animation} className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </motion.div>
    </div>
  );
};

export default Footer;
