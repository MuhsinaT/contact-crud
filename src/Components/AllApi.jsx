import axios from "axios";
const base_url="https://mdb-server-qmhl.onrender.com"

export const addContact =async(data) =>{
    return await axios.post(`${base_url}/contacts`, data)
  }

export const getContact=async()=>{
  return await axios.get(`${base_url}/contacts`)
}

export const deleteContact=async(id)=>{
  return await axios.delete(`${base_url}/contacts/${id}`)
}


export const updateContact = async (id, data) => {
  return await axios.put(`${base_url}/contacts/${id}`, data);
};