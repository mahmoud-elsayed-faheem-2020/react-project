import React from 'react'
import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <div>
      <h1 className='pt-2'>Page Not Found please Go Home</h1>
      <Link className='btn btn-danger' to="/">Go Home</Link>
    </div>
  )
}

export default Errorpage;
