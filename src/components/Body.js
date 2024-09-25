import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListofRest, setListofRest] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const[searchtext,setsearchtext]=useState("")
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true); // Start loading
    try {
      const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.5204303&lng=73.8567437");
      const json = await data.json();
      console.log("Fetched Data:", json); // Check fetched data structure

      const dataApi = json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
      console.log("Parsed Restaurants:", dataApi); // Check parsed data

      if (dataApi) {
        setListofRest(dataApi);
        setFilteredList(dataApi); // Initialize filteredList
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleFilter = () => {
    const filtered = ListofRest.filter((res) => res.info.avgRating > 4);
    setFilteredList(filtered);
  };

  // Render loading state
  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="bodyContainer">
      <div className="searchBar">
        <input className="Search-restraunt" type="text" value={searchtext} onChange={(e)=>{setsearchtext(e.target.value)}}>
        
        </input>
        <button onClick={()=>{
          console.log(searchtext)
                const filteredRes=ListofRest.filter((res)=>{res.data.name.toLowercase().includes(searchtext.toLowerCase())})
        }} 
          
          >Search</button>
        <button className="Filter_btn" onClick={handleFilter}>filter</button>
      </div>
      <div className="restrauntContainer">
        {filteredList.length === 0 ? (
          <p>No restaurants found.</p> // Notify user if no results
        ) : (
          filteredList.map((restaurant) => (
            <RestrauntCard key={restaurant.id} resData={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
