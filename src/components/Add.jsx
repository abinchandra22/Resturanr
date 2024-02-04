import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import gallery from '../assets/gallery.webp'

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} style={{ textDecoration: 'none' }} className='btn btn-link text-warning d-flex align-items-center fw-bolder'>
        <i style={{ height: '50px' }} className='fa-solig fa-plus fa-2x me-2'></i>Add Project
      </button>

    <Modal centered size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='bg-dark' closeButton >
          <Modal.Title className='bg-dark'>Enter the details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-4'>
              <label className='w-100 d-flex align-items-center flex-column justify-content-center'>
                <img height={'200px'} width={'200px'} className='img-fluid' src={gallery} alt="project uplode pick" />
              </label>
            </div>
            <div className='col-lg-8'>
              <div className='mb-3'>
                <input className='border rount p-2 w-100' type="text" placeholder='Restaurent Name'/>
                 </div>

                 <div className='mb-3'>
                <input className='border rount p-2 w-100' type="text" placeholder='Place'/>
                 </div>

                 <div className='mb-3'>
                <input className='border rount p-2 w-100' type="text" placeholder='Special Foods'/>
                 </div>


                 <div className='mb-3'>
                <input className='border rount p-2 w-100' type="text" placeholder='Restaurent Instagram Link'/>
                 </div>

                 <div className='mb-3'>
                <input className='border rount p-2 w-100' type="text" placeholder='Restaurent Website Link'/>
                 </div>

                 <div className='mb-3'>
                <input className='border rount p-2 w-100' type="text" placeholder='Description about Your Restaurent'/>
                 </div>

                 <div className='mb-3'>
                <input className='border rount p-2 w-100' type="text" placeholder='Enter your PhNo'/>
                 </div>


            </div>
          </div>

          <div className='row mt-5'>
          <div className='col-lg-4'>
              <label className='w-100 d-flex align-items-center flex-column justify-content-center'>
                <img height={'200px'} width={'200px'} className='img-fluid' src={gallery} alt="project uplode pick" />
              </label>
            </div>

            <div className='col-lg-4'>
              <label className='w-100 d-flex align-items-center flex-column justify-content-center'>
                <img height={'200px'} width={'200px'} className='img-fluid' src={gallery} alt="project uplode pick" />
              </label>
            </div>

            <div className='col-lg-4'>
              <label className='w-100 d-flex align-items-center flex-column justify-content-center'>
                <img height={'200px'} width={'200px'} className='img-fluid' src={gallery} alt="project uplode pick" />
              </label>
            </div>
          </div>
        </Modal.Body  >
        <Modal.Footer className='bg-dark'>
          <Button variant="primary" className='bg-danger' onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='bg-success'>Update</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add