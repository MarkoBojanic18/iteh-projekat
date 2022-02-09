import axios from 'axios';
import React , {useEffect} from 'react';
import {Link} from 'react-router-dom';


function ViewProduct()
{

    useEffect(() => {
      
        axios.get(`/api/view-product`).then(res=>{
            if(res.data.staus === 200)
            {
                console.log(res.data.products);
            }
        });

    }, []);
    

    return(

        <div className='card px-4 mt-3'>
            <div className='card-header'>
                <h4>View Product
                    <Link to ='/admin/add-product' className='btn btn-primary btn-sm float-end'>Add Product</Link>
                </h4>
            </div>
            <div className='card-body'>
                <div className='table-responsive'>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category Name</th>
                                <th>Name</th>
                                <th>Product Name</th>
                                <th>Selling Price</th>
                                <th>Image</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
        
    

}

export default ViewProduct;