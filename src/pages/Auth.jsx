import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import login from '../assets/login.png'
import logo2 from '../assets/logo2.png'

function Auth({ insideRegister }) {
  return (
    <div style={{ width: '100%' }} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75'>
        <Link to={'/'} style={{ textDecoration: 'none' }}><i class="fa-solid fa-arrow-left fa-beat"></i><b>Back To Home</b></Link>
        <div className='card shadow p-5 ' style={{ backgroundColor: '#FF922C' }}>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <img className='w-100' src={login} alt="" />
            </div>
            <div className='col-lg-6'>
              <h1 className='fw-bolder text-light mt-2'>
                <img className='img-fluid' style={{ height: '100px', width: '100px' }} src={logo2} alt="" />
                <span style={{color:'#FF922C',wordWrap: 'break-word'}}>Eats</span><span style={{color:'#FF004D',wordWrap: 'break-word'}}>Explorer</span>

              </h1>
              {/* condition rendering*/}
              <h5 className='fw-bolder text-light mt-2'>
                Sign {insideRegister ? 'Up' : 'In'} to your Account
              </h5>
              <Form>
                {
                  insideRegister &&
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter User Name" />
                  </Form.Group>
                }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {
                  insideRegister ?
                    <div>
                      <button className='btn btn-light mb-2'>Register</button>
                      <p>Allready have an Account? Click here to <Link to={'/login'} className='text-danger'>Login</Link></p>
                    </div> :
                    <div>
                      <button className='btn btn-light mb-2'>Login  </button>
                      <p>If yoy are a New User? Click here to <Link to={'/register'} className='text-danger'>Register</Link></p>
                    </div>
                }
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Auth