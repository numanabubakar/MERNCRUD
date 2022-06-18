import React from 'react'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import NavBar from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Members from './Members';
import SignUp from './SignUp';

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

    
</Routes>


</main>




<Footer />
</BrowserRouter>
    </>
  )
}

export default Index