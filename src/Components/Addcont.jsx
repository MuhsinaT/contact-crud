import React, { useState, useEffect } from 'react';
import { getContact, deleteContact, updateContact } from './AllApi';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Addcont() {
  const [contact, setContact] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await getContact();
      if (res.status === 200) {
        setContact(res.data);
        getData()
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteContact(id);
      if (res.status === 200) {
        toast.success("Deletion successful");
        getData(); // Refresh the contact list
      }
    } catch (error) {
      toast.error("Deletion failed");
      console.error(error);
    }
  };

  const handleEdit = (contactData) => {
    setSelectedContact(contactData);
    setShowEdit(true);
  };

  const handleUpdate = async () => {
    const { contactId, Name, Email, phoneNumber } = selectedContact;
    if (!contactId || !Name || !Email || !phoneNumber) {
      toast.warning("Please enter valid input");
      return;
    }
    try {
      const res = await updateContact(contactId, selectedContact);
      if (res.status === 200) {
        toast.success("Update Successful");
        setShowEdit(false);
        getData(); // Refresh the contact list
      } else {
        toast.error("Update Failed");
      }
    } catch (error) {
      toast.error("Update Failed");
      console.error(error);
    }
  };

  return (
    <>
      <div className='add-contact  ' >
        {contact.length > 0 ? (
          <div className='table-responsive'>
            <table className='table table-border-1' >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {contact.map(item => (
                  <tr key={item.contactId}>
                    <td>{item.contactId}</td>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item.contactId)}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash" />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleEdit(item)}
                        className="btn btn-primary"
                      >
                        <i className="fa-solid fa-pen-to-square" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2>No Contacts Available</h2>
        )}
      </div>

      {/* Edit Contact Modal */}
      {selectedContact && (
        <Modal
          show={showEdit}
          onHide={() => setShowEdit(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel controlId="contact-id" label="Id" className="mb-3">
              <Form.Control
                type="number"
                placeholder="Id"
                value={selectedContact.contactId}
                readOnly
              />
            </FloatingLabel>
            <FloatingLabel controlId="name" label="Name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                value={selectedContact.Name}
                onChange={(e) => setSelectedContact({ ...selectedContact, Name: e.target.value })}
              />
            </FloatingLabel>
            <FloatingLabel controlId="email" label="Email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                value={selectedContact.Email}
                onChange={(e) => setSelectedContact({ ...selectedContact, Email: e.target.value })}
              />
            </FloatingLabel>
            <FloatingLabel controlId="phoneNumber" label="Phone Number" className="mb-3">
              <Form.Control
                type="number"
                placeholder="Phone Number"
                value={selectedContact.phoneNumber}
                onChange={(e) => setSelectedContact({ ...selectedContact, phoneNumber: e.target.value })}
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEdit(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Addcont;
