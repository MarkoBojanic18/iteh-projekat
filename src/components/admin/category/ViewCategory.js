import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ViewCategory() {
  const [loading, setLoading] = useState(true);
  const [categorylist, setCategorylist] = useState([]);

  useEffect(() => {
    axios.get(`/api/view-category`).then((res) => {
      console.log(res.data.category);
      if (res.status === 200) {
        setCategorylist(res.data.category);
      }
      setLoading(false);
    });
  }, []);

  var viewcategory_HTMLTABLE = "";
  if (loading) {
    return <h4>Loading Category...</h4>;
  } else {
    viewcategory_HTMLTABLE = categorylist.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.slug}</td>
          <td>{item.status}</td>
          <td>
            <Link
              to={`edit-category/${item.id}`}
              className="btn btn-success btn-sm"
            >
              Edit
            </Link>
          </td>
          <td>
            <button type="button" className="btn btn-danger btn-sm">
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="container px-4">
      <div className="card mt-4">
        <div className="card-header">
          <h4>
            Category List
            <Link
              to="/admin/add-category"
              className="btn btn-primary btn-sm float-end"
            >
              Add Category
            </Link>
          </h4>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Slug</td>
                <td>Status</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>{viewcategory_HTMLTABLE}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewCategory;