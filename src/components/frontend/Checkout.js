import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function Checkout(props)
{

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    var totalCartPrice = 0;


    const [checkoutInput, setCheckoutInput] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
    });


    const [error, setError] = useState([]);



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


    const handleInput = (e) =>{
        e.persist();

        setCheckoutInput({...checkoutInput, [e.target.name]: e.target.value});

    }

   
    const submitOrder = (e, payment_mode) => {
        e.preventDefault();

        const data = {
            firstname: checkoutInput.firstname,
            lastname: checkoutInput.lastname,
            phone: checkoutInput.phone,
            email: checkoutInput.email,
            address: checkoutInput.address,
            city: checkoutInput.city,
            state: checkoutInput.state,
            zipcode: checkoutInput.zipcode,
            payment_mode: payment_mode,
        }


       

        switch(payment_mode){
            case 'cod':
                 axios.post(`/api/place-order`,data).then(res =>{
            if(res.data.status === 200){
                swal("Order placed successfully",res.data.message,"success");
                setError([]);
                history.push('/');
            }
            else if(res.data.status === 422){
                swal("All fields are mandatory","","error");
                setError(res.data.errors);
            }
        });
                break;
            case 'payonline':
                axios.post(`/api/validate-order`,data).then(res =>{
            if(res.data.status === 200){
                setError([]);
                var myModal = new window.bootstrap.Modal(document.getElementById('payOnlineModal'));
                myModal.show();
               
            }
            else if(res.data.status === 422){
                swal("All fields are mandatory","","error");
                setError(res.data.errors);
            }
        });
                break;
            default:
                break;

        }


    }



    if(loading)
    {
        return <h4>Loading checkout...</h4>
    }


    var checkout_HTML = '';
    if(cart.length > 0)
    {
        checkout_HTML = <div>
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
                                    <input type="text" onChange={handleInput} value={checkoutInput.firstname} name="firstname" className="form-control" />
                                    <small className="text-danger">{error.firstname}</small>
                                </div>
                                </div>

                                 <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Last name:</label>
                                    <input type="text" onChange={handleInput} value={checkoutInput.lastname} name="lastname" className="form-control" />
                                    <small className="text-danger">{error.lastname}</small>
                                    
                                </div>
                                </div>

                                 <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Phone number:</label>
                                    <input type="text" onChange={handleInput} value={checkoutInput.phone} name="phone" className="form-control" />
                                    <small className="text-danger">{error.phone}</small>

                                </div>
                                </div>

                                 <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Email adress:</label>
                                    <input type="text" onChange={handleInput} value={checkoutInput.email} name="email" className="form-control" />
                                    <small className="text-danger">{error.email}</small>

                                </div>
                                </div>

                                <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Full adress:</label>
                                    <textarea rows="3" name="address" onChange={handleInput} value={checkoutInput.address} className="form-control"></textarea>
                                    <small className="text-danger">{error.address}</small>
                                </div>
                                </div>

                                <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>City:</label>
                                    <input type="text" onChange={handleInput} value={checkoutInput.city} name="city" className="form-control" />
                                    <small className="text-danger">{error.city}</small>
                                </div>
                                </div>

                                <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>State:</label>
                                    <input type="text" onChange={handleInput} value={checkoutInput.state} name="state" className="form-control" />
                                    <small className="text-danger">{error.state}</small>
                                </div>
                                </div>

                                 <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>Zip code:</label>
                                    <input type="text" onChange={handleInput} value={checkoutInput.zipcode} name="zipcode" className="form-control" />
                                    <small className="text-danger">{error.zipcode}</small>
                                </div>
                                </div>

                                 <div className="col-md-12">
                                <div className="form-group text-end">
                                   <button type="button" className="btn btn-primary mx-1" onClick={(e) => submitOrder(e,'cod')}>Place order</button>
                                   <button type="button" className="btn btn-warning mx-1" onClick={(e) => submitOrder(e,'payonline')}>Pay online</button>

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
    }
    else{
  checkout_HTML=  <div>
        <div className="card card-body py-5 text-center shadow-sm">
            <h4>Your can not access the checkout page because your cart is empty</h4>
        </div>
    </div>
}



return (
    <div>

    
<div class="modal fade" id="payOnlineModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Online payment mode</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <hr />
      </div>
    </div>
  </div>
</div>
            <div>
        <div className='card-header'>
            <div className="container">
                <h6 > Home / Checkout</h6>
            </div>
        </div>

        <div className="py-4">
            <div className="container">
                {checkout_HTML}
                    </div>
                    </div>
                    </div>
    </div>
)

}

export default Checkout;