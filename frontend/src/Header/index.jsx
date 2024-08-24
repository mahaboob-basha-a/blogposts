import React, { useContext } from 'react'
import './index.css'
import { ModalContext } from '../context'
import { Link } from 'react-router-dom'

const Header = () => {
    const {openModal} = useContext(ModalContext)
  return (
    <header className='header'>
        <h1>B</h1>
        <Link to='/'>Home</Link>
        <button onClick={openModal}>+ Create New Post</button>
    </header>
  )
}

export default Header