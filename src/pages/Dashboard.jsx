import React from 'react'
import Header from '../components/Header'
import Mystore from '../components/Mystore'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <div>
      <Header insideDashboard></Header>
      <div style={{ marginTop: '150px', marginBottom: '20px' }} className='container'>
        <h1>Welcome <span className='text-warning'>User</span></h1>
        <div className='row mt-5 '>
          <div className='col-lg-8'>
            <Mystore></Mystore>
          </div>
          <div className='col-lg-4'>
         <Profile></Profile>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard