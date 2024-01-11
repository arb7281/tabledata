import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {

  // const {table} = useSelector((state)=> state.table);
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
      // dispatch(updateProfile(formData, user))
    }




  return (
    <div className="App">
      <form onSubmit={dispatchFunction}>
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
          <input type="text" name='rating' value={formData.rating} onChange={handleChange}
                className='text-black'
              />
      </label>
      <label>
          <p>Feedback</p>
          <textarea id="feedback" value={formData.feedback} name="feedback" rows="5" placeholder="Tell me what you think..." onChange={handleChange}></textarea>
      </label>
      <div>
      <button onClick={handleCancelClick}>Cancel</button>
      <button type="submit">Submit</button>
      </div>
      
      </form>
    </div>
  );
}

export default App;
