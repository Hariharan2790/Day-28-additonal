import React from 'react'
import { Link } from 'react-router-dom'

export function Userlist() {
    

    return (
        <>
             <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Userlist</h1>
                <Link to="/usersform" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i>Create list</Link>
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
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Hariharan</td>
                                    <td>Developer</td>
                                    <td>fresher</td>
                                    <td>25</td>
                                    <td>2011/04/25</td>
                                    <td>$40,800</td>
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
