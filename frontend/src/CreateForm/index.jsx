import React, { useContext, useState } from 'react'
import { ModalContext } from '../context'
import { toast} from 'react-toastify';
import axios from 'axios';
import './index.css'
import Loader from '../Loader';

const CreateForm = () => {
    const {closeModal} = useContext(ModalContext)
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [loader,setLoader] = useState(false)

    const createPost = async e =>{
        e.preventDefault()
        if(title === '' && title.trim() === '') return toast.error('Please Enter title')
        if(description === '' && description.trim() === '') return toast.error('Please Enter Description')
        setLoader(true)
        const res = await axios.post('https://blogposts-c5th.onrender.com/posts',{title,description})
        if(res.status === 201){
            setTitle('')
            setDescription('')
            closeModal()
            setLoader(false)
            return toast.success(res.data.message)
        }else{
            setLoader(false)
            return toast.error('Post creation failed')
        }
    }
  return (
    <>
        <div className='create-form'>
            {loader ? <Loader /> : 
            <div className='form-card'>
                <form>
                    <input value={title} onChange={e=>setTitle(e.target.value)} type='text' placeholder='Title' />
                    <input value={description} onChange={e=>setDescription(e.target.value)} type='text' placeholder='Description' />
                    <button onClick={createPost}>Create Post</button>
                </form>
                <button onClick={closeModal} className='close-button'>X</button>
            </div>
            }
        </div>
    </>
  )
}

export default CreateForm