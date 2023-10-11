import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/img1.png";

const Home = ({ ratio }) => {
  // const clientCount = useRef(null);
  const ProjectCount = useRef(null);


  // const animationClientsCount = () => {
  //   animate(0, 1, {
  //     duration: 1,
  //     onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
  //   });
  // };

  const animationProjectsCount = () => {
    animate(0, 11, {
      duration: 1,
      onUpdate: (v) => (ProjectCount.current.textContent = v.toFixed()),
    });
  };

  const animation = {
    h1: {
      initial: {
        x: "-100",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I Am <br /> Biswajit Behera
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creater"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:beherabiswajit467@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          {/* <article>
            <p>
              +
              {ratio < 2 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>Clients Worldwide</span>
          </article> */}

          <aside>
            <article>
              <p>
                +
                {ratio < 2 && (
                  <motion.span
                    whileInView={animationProjectsCount}
                    ref={ProjectCount}
                  ></motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>beherabiswajit467@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={me} alt="Biswajit" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
