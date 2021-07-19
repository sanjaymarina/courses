import React from 'react';
import {NavDropdown} from 'react-bootstrap';
import {DropDownNavList1} from '../nav/navList';

function Dropdown1(props){
    return(

<NavDropdown title={props.dropDownTitle} id="navbarScrollingDropdown">

{DropDownNavList1.map((Data) => {
  return (
    <NavDropdown.Item key={Data.id} href={Data.href}>{Data.name} </NavDropdown.Item>
  );
})}

</NavDropdown>

    )
}

export default Dropdown1;