import React from 'react';
import {NavDropdown} from 'react-bootstrap';
import {DropDownNavList} from '../nav/navList';
import LinkRouter from "../router/LinkRouter";
import {BrowserRouter as Router} from "react-router-dom";

function Dropdown(props){
    return(

<NavDropdown title={props.dropDownTitle} id="navbarScrollingDropdown">

{DropDownNavList.map((Data) => {
  return (

    <NavDropdown.Item key={Data.id} href={Data.href}>
    <Router>
    <LinkRouter />
    </Router>
    </NavDropdown.Item>
    
  );
})}




</NavDropdown>

    )
}

export default Dropdown;