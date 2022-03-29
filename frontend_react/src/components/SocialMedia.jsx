import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/isen-claes-29111a1b1/">
        <div>
          <FaLinkedinIn />
        </div>
      </a>
      <a href="https://www.facebook.com/isen.claes">
        <div>
          <FaFacebookF />
        </div>
      </a>
      <a href="https://www.instagram.com/isen.claes">
        <div>
          <BsInstagram />
        </div>
      </a>
      <a href="https://github.com/IsenClaes">
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
