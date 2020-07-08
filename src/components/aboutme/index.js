import React, { Component } from "react"
//import { document } from "browser-monads"

import "./aboutme.css"
import instagram from "../../images/Icons/icon-instagram.svg"
import facebook from "../../images/Icons/icon-facebook.svg"
import twitter from "../../images/Icons/icon-twitter.svg"
import linkedin from "../../images/Icons/icon-linkedin.svg"
import github from "../../images/Icons/icon-github.svg"
import discord from "../../images/Icons/icon-discord.svg"

import photo from "../../images/jamesphoto.png"

export default class AboutMe extends Component {
  render() {
    return (
      <div className="about_wrapper">
        {/* BLOCK 1 */}
        <div className="about_contactBox">
          <img className="about_image" src={photo} alt="jamesbarson"></img>
          <div className="about_lables">
            <div className="james_lable">James Barson</div>
            <div className="username_lable">@coolbotic</div>
          </div>
        </div>
        {/* BLOCK 2 */}
        <div className="about_contactBox">
          {/* ICON LIST */}
          <ul className="socialList">
            {/* FACEBOOK */}
            <li>
              <a
                href="https://www.facebook.com/coolbotic/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon grow"
                  src={facebook}
                  alt="facebook link"
                ></img>
              </a>
            </li>
            {/* TWITTER */}
            <li>
              <a
                href="https://twitter.com/barsonj/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon grow"
                  src={twitter}
                  alt="twitter link"
                ></img>
              </a>
            </li>
            {/* INSTAGRAM */}
            <li>
              <a
                href="https://www.instagram.com/jamesbarson/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon grow"
                  src={instagram}
                  alt="instagram link"
                ></img>
              </a>
            </li>
            {/* LINKEDIN */}
            <li>
              <a
                href="https://www.linkedin.com/in/james-barson-735b0369/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon grow"
                  src={linkedin}
                  alt="linkedin link"
                ></img>
              </a>
            </li>
            {/* GITHUB */}
            <li>
              <a
                href="https://github.com/coolbotic"
                target="_blank"
                rel="noreferrer"
              >
                <img className="icon grow" src={github} alt="github link"></img>
              </a>
            </li>
            {/* DISCORD */}
            <li>
              <a
                href="https://discord.gg/CNqKxtt"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon grow"
                  src={discord}
                  alt="discord link"
                ></img>
              </a>
            </li>
          </ul>
        </div>
        {/* BLOCK 3 */}
        <div className="about_textBox">
          <div className="about_text">
            Hello, I am James Barson. I am currently in my second year of
            studying Mechanical Engineering in Bristol. When I am not studying,
            I enjoy computer coding and conducting my own DIY projects. I love
            being able to see the development of projects and seeing my design
            plans come to fruition. 
            <br />
            <br />
            For this website I have compiled together my
            portfolios and blog posts for you to see things I have made clearly.
            For any enquiries regarding websites, computers, tech and more,
            please do not hesitate to contact me via the contact tab.
          </div>
        </div>
      </div>
    )
  }
}
