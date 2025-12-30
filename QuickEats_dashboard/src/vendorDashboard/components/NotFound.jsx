import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div className='errorSection'>
    <Link to="/" style={{ textDecoration: 'none' }}>
        <button style={{ 
            backgroundColor: 'blue', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px', 
            fontSize: '1rem', 
            cursor: 'pointer' ,
            borderRadius:'10px',
            maxWidth:'300px'
          }}>Go back</button>
    </Link>
        <h1>404</h1>
        <div>Page Not found</div>

    </div>
    </>
    
  )
}

export default NotFound