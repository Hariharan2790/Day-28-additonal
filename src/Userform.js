import React from 'react'

function Userform() {
  return (
    <>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Userlist</h1>

</div>
<div className='container'>
    <div className='row'>
        <div className='col-lg-4'>
            <lable>Name</lable>
            <input type="text" className='form-control' placeholder='name'></input>

        </div>
        <div className='col-lg-4'>
            <lable>Position</lable>
            <input type="text" className='form-control' ></input>

        </div>
        <div className='col-lg-4'>
            <lable>Office</lable>
            <input type="text" className='form-control' ></input>

        </div>
        <div className='col-lg-4'>
            <lable>Age</lable>
            <input type="text" className='form-control' ></input>

        </div>
        <div className='col-lg-4'>
            <lable>Date</lable>
            <input type="date" className='form-control' ></input>

        </div>
        <div className='col-lg-4'>
            <lable className='text-center'>Salary</lable>
            <input type="text" className='form-control' ></input>

        </div>
        <div className='col-lg-12 mt-3'>
          
            <input type="submit" className='btn btn-primary' ></input>

        </div>
        


    </div>

</div>
</>
  )
}

export default Userform