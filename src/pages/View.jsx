import React from 'react'
import Header from '../components/Header'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function view() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Header></Header>
      <div style={{  marginTop: '150px' }} className='w-100 d-flex justify-content-center align-items-center'>
        <div className='container'>
          <div className='row align-item-cem=nter'>
            <div className='col-lg-4'>
              <img className='img-fluid' src="https://i.postimg.cc/Y0cWqN8s/rest.jpg" alt="landing" />

            </div>

            <div className='col-lg-2'>  </div>

            <div className='col-lg-6'>
              <h2 className='fw-bolder text-warning'>Restaurent Name</h2>
              <p>Place : <span className='fw-bolder text-danger'> Kollam</span></p>
              <p>Special Food : <span className='fw-bolder text-danger'> Sandwhich,appam</span></p>
              <p>PhNo : <span className='fw-bolder text-danger'>7356351845</span></p>

              <p>Description : <span className='fw-bolder'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum laborum temporibus numquam architecto dolorem iure debitis cumque soluta aspernatur ut qui sequi nesciunt inventore nihil maxime reiciendis, adipisci quis recusandae?</span></p>
              <div className="mt-1">
                <a href="" target='_blank' className='text-dark ms-5 me-3'><i class="fa-brands fa-square-instagram fa-2x"></i></a>
                <a href="" target='_blank' className='text-dark'><i class="fa-solid fa-link fa-2x"></i></a>
                <a href="" target='_blank' className='text-dark ms-3 '><i class="fa-solid fa-location-dot fa-2x"></i></a>
              </div>
            </div>
          </div>

          <div className='row align-item-cem=nter  mt-5 container align-items-center me-5 ms-5'>

            <div className='col-lg-4'>
              <img className='img-fluid' src="https://i.postimg.cc/Y0cWqN8s/rest.jpg" alt="landing" />
            </div>

            <div className='col-lg-4'>
              <img className='img-fluid' src="https://i.postimg.cc/Y0cWqN8s/rest.jpg" alt="landing" />
            </div>

            <div className='col-lg-4'>
              <img className='img-fluid' src="https://i.postimg.cc/Y0cWqN8s/rest.jpg" alt="landing" />
            </div>
          </div>
          {/* comments */}
          
        </div>
      </div>
      <div className='container d-flex justify-content-center align-items-center w-100'>
          <button onClick={handleShow} style={{ textDecoration: 'none' }} className='btn btn-link  d-flex align-items-center fw-bolder'>
       Add Comments
      </button>
      <Modal centered size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='bg-dark' closeButton >
          <Modal.Title className='bg-dark'>Comment Box</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div >
            
            <div >
              <div className='mb-3'>
                <input className='border rount p-2 w-100' type="text" placeholder='Write Comment here..'/>
                 </div>

          </div>
          <div  className='container d-flex justify-content-center align-items-center w-100'>
             View comment Here
          </div>
         
 </div>
        </Modal.Body  >
        <Modal.Footer className='bg-dark'>
          <Button variant="primary" className='bg-danger' onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='bg-success'>Save</Button>
        </Modal.Footer>
      </Modal>

          </div>
    </div>
  )
}

export default view