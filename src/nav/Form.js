import React from 'react';
import {Form,FormControl ,Button} from 'react-bootstrap';
import {FormList} from './navList';


function Forms(props) {
    return(
        <Form className="d-flex">

        

        {FormList.map((Data) => {
          return (
        
          <FormControl 
          key={Data.id}
          type={Data.type}
          placeholder={Data.placeholder}
          className={Data.className}
          aria-label={Data.ariaLabel} />

);
                 })}
                 
                

                 
        <Button variant={props.btnColor}>{props.btnName}</Button>
        </Form>
    )
}

export default Forms;