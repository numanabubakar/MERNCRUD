import React from 'react'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import NavBar from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Members from './Members';
import Edit from './Members/Edit.js';
import SignUp from './SignUp';
import NoPage from './NoPage'
import { ToastContainer } from "react-toastify";
const Index = () => {
  return (
    <>
<BrowserRouter>

<NavBar />
<main>
<Routes> 
<Route path='/' element={ <Home />}   />
<Route path='/members' element={ <Members />}   />
<Route path='/signup' element={ <SignUp />}   />
<Route path={'/edit/:id'} element={ <Edit />}   />
<Route path='*' element={ <NoPage />}   />

    
</Routes>


</main>




<Footer />
</BrowserRouter>
<ToastContainer />
    </>
  )
}

export default Index