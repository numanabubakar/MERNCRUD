import React, { useState, useEffect } from 'react'
import { Circles } from 'react-loader-spinner'
import Swal from 'sweetalert2';
import axios from "axios"
import { FaRegEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
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
        Swal.fire(err, {
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<Link>Why do I have this issue?</Link>'
        })
      })
  }, [])


  const showDeleteModal = (doc) => {
    const { _id } = doc
    Swal.fire({
      title: `Are you sure? ${doc.fullName} `,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.isConfirmed) {

        axios.delete(`${URL}/deleteUser/${_id}`)
          .then((res) => {

            Swal.fire({
              title: "Deleted!",
              text: ` ${doc.fullName} Your Account Successfully Deleted !`,
              icon: "success",
              timer: 3000,
            });
            let newArray = documents.filter((doc) => {
              return _id !== doc._id;
            });
            setDocuments(newArray);
          }).catch((err) => {
            Swal.fire(err, {
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<Link>Why do I have this issue?</Link>'
            })
          })

      }
    })
  };


  return (


    <div className='container mt-3 '>

      <h1 className='text-center pt-3 fw-bold ' >OUR MEMBER LIST</h1>
      <hr className='mx-auto w-25 fw-bold '/>
      <div className='scrollme'>
        <table className="table table-hover table-responsive text-center table-info table-striped responsive">
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

                <th scope='row' > {i + 1} </th>
                <td> {doc.fullName}</td>
                <td> {doc.email}</td>
                <td> {doc.age}</td>
                <td> {doc.phoneNo}</td>
                <td > <button className='btn text-danger mx-2' onClick={() => { showDeleteModal(doc) }}>
                  <h4><TiUserDeleteOutline /></h4>
                </button>
                  <Link to={`/edit/${doc._id}`}> <button type="button" className='btn text-primary ' > <h5><FaRegEdit /> </h5>    </button> </Link>
                </td>

              </tr>
            })}

          </tbody>
        </table>
      </div>


      {isLoading ? '' : (<div className='mYclass'>
        <Circles
          height="100"
          width="100"
          color='#016170'
          ariaLabel='loading'
          text-align="center"
        />
      </div>)}



    </div>
  );
}

export default Index;