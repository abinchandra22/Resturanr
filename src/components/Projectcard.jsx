import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Projectcard() {
  return (
    <div>
      <Link to={'/view'} style={{textDecoration:'none'}}>
            <Card   className='shadow mb-5 btn' style={{ width: '18rem' }}>
        <Card.Img  variant="top" src="https://i.postimg.cc/Y0cWqN8s/rest.jpg"/>
        <Card.Body className='bg-white'>
          <Card.Title className='bg-white '>  Restaurent Name</Card.Title>
        </Card.Body>
      </Card>
</Link>
    </div>
  )
}

export default Projectcard