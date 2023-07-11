import React  from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},React.createElement("div",
{id:"child"}
,[React.createElement("h1",{id:"hed"},"i'm nested html"),React.createElement("h2",{id:"hed"},"i'm neasted html")]))

console.log(parent)

//const heading = React.createElement("h1",{id:"heading"},"hello from react");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)