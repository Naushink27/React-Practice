import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
  const [ListofRest,setListofRest]=useState([])
  useEffect(()=>{
    fetchData();
  },[])
 

  
  const fetchData = async () => {
const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.5204303&lng=73.8567437");
console.log('Data',data)
const json= await data.json();

console.log(json)
const dataApi=json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
setListofRest(dataApi)

   };
  if(ListofRest.length==0){
    return <Shimmer/>
  }
  
  
    return (
      <div className="bodyContainer">
        <div className="searchBar">
          <input type="text" placeholder="Search"></input>
          <button className="Filter_btn" onClick={()=>{
            const filterlogic=ListofRest.filter((res)=>{
             return  res.info.avgRating>4;
            })
            setListofRest(filterlogic)
          }}>Search</button>
          
        </div>
        <div className="restrauntContainer">
        {ListofRest.map((restaurant) => (
            <RestrauntCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;