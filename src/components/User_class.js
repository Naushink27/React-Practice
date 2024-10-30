 import React from "react";
 class User_class extends React.Component{
    constructor(props){
     super(props)
     console.log(props)
    }
    render(){
        return (
            <div className="user_Card">
              <h2>Name: {this.props.name}</h2>
              <h3>Location: {this.props.Location}</h3>
              <h4>Email: nausink2709@gmail.com</h4>
            </div>
          );
    }
 }
 export default User_class;