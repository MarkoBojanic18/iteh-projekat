import React from 'react';
import {Link} from 'react-router-dom';


function AddProduct() {

    return (
        <div className="container-fluid px-4">
         <div className='card mt-4'>
            <div className='card-header'>
                <h4>Add Product
                    <Link to = "/admin/view-product" className = "btn btn-primary btn-sm float-end">View Product</Link>
                </h4>
            </div>
            <div className='card-body'>

                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="seotags-tab" data-bs-toggle="tab" data-bs-target="#seotags" type="button" role="tab" aria-controls="seotags" aria-selected="false">Profile</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="otherdetails-tab" data-bs-toggle="tab" data-bs-target="#otherdetails" type="button" role="tab" aria-controls="otherdetails" aria-selected="false">Contact</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        a
                    </div>
                    <div class="tab-pane card-body border fade" id="seotags" role="tabpanel" aria-labelledby="seotags-tab">
                        b
                    </div>
                    <div class="tab-pane card-body border  fade" id="otherdetails" role="tabpanel" aria-labelledby="otherdetails-tab">
                        c
                    </div>
                </div>


            </div>
         </div>
        </div>
    )
}

export default AddProduct;