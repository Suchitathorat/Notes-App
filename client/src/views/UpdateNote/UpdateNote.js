import React, { useEffect, useState } from 'react'
import './Update.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function NewNote() {
  
  const[title,setTitle]=useState('');
  const[content,setContent]=useState('');
  const[category,setCategory]=useState('');

  const loadNote=async(id)=>{
    if(!id) return

    const response=await axios.get(`http://localhost:5000/notes/${id}`)

    setTitle(response.data.data.title);
    setCategory(response.data.data.category);
    setContent(response.data.data.content);

  }

  const updateNote =async ()=>{
    const response =await axios.put(`http://localhost:5000/notes/${id}`,{
      title:title,
      category:category,
      content:content,
    })
   
    toast.success(response.data.message)

    window.location.href='/'
  }

  const {id}=useParams();

  useEffect(()=>{
    loadNote(id)
  },[id])

  

  return (
    <div>
       <h1 className='App-header'> Update Note</h1>

       <form className='form-new-note'>
        {/* for id */}
        <input
        type='text'
        className='input-id'
        value={id}disabled/>



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
        onClick={updateNote}>
          Update
        </button>

       </form>  


    </div>
  )
}

export default NewNote