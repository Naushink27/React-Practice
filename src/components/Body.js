import RestrauntCard from "./RestrauntCard"; 
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [ListofRest, setListofRest] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchtext, setsearchtext] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true); // Start loading
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log("Fetched Data:", json);

      const dataApi = json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants;
      console.log("Parsed Restaurants:", dataApi);

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

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="bodyContainer">
      <div className="searchBar">
        <input
          className="Search-restraunt" 
          type="text"
          value={searchtext}
          onChange={(e) => setsearchtext(e.target.value)}
        />
        <button onClick={() => {
          const filteredRes = ListofRest.filter((res) => 
            res.info.name.toLowerCase().includes(searchtext.toLowerCase())
          );
          setFilteredList(filteredRes); // Set filtered results
        }}>Search</button>
        <button className="Filter_btn" onClick={handleFilter}>filter</button>
      </div>
      <div className="restrauntContainer"> 
        {filteredList.length === 0 ? (
          <p>No restaurants found.</p>
        ) : (
          filteredList.map((restaurants) => (
            <Link key={restaurants.id} to={"/restaurants/" + restaurants.info.id}> 
            <RestrauntCard resData={restaurants} />
          </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
