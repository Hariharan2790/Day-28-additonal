import React from 'react'

function Productform() {
  return (
    <>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Productlist</h1>
    </div>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6' >
                <lable>National</lable>
               <input type="text"  className='form-control' ></input>

            </div>
            <div className='col-lg-6' >
                <lable>Product Name</lable>
                <input type="text" className='form-control' ></input>

            </div>
            <div className='col-lg-3' >
                <lable>Price</lable>
                <input type="text" className='form-control' ></input>

            </div>
            <div className='col-lg-6' >
                <lable>Millage</lable>
                <input type="text" className='form-control' ></input>

            </div>
            <div className='col-lg-3' >
                <lable>Product CC</lable>
                <input type="text" className='form-control' ></input>
                
            </div>
            <div className='col-lg-4' >
                
                <input type="submit" className='btn btn-danger mt-3' ></input>

            </div>
        </div>
    </div>
</>
  )
}

export default Productform