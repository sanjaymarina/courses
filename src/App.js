import React from "react";
import Navigations from "./nav/nav1.js";
// import Carousels from './Carousel/Carousels.js';
import {BrowserRouter as Router} from "react-router-dom";
import HtmlRouter from "./router/HTMLRouter.js";


function App() {
  return (
    <div className="App">
    <Navigations name="TECHNICAL COURSES" bg="dark" expand="lg" />
    {/* <Carousels /> */}
   <Router>
   <HtmlRouter />
   </Router>
    
    </div>
  );
}

export default App;
