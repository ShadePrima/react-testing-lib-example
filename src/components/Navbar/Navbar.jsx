import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='/' data-testid='main-link'>
        <h3>Main</h3>
      </Link>
      <Link to='/about' data-testid='about-link'>
        <h3>about</h3>
      </Link>
      <Link to='/users' data-testid='users-link'>
        <h3>users</h3>
      </Link>
    </div>
  )
}

export default Navbar
