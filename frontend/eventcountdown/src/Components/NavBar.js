//import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, } from "react-router-dom";
//import "./NavBar.css";
import Main from "./Main.js";
import Events from "./Events.js";
import Transactions from "./Transactions.js";


function NavBar() {
  return (
    <div className="navbar">
                 <BrowserRouter>
                <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Events
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Transactions
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    {/* <Route path="/events" element={<Events />} />
                    <Route path="/transactions" element={<Transactions />} /> */}
                </Routes>
            </BrowserRouter>
    </div>
  );

}


export default NavBar;
