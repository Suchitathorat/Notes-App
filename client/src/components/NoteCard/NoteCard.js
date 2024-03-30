import React from 'react'
import './NoteCard.css'
import DeleteIcon from './delete-icon.png'
import UpdateIcon from './edit-icon.png'
import axios from 'axios'
import toast from 'react-hot-toast'
import {Link} from 'react-router-dom'


function NoteCard({_id,title,content,category,loadNotes}) {

    const deleteNote=async()=>{
        const response=await axios.delete(`http://localhost:5000/notes/${_id}`)
        toast.success(response.data.message);
        loadNotes();

    }


  return (
    <div className='note-card'>
        <h3 className='note-card-title'>{title}</h3>
        <p className='note-card-content'>{content}</p>
        <span className='note-card-category'>{category}</span>

        <img src={DeleteIcon} 
        alt='delete-icon' 
        className='delete-icon'
        onClick={deleteNote}></img>

        <a href ={`/update/${_id}`}>
        <img src={UpdateIcon}
        alt='update-icon'
        className='update-icon'/>
        </a>
    </div>
  )
}

export default NoteCard