import React from "react"
import Recaptcha from "react-google-recaptcha"
import { navigate } from "gatsby"

import "./contact.css"

const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your Netlify build environment variables. 
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  Note this demo is specifically for Recaptcha v2
  `)
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef()
  var recaptchaComplete = false

  function onChange(value) {
    //console.log("Captcha value:", value);
    if (value === null) {
      recaptchaComplete = false
    } else {
      recaptchaComplete = true
    }
  }

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
     if (recaptchaComplete) {
fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }),
    })
    .then(() => navigate(form.getAttribute('action')))
    .catch(error => alert(error))
    } else {
      alert("Please complete the Recaptcha")
     }
    
  }

  return (
    <div className="wrapper">
      {/* Contact Title */}
      <div className="contactBox_title">
        <div className="contact_title">Contact Me</div>
      </div>

      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        <noscript>
          <p>This form won’t work with Javascript disabled</p>
        </noscript>

        <div className="contactBox">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <div className="name">
            <label className="lables" htmlFor="name">
              name
            </label>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="email">
            <label className="lables" htmlFor="email">
              email
            </label>
            <input
              className="input"
              type="email"
              name="email"
              id="email"
            />
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

          <Recaptcha
            className="recaptcha"
            ref={recaptchaRef}
            sitekey={RECAPTCHA_KEY}
            onChange={onChange}
           
          />

          <button className="send" type="submit" value="submit">
            send.
          </button>
          <input className="clear" type="reset" value="clear" />
        </div>
      </form>
    </div>
  )
}
