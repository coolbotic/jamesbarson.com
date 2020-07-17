import React, { Component } from "react"

import "./contact.css"

export default class James extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* Contact Title */}
        <div className="contactBox_title">
          <div className="contact_title">Contact Me</div>
        </div>

        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          data-netlify-recaptcha="true"
          action="/"
          name="contact"
        >
          <div className="contactBox">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="name">
              <label className="lables" htmlFor="name">
                name
              </label>
              <input className="input" type="text" name="name" id="name" />
            </div>

            <div className="email">
              <label className="lables" htmlFor="email">
                email
              </label>
              <input className="input" type="email" name="email" id="email" />
            </div>

            <div className="subject">
              <label className="lables" htmlFor="subject">
                subject
              </label>
              <input
                className="input"
                type="text"
                name="subject"
                id="subject"
              />
            </div>

            <div className="message">
              <label className="lables" htmlFor="message">
                message
              </label>
              <textarea
                className="input"
                name="message"
                id="message"
                rows="5"
              />
            </div>

            <div data-netlify-recaptcha="true"></div>

            <button className="send" type="submit" value="submit">
              send.
            </button>
            <input className="clear" type="reset" value="clear" />
          </div>
        </form>
      </div>
    )
  }
}
