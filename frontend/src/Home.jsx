import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from './context'
import axios from 'axios'
import PostList from './PostList'

const Home = () => {
    const {closeModal} = useContext(ModalContext)
    const [blogList,setBlogList] = useState('')
    const getPostList = async ()=>{
    const res = await axios.get('http://localhost:5000/posts')
    if(res.status === 200){
      const data = res.data.data
      setBlogList(data)
    }
  }
  useEffect(()=>{
    getPostList()
  },[closeModal])
  return (
    <>
        <h1>Blog Posts</h1>
        {blogList.length > 0 ?<>
        {blogList.map(eachPost=>{
          const {id,title,description} = eachPost
          return <PostList key={id} id={id} title={title} description={description} />
        })}
        </>
         : ''}
    </>
  )
}

export default Home