import React from "react";
import Home from "./components/Home";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
import Navbar from "./components/Navbar";
import './static/scss/common.scss';

function App() {
  return (
   <>
    <Navbar/>
    <Home/>
    
   </>
  );
}

export default App;
