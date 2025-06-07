import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div>
      <p>this is from contents</p>
      <Link to="/">
      <Button>Go Home</Button>
      </Link>
    </div>
  )
}

export default Content;
