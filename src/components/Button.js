import React from 'react'
import './dashboard.css';
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div>
<Link to="/images" ><button className='dash-btn'>View</button>
</Link>
    </div>
  )
}

export default Button