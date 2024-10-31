import React from "react";
import User from "./User";
import User_class from "./User_class"

class AboutClass extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("Parent Mount")
      }
render(){
    console.log("Parent Render")
    return(
        <div className="about-container">
        <h1>About Us</h1>
        <p>Welcome to <strong>Swiggy Clone</strong>!</p>
        <p>At <strong>Swiggy Clone</strong>, our mission is simple: to bring delicious food to your doorstep with the speed and ease you deserve. Whether you're craving your favorite local dishes or trying something new, we've got it all covered.</p>
        
        <h2>Our Vision</h2>
        <p>We aim to revolutionize the food delivery experience by connecting customers with a wide variety of restaurants, ensuring quality, taste, and convenience in every meal. Our goal is to make ordering food as enjoyable as eating it!</p>
        
        <h2>Why Choose Us?</h2>
        <ul>
            <li><strong>Wide Selection</strong>: From fast food to gourmet meals, discover restaurants for every taste.</li>
            <li><strong>Fast Delivery</strong>: We ensure your food arrives hot and fresh, right when you need it.</li>
            <li><strong>Easy Payment Options</strong>: Secure online payments for a hassle-free experience.</li>
            <li><strong>Real-time Tracking</strong>: Track your food from the kitchen to your doorstep with real-time updates.</li>
        </ul>
        
        <h2>Our Team</h2>
        <p>We are a passionate group of food enthusiasts, tech lovers, and customer care experts who work tirelessly to bring you the best food delivery service. Every meal you order is our top priority.</p>
       <div className="userCards">
       
       
       <User_class  name={"Kira(Class)"} Location={"Japan"}/>
       <User_class  name={"Kira(Class)"} Location={"Japan"}/>
       </div>
        
        <h2>Our Promise</h2>
        <p>At <strong>Swiggy Clone</strong>, we promise fast, reliable, and delicious food deliveries, helping you enjoy your meals without any hassle. We’re constantly improving our services to offer the best possible experience.</p>
    </div>
    
    )
}
}

export default AboutClass;