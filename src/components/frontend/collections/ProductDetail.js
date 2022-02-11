import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function ProductDetail(props)
{

    return(
          <div>
        <div className="py-3 bg-warning">
            <div className="container">
                <h6> Collections / category / product</h6>
            </div>
        </div>

        <div className="py-3">
            <div className="container">
                <div className='row'>
                  <h4>Product Details</h4>
                </div>
            </div>
        </div>

    </div>
    )
}

export default ProductDetail;