import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { connect } from "../assets";
import { BsGithub } from "react-icons/bs";


const ContactLeft = () => {
  return (
    <div
      className="w-full lgl:w-[35%] h-full
    gap-8 p-4 py-16 lgl:p-8 rounded-lg flex flex-col justify-center"
    >
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={connect}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-cyan-400">Srujan Kumar Balgoni</h3>

        <p className="text-base text-white  tracking-wide">
          To build my career by acquiring a suitable position in a
          well-established company and working hard with commitment and
          sincerity in a challenging and creative environment where my
          capabilities and technical skills are best utilized.
        </p>
        <p className="text-base text-white flex items-center gap-2">
          <span className="text-cyan-400">Phone:</span> <span className="text-lightText">+91 9346424298</span>
        </p>
        <p className="text-base text-white flex items-center gap-2">
          <span className="text-cyan-400">Email:</span>{" "}
          <span className="text-white">balgonisrujan2002@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-white uppercase mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/srujankumar07"
            className="text-white"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            className="bannerIcon text-white"
            href="https://twitter.com/srujankumar07"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/srujan-kumar-a19316249/"
            target="_blank"
            className="bannerIcon text-white"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
