import React, { useState, useEffect } from 'react'
import axios from "axios"
import Swal from 'sweetalert2';
import { useParams,useNavigate } from 'react-router-dom'
import {
Form,
Button
} from 'react-bootstrap'


const Edit = () => {
  const [state, setState] = useState({})
  const [newData, setNewData] = useState({
    fullName: "",
    email: "",
    age: '',
    phoneNo: '',
  })
  const Navigate = useNavigate()
  useEffect(() => {
    getdata();
  }, []);
  const URL = "http://localhost:8000"
  const { id } = useParams()
  const { fullName, email, age, phoneNo } = state;

  const getdata = async () => {

    axios.get(`${URL}/getUser/${id}`).then((res) => {
      setState(res.data)
    })
  }


  const handleUpdateData =  (doc) => {
    let updateUser = { id: id, fullName: newData.fullName, email: newData.email, age: newData.age, phoneNo: newData.phoneNo }
     axios.put(`${URL}/updateUser`, updateUser)
      .then((res) => {
        Swal.fire({
          title: "Updated!",
          text: ` ${fullName} Your Account Successfully Updated !`,
          icon: "success",
          timer: 3000,
        });
        Navigate('/members')
      })
      .catch((err) => {
        Swal.fire(err, {
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<Link>Why do I have this issue?</Link>'
        })
      })
  }

  const handleChange = (e) => {
    setNewData(newData => ({ ...newData, [e.target.name]: e.target.value }))
  }
  return (
<>



  <h3 className='fw-bold text-center mt-2 '> Update Your Info Here </h3>
  <hr className='w-25 mx-auto '/>

    
    <div className='text-center mb-5 mt-0 '>

      <Form >
        <p>
          <Form.Label>Full Name</Form.Label><br />
          <Form.Control
          defaultValue={fullName}
           type="text" 
           name="fullName"
           onChange = {e=> handleChange(e)} 
             />
        </p>
        <p>
          <Form.Label>Email address</Form.Label><br />
          <Form.Control 
          defaultValue={email}
          type="email" 
          name="email" 
          onChange = {e=> handleChange(e)}
           />
        </p>
        <p>
          <Form.Label>Age</Form.Label><br />
          <Form.Control 
          defaultValue={age} 
          type="number" 
          name="age" 
          onChange = {e=> handleChange(e)}
           />
        </p>
        <p>
          <Form.Label>PhoneNo</Form.Label><br />
          <Form.Control 
          defaultValue={phoneNo}
          type="number" 
          name="phoneNo" 
          onChange = {e=> handleChange(e)}
            />
        </p>

        <p>
          <Button id="sub_btn" onClick={(doc) => handleUpdateData(doc)}   >Update Data</Button>
        </p>
      </Form>
    </div>
    </>
  )
}

export default Edit