import React from 'react'
import { Row ,Col} from 'react-bootstrap';
// import { useState } from 'react';
import Addcont from './Addcont';
import Addcat from './Addcat';
import Add from './Add';

function Category() {
  // const [contacts, setContacts] = useState([]);
  return (
    <>
   <Row>


        <div className="category d-flex">
    
    
       <Col lg={10}  md={10} sm={12} style={{border:'1px solid',margin:'40px 80px'}}>
           <Addcont   />
       </Col>



       {/* <Col md={4} >
          <Addcat/>
       </Col> */}
    
    
        </div>
   </Row>
    
    
    </>
  )
}

export default Category
