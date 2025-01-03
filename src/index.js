import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery"; // Correct import for default export
import { Provider } from "react-redux";
import appStore from "./components/appStore";
import Cart from "./components/Cart";


const About=lazy(()=>import("./components/About"))
const Grocery= lazy(()=> import("./components/Grocery"));
const Applayout = () => {
  return (
    <Provider store={appStore}>
    <div className="Main-container">
      <Navbar />
    <Outlet />
    </div>
    </Provider> 
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
        element: <Suspense fallback={<h1>loading.....</h1>}><About /></Suspense>
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
        path: "/grocery",
        element: <Suspense fallback={<h1>loading.....</h1>}><Grocery /></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  },

],)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter}/>);