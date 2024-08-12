// import { Component } from "react";
import "./App.css";

function App() {
  return (
    <main>
      <Menu />
    </main>
  );
}
function Menu() {
  return (
    <nav className="navbar">
      <h1 className="title">TheMenuCompany</h1>
      <ul className="menu">
        <MenuItem label={"Home"} href="/" />
        <MenuItem label={"About"} href="/about/" id="about-link" />
        <MenuItem label={"Blog"} href="/blog/" target="_blank" id="blog-link" />
      </ul>
    </nav>
  );
}

function MenuItem({label, href, ...rest}){
  return (
    <li className="menu-item">
      <a className="menu-link" href={href} {...rest}>
        {label}
      </a>
    </li>
  );
}
/*

function Menu() {
  return (
    <nav className="navbar">
      <h1 className="title">TheMenuCompany</h1>
      <ul className="menu">
        <MenuItem label={"Home"} href="/" />
        <MenuItem label={"About"} href="/about/" id="about-link" />
        <MenuItem label={"Blog"} href="/blog/" target="_blank" id="blog-link" />
      </ul>
    </nav>
  );
}

function MenuItem({label, href, target="_self", id=null}){
  return (
    <li className="menu-item">
      <a className="menu-link" href={href} target={target} id={id}>
        {label}
      </a>
    </li>
  );
}


function Menu() {
  return (
    <nav className="navbar">
      <h1 className="title">TheMenuCompany</h1>
      <ul className="menu">
        <MenuItem label="Home" href="/" target="_self" />
        <MenuItem label="About" href="/about/" target="_self" />
        <MenuItem label="Blog" href="/blog" target="_blank" />
      </ul>
    </nav>
  );
}
function MenuItem({label, href, target}) {
  return(
    <li className="menu-item">
      <a
        className="menu-item"
        href={href}
        target={target}
      >
        {label}
      </a>
    </li>
  );
}

const EmptyMenu = () => <nav />

function Menu() {
  return (
    <nav className="navbar">
      <h1 className="title">TheMenuCompany</h1>
      <ul className="menu">
        <MenuItem label="Home" href="/" />
        <MenuItem label="About" href="/about/" />
        <MenuItem label="Blog" href="/blog" />
      </ul>
    </nav>
  );
}
function MenuItem(props) {
  const {href, label} = props;
  return (
    <li className="menu-item">
      <a className="menu-link" href={href}>
        {label}
      </a>
    </li>
  )
}


function MenuItem({href, label}) {
  return (
    <li className="menu-item">
      <a className="menu-link" href={href}>
        {label}
      </a>
    </li>
  )
}

const App = function() {
  const EmptyMenu = () => {return <nav />};
  return (
    <main>
      <EmptyMenu />
    </main>
  );
}

function MenuItem(props) {
  return (
    <li className="menu-item">
      <a className="menu-link" href={props.href}>
        {props.label}
      </a>
    </li>
  )
}


class App extends Component {
  render() {
    return (
      <main>
        <Menu />
      </main>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="title">MenuCompany</h1>
        <ul className="menu">

          <MenuItem label="Home" href="/" /> 
          <MenuItem label="About" href="/about/" />
          <MenuItem label="Blog" href="/blog" />
        </ul>
      </nav>
    )
  }
}

class MenuItem extends Component {
  render() {
    return (
      <li className="menu-item">
        <a className="menu-link" href={this.props.href}>
            {this.props.label}
          </a>
      </li>
    );
  }
*/
export default App;
