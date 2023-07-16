import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/126592124?v=4"
          alt="Founder"
        />
        <h2>Biswajit Behera</h2>
        <p>Motivation is temporary, but disciplin last forever.</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a
            href="https://www.linkedin.com/in/biswajit-behera-b585a8265"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Biswajit467" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>

      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
