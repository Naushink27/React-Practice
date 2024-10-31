 import React from "react";
 class User_class extends React.Component{
    constructor(props){
     super(props)
     console.log(props)
     console.log("Child Constructor")
     this.state={
        count:0,
        count2:2
     }
    }
    componentDidMount(){
      console.log("Child Mount")
    }
    render(){
      const{name,Location}=this.props;
      const {count}=this.state;
      console.log("Child render")  
        return (
            <div className="user_Card">
              <h2>Name: {name}</h2>
              <h3>Count:{count}</h3>
              <button onClick={()=>{
               this.setState({
                count:this.state.count+1,
               })
              }}>Count Increase</button>
              <h3>Location: {Location}</h3>
              <h4>Email: nausink2709@gmail.com</h4>
            </div>
            
          );
         
    }
 }
 export default User_class;