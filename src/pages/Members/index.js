import React, { useState , useEffect} from 'react'
import { Circles } from  'react-loader-spinner'
import axios from "axios"
import { FaRegEdit } from 'react-icons/fa';
import { TiUserDeleteOutline } from 'react-icons/ti';
const Index = () => {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const URL = "http://localhost:8000"
  

  useEffect(() => {
    axios.get(`${URL}/getUsers`)
      .then((res) => {
        setDocuments(res.data)
setIsLoading(true)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  const handleDelete = (doc) => {
    const { _id } = doc;

    console.log(_id);
    axios.delete(`${URL}/deleteUser/${_id}`)
      .then((res) => {
        console.log(res.data)
        setDocuments(res.data)
      }).catch((err) => {
        console.error(err)
      })
    }
    

   

  return (

    
    <div className='container'>
    
    <h1 className='text-center py-3 '>OUR MEMBER LIST</h1>
    <table className="table table-hover text-center table-info table-striped">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Contact No</th>
      <th scope="col">Action</th>
    </tr>
  </thead>

  
  <tbody>
    {documents.map((doc, i) => {
      return <tr key={i}>
      
      <th scope='row' > {i} </th>
      <td> {doc.fullName}</td>
      <td> {doc.email}</td>
      <td> {doc.age}</td>
      <td> {doc.phoneNo}</td>
      <td > <button className='btn text-danger mx-2' onClick={() => { handleDelete(doc)}}>
        <h4><TiUserDeleteOutline /></h4>
      </button>
      <button type="button" className='btn text-primary ' data-bs-toggle="modal" data-bs-target="#exampleModal"  > <h5><FaRegEdit /> </h5> </button>
      </td>
    
      </tr>
    })}
    
  </tbody>
</table>

    {isLoading ? '' : (<Circles
        height="100"
        width="100"
        className='text-center mt-5'
        color='#016170'
        ariaLabel='loading'
        text-align="center"
        
        
      />) }

      
          
        </div>
  );
}

export default Index;