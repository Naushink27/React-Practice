import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";



const Applayout = () => {
  return (
    <div className="Main-container">
      <Navbar />
      <Body />
    </div>
  );
};
// console.log(reslist);
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter}/>);