import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { detailsProduct } from "../../../actions/productActions";
import LoadingBox from "../../Users/LoadingBox/loadingBox";
import MessageBox from "../../Users/MessageBox/messageBox";
import "./EditProduct.css";

function EditProduct() {
  const proId = window.location.pathname.split("/");
  const productId = proId[3];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const [departments, setDepartments] = useState(false);
  const [DepError, setError] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");

  const [productErr, setProductErr] = useState(true);

  const data = {
    product: [
      {
        name: title,
        image: image,
        brand: brand,
        category: category,
        department: department,
        description: description,
        price: price,
        countInStock: stock,
      },
    ],
  };

  useEffect(() => {
    console.log(productId, product._id);
    if (productId === product._id) {
      setTitle(product.name);
      setPrice(product.price);
      setBrand(product.brand);
      setCategory(product.category);
      setDepartment(product.department);
      setDescription(product.description);
      setStock(product.stock);
      setImage(product.image);
      setProductErr(false);
    }
  }, [setProductErr]);

  const department_list = async () => {
    try {
      const url = "/api/departments";
      const { data } = await axios.post(url);
      setDepartments(data);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    department_list();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : productErr ? (
        <LoadingBox></LoadingBox>
      ) : (
        <section className="adminEditProductSection">
          <div className="AddProductContainer">
            <div className="adminPanelOverviewTitleDiv">
              <p className="adminPanelOverviewTitle">Edit Products</p>
            </div>
            <div className="adminPanelOverviewSubTitleDiv addProductSubTitle">
              <p className="adminPanelOverviewSubTitleText">
                <Link to="/admin" style={{ textDecoration: "none" }}>
                  <span className="adminPanelOverviewSubDashboardTitle">
                    Dashboard
                  </span>
                </Link>
                {">"}

                <Link to="/admin/products" style={{ textDecoration: "none" }}>
                  <span className="adminPanelOverviewSubAmazonDashboardTitle">
                    Products
                  </span>
                </Link>
                {">"}
                <span className="adminPanelOverviewSubAmazonDashboardTitle">
                  Edit Products
                </span>
              </p>
            </div>
            <hr />
            <div className="addProductInputContainer">
              <form action="">
                <p className="addNewAddressText">Edit product</p>
                <div className="addProductFormLeft">
                  <label htmlFor="" className="addProductInputLabel">
                    Product
                  </label>
                  <br />
                  <input
                    type="text"
                    className="inputSpace"
                    value={title}
                    placeholder="Product title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <br />
                  <br />

                  <label htmlFor="" className="addProductInputLabel">
                    Price
                  </label>
                  <br />
                  <input
                    type="number"
                    className="inputSpace"
                    value={price}
                    placeholder="Price"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                  <br />
                  <br />

                  <label htmlFor="" className="addProductInputLabel">
                    Category
                  </label>
                  <br />
                  <input
                    type="text"
                    className="inputSpace"
                    value={category}
                    placeholder="Category"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                  <br />
                  <br />

                  <label htmlFor="" className="addProductInputLabel">
                    Brand
                  </label>
                  <br />
                  <input
                    type="text"
                    className="inputSpace"
                    value={brand}
                    placeholder="Brand"
                    onChange={(e) => {
                      setBrand(e.target.value);
                    }}
                  />
                  <br />
                  <br />
                  {departments && (
                    <>
                    <label htmlFor="" className="addProductInputLabel">
                    Department
                  </label>
                <br />
                <select
                  name="department"
                    id="department"
                    className="selectDepartment"
                    value={department}
                    onChange={(e) => {
                      setDepartment(e.target.value);
                    }}
                >
                  {departments.map((department, index) =>{
                    return(
                      <option value={department.name}>{department.name}</option>
                    )
                  })}
                </select>
                <br />
                    </>
                  )}
                </div>
                <div className="addProductFormRight">
                  <label htmlFor="" className="addProductInputLabel">
                    Description
                  </label>
                  <br />
                  <textarea
                    type="text"
                    className="inputSpaceDescription"
                    value={description}
                    placeholder="Description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                  <br />
                  <br />

                  <label htmlFor="" className="addProductInputLabel">
                    Stock
                  </label>
                  <br />
                  <input
                    type="number"
                    className="inputSpace"
                    value={stock}
                    placeholder="Stock"
                    onChange={(e) => {
                      setStock(e.target.value);
                    }}
                  />
                  <br />
                  <br />

                  <label htmlFor="" className="addProductInputLabel">
                    Image
                  </label>
                  <img
                    src={image}
                    style={{ height: "8.5rem", width: "auto", marginLeft: "1rem" }}
                    alt=""
                  />
                  <br />
                  <input
                    type="text"
                    className="inputSpace"
                    placeholder="Image url"
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                  <br />
                  <br />
                  <button
                    className="btn btn-warning btn-addProduct"
                    onClick={(e) => {
                      console.log(data);
                    }}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default EditProduct;
