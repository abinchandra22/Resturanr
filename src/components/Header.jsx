import React from 'react'
import logo2 from '../assets/logo2.png'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header({insideDashboard})
 {
  return (
  <div style={{backgroundColor:'black', width:'100%', position:'fixed',top:'0px',zIndex:'5'}}>
  <Navbar >
    <Container>
      <Link to={'/'} style={{textDecoration:'none'}}>
        <Navbar.Brand  >
            <h1 className='fw-bolder text-align mb-3'style={{wordWrap: 'break-word'}}>
   <img className='img-fluid' style={{height:'100px',width:'100px'}} src={logo2} alt="" />
   <span style={{color:'#FF922C',wordWrap: 'break-word'}}>Eats</span><span style={{color:'#FF004D',wordWrap: 'break-word'}}>Explorer</span>
   </h1>

        </Navbar.Brand>
      </Link>
       {
          insideDashboard&&
          <div  className='ms-auto  d-flex'>
            <button style={{textDecoration:'none',color:'#FF004D'}} className='btn btn-link  fw-bolder'>
           Logout
            </button>
          </div>
        }
    </Container>
  </Navbar>
</div>

  )
}

export default Header