import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function Checkout(props)
{

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    var totalCartPrice = 0;

     if(!localStorage.getItem('auth_token')){
        history.push('/');
        swal("Warning","Login to go to the Cart page","error");
    }


     useEffect(() => {
     
        let isMounted = true;
       

        axios.get(`/api/cart`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setCart(res.data.cart);
                    setLoading(false);
                }
                else if(res.data.status === 401)
                {
                    history.push('/');
                    swal("Warning", res.data.message, "error");
                }
            }
        });
    
      return () => {
        isMounted = false;
      }
    }, [history]);


    if(loading)
    {
        return <h4>Loading checkout...</h4>
    }




return (
    <div>
            <div>
        <div className='card-header'>
            <div className="container">
                <h6 > Home / Checkout</h6>
            </div>
        </div>

        <div className="py-4">
            <div className="container">
                <div className='row'>
                <div className='col-md-7'>
                    <div className="card">
                        <div className="card-header">
                            <h4>Payment information</h4>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>First name:</label>
                                    <input type="text" name="firstname" className="form-control" />
                                </div>
                                </div>

                                 <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Last name:</label>
                                    <input type="text" name="lastname" className="form-control" />
                                </div>
                                </div>

                                 <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Phone number:</label>
                                    <input type="text" name="phone" className="form-control" />
                                </div>
                                </div>

                                 <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Email adress:</label>
                                    <input type="text" name="email" className="form-control" />
                                </div>
                                </div>

                                <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Full adress:</label>
                                    <textarea rows="3" className="form-control"></textarea>
                                </div>
                                </div>

                                <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>City:</label>
                                    <input type="text" name="city" className="form-control" />
                                </div>
                                </div>

                                <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>State:</label>
                                    <input type="text" name="state" className="form-control" />
                                </div>
                                </div>

                                 <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>Zip code:</label>
                                    <input type="text" name="zipcode" className="form-control" />
                                </div>
                                </div>

                                 <div className="col-md-12">
                                <div className="form-group text-end">
                                   <button type="button" className="btn btn-primary">Place order</button>
                                </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>

                    
                    </div>
                    <div className="col-md-5">
                        <table className="table table-boardered">
                            <thead>
                                <tr>
                                    <th width="50%">Car</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Days</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                    <tbody>
                                         {cart.map((item,idx) =>{
                                            totalCartPrice += item.product.selling_price * item.product_qty*item.product_days;
                                            return (
                                            <tr key={idx}>
                                            <td>{item.product.name}</td>
                                            <td>{item.product.selling_price}</td>
                                            <td>{item.product_qty}</td>
                                            <td>{item.product_days}</td>
                                            <td>{item.product.selling_price * item.product_qty*item.product_days}</td>

                                        </tr>
                                          )
                                })}
                                <tr>
                                    <td colSpan="2" className="text-end fw-bold">Grand total:</td>
                                    <td colSpan="2" className="text-end fw-bold">{totalCartPrice}</td>
                                </tr>
                                    </tbody>
                        </table>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
    </div>
)

}

export default Checkout;