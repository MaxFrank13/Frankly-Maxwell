'use client';
import React from "react";
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";

export default function HomeBanner() {

  return (
    <>
      <canvas id="canvas1"></canvas>
      <div className="banner">
        <div className="banner-container">
          <h2>Software Engineer</h2>
          <div className="banner-btns">
            <a className="btn jump scroll-link" href="#projects">Jump to Projects</a>
            <a className="btn game" href="https://minesweeper-react-three.vercel.app/" target="_blank">Play a game</a>
          </div>
        </div>
        <section className="contact">
          <p>Contact me at</p>
          <ul>
            <li>
              <a href="https://github.com/MaxFrank13" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/maxwell-frank" target="_blank">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="resume.pdf" target="_blank">
                <FaFile />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}