//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";
var name = "Sampreeth";
var date = new Date();
var year = date.getFullYear();
ReactDOM.render(
  <div>
    <p>Hello {name}</p>
    <p>Year {year}</p>
  </div>,
  document.getElementById("root")
);
