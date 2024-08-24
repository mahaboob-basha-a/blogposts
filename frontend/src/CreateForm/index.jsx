import React, { useContext, useState } from 'react'
import './index.css'
import { ModalContext } from '../context'
import { toast} from 'react-toastify';
import axios from 'axios';

const CreateForm = () => {
    const {closeModal} = useContext(ModalContext)
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const createPost = async e =>{
        e.preventDefault()
        if(title === '' && title.trim() === '') return toast.error('Please Enter title')
        if(description === '' && description.trim() === '') return toast.error('Please Enter Description')
        const res = await axios.post('http://localhost:5000/posts',{title,description})
        if(res.status === 201){
            setTitle('')
            setDescription('')
            closeModal()
            return toast.success(res.data.message)
        }else{
            return toast.error('Post creation failed')
        }
    }
  return (
    <>
        <div className='create-form'>
            <div className='form-card'>
                <form>
                    <input value={title} onChange={e=>setTitle(e.target.value)} type='text' placeholder='Title' />
                    <input value={description} onChange={e=>setDescription(e.target.value)} type='text' placeholder='Description' />
                    <button onClick={createPost}>Create Post</button>
                </form>
                <button onClick={closeModal} className='close-button'>X</button>
            </div>
        </div>
    </>
  )
}

export default CreateForm