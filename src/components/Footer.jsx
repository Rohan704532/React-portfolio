import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
  AiFillLinkedin
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-scaled.jpg"}
          alt="Founder"
        />

        <h2>Rohan Singh</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/rohan-singh-a26968153/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Rohan704532" target={"blank"}>
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
