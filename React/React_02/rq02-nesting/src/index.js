import React from "react";
import ReactDOM from "react-dom/client";

const title = React.createElement("h1", null, "Hello world!");
const link = React.createElement("a", {href: "//react.dev"}, "read more");

// 실제 요소를 사용하지 않고 엘리먼트를 그룹화
const group = React.createElement(
    React.Fragment,null,title,link
);

const domElement = document.getElementById("root");
ReactDOM.createRoot(domElement).render(group);

