import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },
    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="servicesBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>1</h3>
          <p>Year Expriences</p>
        </motion.div>

        <motion.div
          className="servicesBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <AiFillIeCircle />
          <span>Web Developement</span>
        </motion.div>

        <motion.div
          className="servicesBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <AiFillAndroid />
          <span>App Developement</span>
        </motion.div>

        <motion.div
          className="servicesBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <AiFillWindows />
          <span>Desktop Developement</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
