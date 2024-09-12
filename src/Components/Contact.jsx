import React from 'react'
import './Contact.css'
import Add from './Add'
import Category from './Category'

function contact() {
  return (
    <>

    <div className="contact">
        <div className="add-contact">
        <Add/>
        </div>

        <div className="contact-category">
        <Category/>

        </div>
    </div>
    
    
    
    </>
  )
}

export default contact
