import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar";
import Body from "./components/Body";







const Applayout = () => {
  return (
    <div className="Main-container">
      <Navbar />
      <Body />
    </div>
  );
};
// console.log(reslist);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);