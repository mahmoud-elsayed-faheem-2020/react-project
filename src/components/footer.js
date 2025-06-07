import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <h1>this is footer</h1>
      <Link to="/">
      <Button>Go Home</Button>
      </Link>
    </div>
  )
}
export default Footer ;
