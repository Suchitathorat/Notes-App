import React, { useState } from 'react'
import './NewNote.css'
import axios from 'axios';
import toast from 'react-hot-toast';

function NewNote() {
  const[title,setTitle]=useState('');
  const[content,setContent]=useState('');
  const[category,setCategory]=useState('');

  const addNote = async() =>{
    const response =await axios.post(`http://localhost:5000/notes`,
    {
      title:title,
      category:category,
      content: content,

    })

    toast.success(response.data.message)
    setTitle('');
    setCategory('');
    setContent('')

  }


  return (
    <div>
       <h1 className='App-header'> NewNote</h1>

       <form className='form-new-note'>
        {/* for title */}
        <input className='input-title'
        type='input' 
        placeholder='Title' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}/>


        {/* for category */}
        <select className='input-category'
        value={category} 
        onChange={(e)=>{
          setCategory(e.target.value)
        }}>
          <option vlaue=''>Select category</option>
          <option value='general'>General</option>
          <option value='work'>Work</option>
          <option value='personal'>Personal</option>
          <option value='learning'>Learning</option>
          <option value='other'>Other</option>
        </select>


        {/* for content */}
        <input  className='input-content'
        type='text' 
        placeholder='Content' 
        value={content}
        onChange={(e)=>{
          setContent(e.target.value)
        }}/>

        {/* button to add note */}
        <button className='save-btn'
        type='button' 
        onClick={addNote}>
          Save
        </button>

       </form>  


    </div>
  )
}

export default NewNote