import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from './context'
import axios from 'axios'
import PostList from './PostList'
import Loader from './Loader'

const Home = () => {
    const {closeModal} = useContext(ModalContext)
    const [blogList,setBlogList] = useState('')
    const [loader,setLoader] = useState(false)
    const getPostList = async ()=>{
        setLoader(true)
    const res = await axios.get('https://blogposts-c5th.onrender.com/posts')
    if(res.status === 200){
      const data = res.data.data
      setBlogList(data)
      setLoader(false)
    }
  }
  useEffect(()=>{
    getPostList()
  },[closeModal])
  return (
    <>
        <h1>Blog Posts</h1>
        {loader ? <Loader /> : <>
        {blogList.length > 0 ?<>
        {blogList.map(eachPost=>{
          const {id,title,description} = eachPost
          return <PostList key={id} id={id} title={title} description={description} />
        })}
        </>
         : <h2>No Posts Found</h2>}
         </>}
    </>
  )
}

export default Home