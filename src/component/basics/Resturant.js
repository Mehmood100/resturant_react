import React from "react";
import "./style.css"

const Resturant = () => {
  return (
    <>
      <div className="card-container">
      <div className="card">
        <div className="card-body">
         <span className="card-number card-circle subtle">1</span>
         <span className="card-author subtle">Breakfast</span>              
         <p className="card-title">Maggi</p>
         <span className="card-description subtle">
          lorem ipsum dolor sit amet consectetur adipisicing eliy. 
          lorem ipsum dolor sit amet consectetur adipisicing eliy. 
          lorem ipsum dolor sit amet consectetur adipisicing eliy. 
         </span>
         <div className="card-read">Read</div>
        </div>
        {/* <img src={images} alt="images" className="card-media" /> */}
        <span className="card-tag subtle">Order Now</span>
      </div>
      </div>
    </>
  )

}

export default Resturant;