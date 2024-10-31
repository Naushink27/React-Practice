import { useState } from "react";


const User = (props) => {
  const[count]=useState(0);
  const[count2]=useState(2);
    return (
      
      <div className="user_Card">
        <h2>Name: {props.name}</h2>
        <h3>count:{count}</h3>
        <h3>count:{count2}</h3>
        <h3>Location: {props.Location}</h3>
        <h4>Email: nausink2709@gmail.com</h4>
      </div>
    );
  };
  
  export default User;
  