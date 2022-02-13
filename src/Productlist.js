import React from 'react'
import { Link } from 'react-router-dom'

function Productlist() {
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Product List</h1>
                <Link to="/productform" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create Product</Link>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>National</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Millage</th>
                                    <th>Product CC</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Indian</td>
                                    <td>Bike</td>
                                    <td>Rs.150000</td>
                                    <td>30</td>
                                    <td>200cc</td>
                                    <td>
                                        <button className='btn btn-primary'>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>

                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productlist