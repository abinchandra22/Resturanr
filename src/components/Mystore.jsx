import React from 'react'
import Add from '../components/Add'
import Edit from '../components/Edit'


function Mystore() {
  return (
    <div className='border round p-2' >
    <div className='d-flex justify-content-between'>
      <h2>My Spote</h2>
      <Add></Add>
    </div>
    <div className='mt-4'>
      <div className='border rounded d-flex justify-content-between align-items-center'>
        <h4 className='ms-3'>Title</h4>
        <div className='icon d-flex align-items-center'>
          <Edit></Edit>
          <a href=""  className='btn btn-link ms-2'> <i  className='fa-brands text-info fa-square-instagram fa-2x'></i></a>
       <button className='btn btn-link text-danger ms-2'><i className='fa-solid fa-trash text-danger fa-2x'></i> </button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Mystore