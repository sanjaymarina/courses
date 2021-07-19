
import React from "react";
import { Navbar} from "react-bootstrap";
import Navs from './nav.js';
import Forms from './Form.js';
import 'bootstrap/dist/css/bootstrap.min.css';



   function Navigations(props){
  return (
    
      <div>
        <Navbar bg={props.bg} variant="dark" expand={props.expand}>
          <Navbar.Brand href="/">{props.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

          <Navs />

          <Forms btnName="submit" btnColor="outline-success" />

          </Navbar.Collapse>
        </Navbar>
      </div>
  
    
  );
};
export default Navigations;