import React from "react";
import Navbar from "../../../layouts/frontend/Navbar.js";
import img1 from '../images/audi.png';


function Login(){
    return(
        <div>
            <Navbar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                             <div className="card-header">
                                <h4>Login</h4>
                             </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group mb-3">
                                            <label>Email:</label>
                                            <input type="" name="email" className="form-control" value="" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label>Password:</label>
                                            <input type="" name="password" className="form-control" value="" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <button type="submit" className="btn btn-primary">Login</button>
                                        </div>
                                    </form>
                                </div>
                            
                        </div>
                        
                    </div>
                    <img src={img1} style={{height: '450px', width: '700px'}} alt=""/>
                </div>
                
            </div>

            
        </div> 
    );
}

export default Login;