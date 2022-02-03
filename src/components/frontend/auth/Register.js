import React from "react";
import Navbar from "../../../layouts/frontend/Navbar.js";
import '../Logos.css'
import { Link } from 'react-router-dom'

import audi_logo from '../images/audi_logo.png';
import mercedes_logo from '../images/mercedes.png';
import skoda_logo from '../images/skoda.png';
import tesla_logo from '../images/tesla.png';
import bmw_logo from '../images/bmw.png';
import jaguar_logo from '../images/jaguar.png';
import nissan_logo from '../images/nissan.png';
import alfa_logo from '../images/alfa.png';
import mitshubishi_logo from '../images/mitshubishi.png';











function Register(){
    return(
        <div>
            <Navbar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                             <div className="card-header">
                                <h4>Register</h4>
                             </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group mb-3">
                                            <label>Full name:</label>
                                            <input type="" name="name" className="form-control" value="" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label>Email:</label>
                                            <input type="" name="email" className="form-control" value="" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label>Password:</label>
                                            <input type="" name="password" className="form-control" value="" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label>Confirm Password:</label>
                                            <input type="" name="confirm_password" className="form-control" value="" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <button type="submit" className="btn btn-primary">Register</button>
                                        </div>
                                    </form>
                                </div>
                            
                        </div>
                    </div>
                </div>

            </div>

            <div className="brends">
            <Link to='/'><img src={audi_logo} alt='' /></Link>
            <Link to='/'><img src={mercedes_logo} alt='' /></Link>
            <Link to='/'><img src={skoda_logo} alt='' /></Link>
            <Link to='/'><img src={tesla_logo} alt='' /></Link>
            <Link to='/'><img src={bmw_logo} alt='' /></Link>
            <Link to='/'><img src={jaguar_logo} alt='' /></Link>
            <Link to='/'><img src={nissan_logo} alt='' /></Link>
            <Link to='/'><img src={alfa_logo} alt='' /></Link>
            <Link to='/'><img src={mitshubishi_logo} alt='' /></Link>








            
            </div>
        </div>
    );
}

export default Register;