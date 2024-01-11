import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import FormTable from './FormTable';
import { addFormData } from '../slices/tableSlice';
import { Link } from 'react-router-dom';
import './Form.css'

const Form = () => {
    const dispatch = useDispatch();
    const [formData, setFormaData] = useState({
      name: '',
      email:'',
      rating:'',
      feedback:'',
    })

    const handleChange = (event) => {
      const {name, value} = event.target;
      setFormaData({
        ...formData, [name]:value
      })
    }

    const handleCancelClick = () => {
      setFormaData({
        name: '',
        email:'',
        rating:'',
        feedback:'',})
    }

    const dispatchFunction = (e) => {
      e.preventDefault();
      console.log("printing formData", formData)
      dispatch(addFormData(formData));
      setFormaData({
        name: '',
        email: '',
        rating: '',
        feedback: '',
      })
    }



  return (
    <div className="App input-container">
    <form >
    <label>
        <p>Name</p>
        <input type="text" name='name' value={formData.name} onChange={handleChange}
              className='text-black'
            />
    </label>
      
    <label>
        <p>Email</p>
        <input type="text" name='email' value={formData.email} onChange={handleChange}
              className='text-black'
            />
    </label>
    <label>
        <p>Rating</p>
        <input type="number" name='rating' value={formData.rating} onChange={handleChange}
              className='text-black'
            />
    </label>
    <label>
        <p>Feedback</p>
        <textarea id="feedback" value={formData.feedback} name="feedback" rows="5" placeholder="Tell me what you think..." onChange={handleChange}></textarea>
    </label>
    <div>
    <button onClick={handleCancelClick}>Cancel</button>
    <button type="submit" onClick={dispatchFunction}>Submit</button>
    </div>     
    </form>

    <FormTable/>
    <Link to={"/formpage"}>
      <button >View in next page</button>
      </Link>
    </div>
  )
}

export default Form