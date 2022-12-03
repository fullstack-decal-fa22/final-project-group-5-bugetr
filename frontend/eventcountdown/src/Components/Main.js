import React from "react";
//import "./Header.css";
// import Headroom from "react-headroom";


import NavBar from "./NavBar.js";
import Events from "./Events.js";
import Event from "./Event.js";
import Transactions from "./Transactions.js";
import AddEvent from "./AddEvent.js";
import AddTotalBudget from "./AddTotalBudget.js";

const Main = () => {
  return (
    <div className="header-container">
       {/* <NavBar/> */}
      <h1>Welcome back!</h1>
      
      <AddEvent></AddEvent>
      <Events></Events>
      
    </div>
  );
}

export default Main;
