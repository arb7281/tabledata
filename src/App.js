import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import FormTable from './component/FormTable';
import { addFormData } from './slices/tableSlice';
import { Routes, Route, Link } from "react-router-dom";
import Form from './component/Form';
// import FormTable from './component/FormTable';

function App() {



  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/formpage' element={<FormTable/>}/>
    </Routes>
    </div>
  );
}

export default App;
