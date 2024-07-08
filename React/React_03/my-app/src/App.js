import { Fragment, Component } from "react";
import React from "react";

class App extends Component {
  render() {
    return (
      <Fragment>

      </Fragment>
    );
  }
}
// class Countdown extends Component {
//   render() {
//     const seconds = this.props
//   }
// }
/*
class Link extends Component {
  render() {
    return (
      <p>
        <a href={this.props.url}>
          {this.props.children}
        </a>
      </p>
    )
  }
}

class ButtonList extends Component {
  getButton(text) {
    return (
      <button disabled={this.props.disabled}>{text}</button>
    );
  }
  render() {
    return (
      <aside>
        {this.getButton('Up')}
        {this.getButton('Down')}
      </aside>
    )
  }
}

// JSX를 사용함
class DateTimeNow extends Component {
  render() {
    const dateTimeNow = new Date().toLocaleString()
    const now = <date>{dateTimeNow}</date>
    const message = <p>Today is {now}</p>
    return (
      <Fragment>
        <span>current date and time is {dateTimeNow}.</span>,
        <p></p>,
        <span>{message}</span>
      </Fragment>
    )
  }
}



// JSX를 사용하지 않음
class DateTimeNow extends Component {
  render() {
    const dateTimeNow = new Date().toLocaleString()
    return React.createElement(
      'span',
      null,
      `current date and time id ${dateTimeNow}.`
    )
  }
}
  */


export default App;
