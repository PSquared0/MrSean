import React from "react";

import Global from "./styles/global";

import Home from "./views/Home/Home";

import Nav from "./views/Nav/Nav";

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

const data = [
  {
    id: Math.random(),
    title: "Music",
    text: lorem,
    bgColor: "#D5CAFA"
  },
  {
    id: Math.random(),
    title: "Fun",
    text: lorem,
    bgColor: "#EDA9A9"
  },
  {
    id: Math.random(),
    title: "Parties",
    text: lorem,
    bgColor: "#F2EE8D"
  },
  {
    id: Math.random(),
    title: "School",
    text: lorem,
    bgColor: "#9FEACD"
  }
];

function App() {
  return (
    <>
    <Nav />
      <Global />
      <Home boxData={data} />
    </>
  );
}

export default App;