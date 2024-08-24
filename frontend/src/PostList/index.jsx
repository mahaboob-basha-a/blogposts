import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const PostList = (prop) => {
  const {id,title,description} = prop
  return (
        <div className="content">
          <Link to={`/posts/${id}`}>
            <h2>{title}</h2>
            <p>{description}</p>
            </Link>
        </div>
  )
}

export default PostList