import React from "react";
import ReactDOM from "react-dom/client"; 


const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, 
  React.createElement("div", { id: "child1" }, 
    React.createElement("h1", { id: "h1" }, "Namste React H1"))
);

root.render(parent);

 