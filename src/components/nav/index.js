//PLUGINS
import React, { Component } from "react"
import { Link } from "gatsby"
//import { document } from "browser-monads"

//FILES
import menuIcon from "../../images/menu.svg"
import closeIcon from "../../images/close.svg"
import "./nav.css"

export default class Nav extends Component {
  state = {
    isBoxVisible: true,
  }

  toggleBox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }))
    console.log(this.state)
  }

  render() {
    const { isBoxVisible } = this.state
    return (
      <nav>
        <div className="content">
          <div className="logo_Class">
            <Link to="/">
              <span>j.</span>
            </Link>
          </div>

          <div className="links">
            <Link to="/about/">
              <span>about</span>
            </Link>

            <Link to="/portfolio/">
              <span>portfolio</span>
            </Link>

            <Link to="/blog/">
              <span>blog</span>
            </Link>

            <Link to="/contact/">
              <span>contact</span>
            </Link>
          </div>

          <input
            type="image"
            src={menuIcon}
            alt="menu icon"
            className={`menu ${isBoxVisible ? "showC" : "hiddenC"}`}
            onClick={this.toggleBox}
          ></input>

          <input
            type="image"
            src={closeIcon}
            alt="close icon"
            className={`close ${isBoxVisible ? "hiddenC" : "showC"}`}
            onClick={this.toggleBox}
          ></input>
        </div>
        <div></div>

        <div className={`dropdown ${isBoxVisible ? "hidden" : "show"}`}>
          <Link to="/about/">
            <span>about</span>
          </Link>
          <Link to="/portfolio/">
            <span>portfolio</span>
          </Link>
          <Link to="/blog/">
            <span>blog</span>
          </Link>
          <Link to="/contact/">
            <span>contact</span>
          </Link>
        </div>
      </nav>
    )
  }
}
