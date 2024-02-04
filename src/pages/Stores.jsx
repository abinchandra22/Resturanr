import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Projectcard from '../components/Projectcard'

function Stores() {
  return (
  <div >
            <Header></Header>
      <div style={{ marginTop: '200px', marginBottom: '20px'}} className='container-fluid'>
        <div className='d-flex justify-content-between row'>
          <div className='col-lg-6'>
                     <h1 className='ms-5'>Finf All Restaurent Here</h1>
 
          </div>
<div className='col-lg-6'>
                    <input style={{width:'100%',height:'50px'}} type="text" placeholder='Search Restaurent by its Place'/>
        </div>
          
        </div>
        
        <Row className='mt-5 ms-3'>
          <Col sm={12} md={6} lg={4}>
            <Projectcard></Projectcard>
            <Projectcard></Projectcard>
          </Col>
        </Row>

    </div>
    </div>

  )
}

export default Stores