import React, { Component } from "react"
//import { document } from "browser-monads"

import "./james.css"

export default class James extends Component {
  _isMounted = false

  state = {
    i: 0,
    y: 0,
    txt: "jamesbarson.com",
    txtShow: "",
    txtSave: "",
    speed: 200,
    min: 50,
    max: 400,
    flash: true,
    timeOfFlash: 700,
    numOfFlash: 3,
    flashToggle: true,
  }

  typeWriter = () => {
    if (this._isMounted) {
      this.setState({ flash: false })
      if (this.state.i < this.state.txt.length) {
        this.setState({ txtShow: this.state.txtSave })
        this.setState({
          txtShow: this.state.txtShow + this.state.txt.charAt(this.state.i),
        })
        this.setState({ txtSave: this.state.txtShow })
        this.setState({ txtShow: this.state.txtShow + "|" })
        this.setState({ i: this.state.i + 1 })
        this.setState({
          speed:
            this.state.min + Math.random() * (this.state.max - this.state.min),
        })

        setTimeout(this.typeWriter, this.state.speed)
      } else {
        this.setState({ flash: true })
      }
    }
  }

  flashCursor = () => {
    if (this._isMounted) {
      if (this.state.flash) {
        if (this.state.flashToggle) {
          this.setState({ txtShow: this.state.txtSave + "|" })
          this.setState({ flashToggle: false })
        } else {
          this.setState({ txtShow: this.state.txtSave + `‏‏‎ ‎‏‏‎` })

          this.setState({ flashToggle: true })
        }
      }

      if (this.state.y > this.state.numOfFlash) {
        this.typeWriter()
        this.setState({ y: -1 })
      } else if (this.state.y === -1) {
      } else {
        this.setState({ y: this.state.y + 1 })
      }
      setTimeout(this.flashCursor, this.state.timeOfFlash)
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.flashCursor()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <div className="box">
        <span id="james" className="james">
          {this.state.txtShow}
        </span>
      </div>
    )
  }
}
