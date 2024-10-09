import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";



const Applayout = () => {
  return (
    <div className="Main-container">
      <Navbar />
    <Outlet />
    </div>
  );
};
// console.log(reslist);
const appRouter=createBrowserRouter(
  [
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },

],)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter}/>);