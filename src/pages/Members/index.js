import React, { useState, useEffect } from 'react'
import { Circles } from 'react-loader-spinner'
import axios from "axios"
import { FaRegEdit } from 'react-icons/fa';
import { TiUserDeleteOutline } from 'react-icons/ti';
const Index = () => {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updateModalShow, setUpdateModalShow] = useState(false);
  
  const [getData, setGetData] = useState({})
  const [newData, setNewData] = useState({
    fullName: "",
    email: "",
    age: "",
    phoneNo: ""
  });


  const handleChange = (e) => {
    console.log(newData)
    setNewData((s) => ({ ...s, [e.target.name]: e.target.value }));
  }


  const URL = "http://localhost:8000"


  useEffect(() => {
    axios.get(`${URL}/getUsers`)
      .then((res) => {
        setDocuments(res.data)
        // console.log(res.data);
        setIsLoading(true)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const handleUpdate = (doc) => {
    console.log(doc);
    const updateUser = {id: doc._id ,fullname: newData.fullName , email : newData.email, age: newData.age , phoneNo: newData.phoneNo  }
    console.log(newData);
        axios.put(`${URL}/updateUser`, updateUser)
          .then((res) => {
            console.log("message from server", res.data)

          })
          .catch((err) => {
            console.error(err)
    }) 
  }
  const handleUpdateModel = (doc) => {
    setUpdateModalShow(true);
    console.log(doc);
    setGetData(doc)

  }

  const UpdateModel = () => {

    return (
      <>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header ">
        <h5 className="modal-title " id="staticBackdropLabel">UPDATE YOUR DATA HERE</h5>
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body mx-auto">
      <form >
                <p>
                    <label>Full Name</label><br/>
                    <input type="text" name="fullName" value={getData.fullName} onChange={handleChange} required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" value={getData.email} onChange={handleChange} required />
                </p>
                <p>
                    <label>Age</label><br/>
                    <input type="number" name="age" value={getData.age} onChange={handleChange} required />
                </p>
                <p>
                    <label>PhoneNo</label><br/>
                    <input type="number" name="phoneNo" value={getData.phoneNo} onChange={handleChange} required />
                </p>
              
                
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger w-100 " data-bs-dismiss="modal" onClick={() => setUpdateModalShow(false)}>Close</button>
        <button type="button" className="btn " id="sub_btn" onClick={(doc)=> handleUpdate(doc)}>Update</button>
      </div>
    </div>
  </div>
</div>
</>
    );
  };


  const handleDelete = (doc) => {
    const { _id } = doc;

    console.log(doc);
    axios.delete(`${URL}/deleteUser/${_id}`)
      .then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.error(err)
      })
      let newArray = documents.filter((doc) => {
        return _id !== doc.id;
      })
      setDocuments(newArray)
  }




  return (


    <div className='container'>

      <h1 className='text-center py-3 fw-bold'>OUR MEMBER LIST</h1>
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
              <td > <button className='btn text-danger mx-2' onClick={() => { handleDelete(doc) }}>
                <h4><TiUserDeleteOutline /></h4>
              </button>
                <button type="button" className='btn text-primary ' data-bs-toggle="modal" data-bs-target="#staticBackdrop" variant="primary" onClick={() => handleUpdateModel(doc)} > <h5><FaRegEdit /> </h5> </button>
              </td>

            </tr>
          })}

        </tbody>
        <UpdateModel
          show={updateModalShow}
          onHide={() => setUpdateModalShow(false)}
        />
      </table>

      {isLoading ? '' : (<Circles
        height="100"
        width="100"
        className='text-center mt-5'
        color='#016170'
        ariaLabel='loading'
        text-align="center"
      />)}



    </div>
  );
}

export default Index;