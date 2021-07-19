import React from 'react';
import {NavList} from './navList';
import {Nav} from 'react-bootstrap';
import Dropdown from '../DropDown/DropDown';
import Dropdown1 from "../DropDown/dropDown1.js";

import LinkRouter from "../router/LinkRouter";
import {BrowserRouter as Router} from "react-router-dom";

function Navs(){
  return(
    <Nav className="mr-auto my-2 my-lg-0"
    style={{ maxHeight: '100px' }}
    navbarScroll>
     {NavList.map((Data) => {
       return (
         <Nav.Link key={Data.id} href={Data.href}>
           {Data.name}
         </Nav.Link>
       );
     })}

     

     <Dropdown dropDownTitle="FRONT END"/>
     <Dropdown1 dropDownTitle="BACK END"/>


     <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">
    <Router>
    <LinkRouter />
    </Router>
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

   </Nav>
  )
  
}

export default Navs;