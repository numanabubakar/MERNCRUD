import React, { useState, useEffect } from 'react'
import axios from "axios"
import Swal from 'sweetalert2';
import { useParams,useNavigate } from 'react-router-dom'
import {
Form,
Button
} from 'react-bootstrap'
import validator from 'validator' 



const Edit = () => {
  const [state, setState] = useState({
    fullName: "" ,
    email: "",
    age: '',
    phoneNo: '',
  })

  const Navigate = useNavigate()
  const URL = "https://merncrudbynuman.herokuapp.com"
  const { id } = useParams()
  const { fullName, email, age, phoneNo } = state;
  
  const getdata = async () => {
    
    axios.get(`${URL}/getUser/${id}`).then((res) => {
      setState(res.data)
    })
  }
  useEffect(() => {
    getdata();
  }, []);


  const handleUpdateData =  (doc) => {


    const isValidPhoneNumber = validator.isMobilePhone(state.phoneNo)
    if(!isValidPhoneNumber){
      Swal.fire({
              icon: 'error',
              title: 'Phone Number Invalid',
              text: 'Your Phone Number Must be Upto 5 digits',
              timer: 3000,
            })
    }
    else{

      
      let updateUser = { id: id, fullName: fullName, email: email, age: age, phoneNo: phoneNo }
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
  }

  const handleChange = (e) => {
    setState(state => ({ ...state, [e.target.name]: e.target.value }))
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