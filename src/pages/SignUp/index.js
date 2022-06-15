import React, { useState } from 'react'
import axios from "axios"
import {Link , useNavigate} from 'react-router-dom'
const Index = () => {
  const [state,setState] = useState({
    fullName: "",
    email:"",
    age:"",
    phoneNo:""
  }) 
  const navigate = useNavigate();
  const URL = "http://localhost:8000"
   
  const handleChange = (e)=>{
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
}

const handleSubmit = (e) =>{
  e.preventDefault()
  let userForm = { ...state }
    console.log(userForm)

    axios.post(`${URL}/createUser`, userForm)
      .then((res) => {
        console.log("A new user has been successfully added.")
         ;
      })
      .catch(err => {
        console.error(err)
      })
      navigate('/members')
 } 
  
  return (
<div className="text-center m-5-auto py-3">
            <h2 className='fw-bold '>Join Us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Full Name</label><br/>
                    <input type="text" name="fullName" onChange={handleChange} required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" onChange={handleChange} required />
                </p>
                <p>
                    <label>Age</label><br/>
                    <input type="number" name="age" onChange={handleChange} required />
                </p>
                <p>
                    <label>PhoneNo</label><br/>
                    <input type="number" name="phoneNo" onChange={handleChange} required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <Link to="/"  >terms of service</Link></span>.
                </p>
                <p>
                    <button id="sub_btn"  type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
  )
}

export default Index;
