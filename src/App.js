import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';
import AddProduct from './component/AddProduct';
import Home from './component/Home'; // Correct import path
import UpdateProduct from './component/UpdateProduct';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/editProduct/:id' element={<UpdateProduct />} />
      </Routes>
    </>
  );
}

export default App;
