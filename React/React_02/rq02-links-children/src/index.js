import React from "react";
import ReactDOM from "react-dom/client";

class Link extends React.Component {
  render() {
    return React.createElement(
      "p",
      null,
      React.createElement(
        "a",
        {href : this.props.url},
        this.props.children // children이름의 프로퍼티를 마치 다른 프로퍼티마냥 사용함
      )
    );
  }
}

const boldReact = React.createElement("strong", null, "React");
const link1 = React.createElement(
  Link,
  // (아래의 두 코드)이제 각 사용자 정의 컴포넌트에서 하나의 명명된 프로퍼티 즉 url프로퍼티만 전달합니다. 하지만 이제는 자식 노드도 전달하는데 이 노드가 자식 프로퍼티가 될것입니다.
  {url : "//react.dev"}, 
  boldReact
)

const link2 = React.createElement(
  Link,
  {url : "//react.dev"},
  "Vue"
)

const link3 = React.createElement(
  Link,
  {url : "//react.dev"},
  "Angular"
)

const group = React.createElement(
  React.Fragment,null, link1, link2, link3
);

const domElement = document.getElementById("root");

ReactDOM.createRoot(domElement).render(group);