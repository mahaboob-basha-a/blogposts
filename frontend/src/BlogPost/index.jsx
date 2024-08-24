import React, { useCallback, useEffect, useState } from 'react'
import './index.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const BlogPost = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [isEdit,setIsEdit] = useState(false)
    
    const onEditPost = ()=>{
        setIsEdit(true)
    }

    const onSavePost = async e=>{
        e.preventDefault()
        if(title === '' && title.trim() === '') return toast.error('Please Enter title')
        if(description === '' && description.trim() === '') return toast.error('Please Enter Description')
            const res = await axios.put(`http://localhost:5000/posts/${id}`,{title,description})
        if(res.status === 200){
            setTitle('')
            setDescription('')
            setIsEdit(false)
            return toast.success(res.data.message)
        }else{
            return toast.error('Post updation failed')
        }
    }

    const onDeletePost = async()=>{
        const res = await axios.delete(`http://localhost:5000/posts/${id}`)
        if(res.status === 200){
            toast.warning(res.data.message)
            return navigate('/')
        }else{
            return toast.warning('Delete post failed')
        }
    }

    const singlePostData = useCallback(async ()=>{
        const res = await axios.get(`http://localhost:5000/posts/${id}`)
        if(res.status === 200){
            const postDetails = res.data
            if(postDetails.data){
                setTitle(postDetails.data.title)
                setDescription(postDetails.data.description)
            }else{
                toast.error('Invalid post details')
                return navigate('/')
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id,isEdit])
    useEffect(()=>{
        singlePostData()
    },[singlePostData])
  return (
    <div className='single-post-details'>
        {isEdit ? <div className='post-content'>
            <input value={title} onChange={e=>setTitle(e.target.value)} className='title-input' type='text' placeholder='Title' />
            <input value={description} onChange={e=>setDescription(e.target.value)}
            className='description-input' type='text' placeholder='Description' />
            <div className='post-bottom'>
                <button onClick={onSavePost}>save</button>
                <button onClick={onDeletePost}>Delete</button>
            </div>
        </div> :
        <div className='post-content'>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='post-bottom'>
                <button onClick={onEditPost}>Edit</button>
                <button onClick={onDeletePost}>Delete</button>
            </div>
        </div>
        }
    </div>
  )
}

export default BlogPost