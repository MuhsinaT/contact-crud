import React from 'react'
import './Add.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addContact } from './AllApi';
import { toast } from 'react-toastify';




function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
   setContact( {
    contactId:"",Name:"",Email:"",phoneNumber:""

   })
  };
  const handleShow = () => setShow(true);

const [contact,setContact]=useState({
  contactId:"",Name:"",Email:"",phoneNumber:""
})
console.log(contact);


const handleUpload=async()=>{
  console.log(contact);
  const{contactId,Name,Email,phoneNumber}=contact
  if(!contactId || !Name || !Email || !phoneNumber){
  toast.warning("please enter valid input")
  }
  else{
    const res=await addContact(contact)
    console.log(res);
    console.log(contact);
    if(res.status==201){
      toast.success("Upload SuccessFull!!")
      handleClose()
    }
    else{
      toast.error("Upload Failed!!")
    }
  
    
  }
  
}


  return (
    <>
    <div className="add">
        <button className="add-btn"  onClick={handleShow}>Add Contact</button>
    </div>
    

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Save Your Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="contact id" label="Id" className="mb-3" >
        <Form.Control type="number" placeholder="1"  onChange={(e)=>{setContact({...contact,contactId:e.target.value})}}/>
        </FloatingLabel>


        <FloatingLabel controlId="title" label="Name" className="mb-3" >
        <Form.Control type="text" placeholder="1" onChange={(e)=>{setContact({...contact,Name:e.target.value})}} />
        </FloatingLabel>

        
        <FloatingLabel controlId="contact mail" label="Email" className="mb-3" >
        <Form.Control type="Email" placeholder="1"  onChange={(e)=>{setContact({...contact,Email:e.target.value})}}/>
        </FloatingLabel>

          
        <FloatingLabel controlId="contact number" label="Phone Number" className="mb-3" >
        <Form.Control type="number" placeholder="1"  onChange={(e)=>{setContact({...contact,phoneNumber:e.target.value})}}/>
        </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload} >Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
