// const React = require("react");

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1" }, "Namste React H1"),
    React.createElement("h2", { id: "h2" }, "Namste react H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "Namste React H1"),
    React.createElement("h2", { id: "h2" }, "Namste react H2"),
  ])
]);

root.render(parent);

