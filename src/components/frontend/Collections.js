import axios from 'axios';
import React , {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';


function Collections()
{

const [loading, setLoading] = useState(true);
const [viewProduct, setProduct] = useState([]);

    useEffect(() => {
      
        document.title = "Collection";

        axios.get(`/api/view-productFront`).then(res=>{
            if(res.data.status === 200)
            {
               // console.log(res.data.products);
               setProduct(res.data.products);
               setLoading(false);
            }
        });

    }, []);

    var display_Productdata ="";

    if(loading)
    {
        return <h4>Collection is loading ...</h4>
    }
    else
    {
        var ProdStatus ='';
        display_Productdata = viewProduct.map( (item) => {
             var AuthButtons = "";
  if (localStorage.getItem("auth_token")) {
    AuthButtons = (
       <td>
                        <Link to={`/collections/${item.category.slug}/${item.slug}`} className='btn btn-success btn-sm'>View</Link>
                    </td>
    );
  } else {
     AuthButtons = ( <td></td>);
        swal( "Login to borrow your car","","warning")
     

  }


            return(
                <tr key ={item.id}>
                    <td>{item.category.name}</td>
                    <td>{item.name}</td>
                    <td>{item.selling_price}</td>
                    <td><img src={`http://localhost:8000/${item.image}`} width="80px" alt ={item.name}/></td>
            {AuthButtons}
                    
                </tr>
            ) 
        });
    }



   
    

    return(

        <div className='card px-4 mt-3'>
            <div className='card-header'>
                <h4>Our collection
                    
                </h4>
            </div>
            <div className='card-body'>
                <div className='table-responsive'>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>Category Name</th>
                                <th>Product Name</th>
                                <th>Selling Price</th>
                                <th>Image</th>
                                 <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {display_Productdata}
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default Collections;