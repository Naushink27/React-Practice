 import React from "react";
 class User_class extends React.Component{
    constructor(props){
     super(props)
     console.log(props)
     console.log("Child Constructor")
     this.state={
     userInfo: {
        user:"Dummy",
        public_repos:"Default",
        url:"https/www.dummy.com"
      }
     

     }
    }
   async componentDidMount(){
      // console.log("Child Mount")
      const data=await fetch("https://api.github.com/users/Naushink27")
      const json= await data.json();
      console.log(json)
      this.setState({
           userInfo:json,
    } );
    }
    render(){
      const{name,public_repos,avatar_url}=this.state.userInfo;
      
      console.log("Child render")  
        return (
            <div className="user_Card">
              <h2>Name: {name}</h2>
         <img src={avatar_url}></img>
              
              <h3>public_repos: {public_repos}</h3>
              <h4>Email: nausink2709@gmail.com</h4>
            </div>
            
          );
         
    }
 }
 export default User_class;