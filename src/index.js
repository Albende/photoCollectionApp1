import React, { Component } from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main";
import "./styles/stylesheet.css";

ReactDOM.render(<Main />, document.getElementById("root"));

//it is taking 3 variables as h1, null(props), and content
// const element = React.createElement("h1", null, "Hello world!");
//this is hard coded we can use props instead of it
// const tasks = ["Take out the trash", "showel the driveway", "walk the dog"];

//this is using createElement method even though we wrote it like that
// const element = (
//   <div>
//     <h1>Task list</h1>
//     <ol>
//       {/* if we want to write JS code inside of tag we have to use
//     curly braces */}
//       {tasks.map((task, index) => (
//         <li key={index}>{task}</li>
//       ))}
//     </ol>
//   </div>
// );

{
  /* hard coding is in below */
}
{
  /* <li>{tasks[0]}</li>
    <li>{tasks[1]}</li>
    <li>{tasks[2]}</li> */
}

//we created element by createElement method
// const element = React.createElement(
//   "ol",
//   null,
//   tasks.map((task, index) => React.createElement("li", { key: index }, task))
// );
