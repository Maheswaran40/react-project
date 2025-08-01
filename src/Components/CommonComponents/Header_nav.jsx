import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../index.css";
import Mycontext from "../../contextfile/Mycontext";
import { Offcanvas } from "react-bootstrap";

function Header_nav() {
  const navigate = useNavigate();
  var {
    searchFun,
    seacrhInput,
    filteredItems,
    searchdata,
    setData,
    list,
    deleteFun,
    cartlist,deleteCart,price,quanI,quand
  } = useContext(Mycontext);

  // search fun start
  var [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setData("");
  };

  const handleImageClick = (id) => {
    setShow(false); // dismiss offcanvas
    navigate(`/shop/${id}`); // navigate after closing
    handleClose();
  };
  const closeOffcanvas = () => {
    setShow(false);
  };
  // search fun start

  return (
    <>
      <div
        className="header d-flex justify-content-between px-5 pt-2 align-items-center"
        id="header-main-div"
      >
        <p className="m-0 " id="heading-title" style={{ color: "white" }}>
          Free shipping on US orders $100+ & Free exchanges
        </p>
        <div className="d-flex align-items-center justify-content-between ">
          {/* language dropdown start */}
          <div className="mx-2 header-subdiv">
            <select
              name=""
              id=""
              style={{
                backgroundColor: "transparent",
                color: "white",
                borderRadius: "15px",
              }}
            >
              <option value="" hidden>
                language
              </option>
              <option value="">English</option>
              <option value="">Tamil</option>
              <option value="">French</option>
            </select>
          </div>
          {/* language dropdown end */}

          {/* Money dropdown start */}
          <div className="mx-2 header-subdiv">
            <select
              name=""
              id=""
              style={{
                backgroundColor: "transparent",
                color: "white",
                borderRadius: "15px",
              }}
            >
              <option value="" hidden>
                Currency
              </option>
              <option value="">Rupee</option>
              <option value="">USD</option>
              <option value="">Dhiram</option>
            </select>
          </div>

          {/* money dropdown end */}
        </div>
      </div>
      <hr style={{ margin: "0" }} />
      {/* title start */}
      {/* Name */}
      <div
        id="title"
        className="d-flex align-items-center justify-content-around"
      >
        {/* navbar icon */}
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#canvas"
          className="btn border-0 navicon-button"
        >
          <i className="fa-solid d-flex fa-bars navicon"></i>
        </button>
        <div className="offcanvas offcanvas-start w-50" id="canvas">
          {/* canvas header */}
          <div className="offcanvas-header d-flex justify-content-end p-3">
            <button
              className="btn btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <hr />
          {/* canvas body */}
          <div className="offcanvas-body">
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              <Link id="Link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              <Link id="Link" to={"/about"}>
                About
              </Link>
            </li>
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              <Link id="Link" to={"/shop"}>
                Shop
              </Link>
            </li>
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              <Link id="Link" to={"/faq"}>
                Blog
              </Link>
            </li>
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              <Link id="Link" to={"/contect"}>
                Contact
              </Link>
            </li>
          </div>
        </div>
        <div>
          <h1 className="m-0">
            <span id="clip" className="rye-regular">
              Clip
            </span>
            <span id="cart" className="rye-regular">
              Cart
            </span>
          </h1>
        </div>

        {/* navbar */}
        <div id="nav-list" className="d-flex justify-content-between w-50">
          <Link
            className="Link"
            style={{
              color: location.pathname === "/" ? "#E52020" : "#A89C29",
              textDecoration: location.pathname === "/" ? "underline" : "none",
            }}
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="Link"
            style={{
              color: location.pathname === "/about" ? "#E52020" : "#A89C29",
              textDecoration:
                location.pathname === "/about" ? "underline" : "none",
            }}
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="Link"
            style={{
              color: location.pathname === "/shop" ? "#E52020" : "#A89C29",
              textDecoration:
                location.pathname === "/shop" ? "underline" : "none",
            }}
            to={"/shop"}
          >
            Shop
          </Link>
          <Link
            className="Link"
            style={{
              color: location.pathname === "/faq" ? "#E52020" : "#A89C29",
              textDecoration:
                location.pathname === "/faq" ? "underline" : "none",
            }}
            to={"/faq"}
          >
            Blog
          </Link>
          <Link
            className="Link"
            style={{
              color: location.pathname === "/contect" ? "#E52020" : "#A89C29",
              textDecoration:
                location.pathname === "/contect" ? "underline" : "none",
            }}
            to={"/contect"}
          >
            Contact
          </Link>
        </div>

        {/* icons */}
        <div className="d-flex justify-content-between nav-icons">
          <span data-bs-toggle="offcanvas" data-bs-target="#user-canvas">
            <i className="fa-solid fa-user nav-icon"></i>
          </span>
          <span
            data-bs-toggle="offcanvas"
            data-bs-target="#search-modal"
            onClick={() => setShow(true)}
          >
            <i className="fa-solid fa-magnifying-glass nav-icon"></i>
          </span>
          <span
            data-bs-toggle="offcanvas"
            data-bs-target="#like-canvas"
            className="position-relative"
          >
            <i
              className="fa-regular fa-heart nav-icon"
              style={list.length > 0 ? { color: "red" } :null}
            ></i>
           {list.length >0 ? <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{
                width: "10px",
                height: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {list.length}
            </span> : null} 
          </span>
          <span data-bs-toggle="offcanvas" data-bs-target="#cart-canvas">
            <i className="fa-solid fa-cart-shopping nav-icon" style={cartlist.length > 0 ? { color: "green" } :null}></i>
          </span>
        </div>
        {/* icons end */}

        {/* icons react bootstrap offcanvas start */}

        {/* user canvas */}
        <div className="offcanvas offcanvas-end " id="user-canvas">
          <div className="offcanvas-header">
            <h1>Users</h1>
            <button
              className="btn btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="offcanvas-body">hi</div>
        </div>

        {/* like model */}
        <div
          className="offcanvas offcanvas-top"
          id="like-canvas"
          style={{ height: "500px" }}
        >
          <div className="offcanvas-header">
            <h1 style={{ color: "#E52020" }}>Liked Product List</h1>
            <button
              className="btn btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="offcanvas-body">
            <table className="container table border-primary table-bordered text-center p-5 mt-2">
              <thead>
                <tr>
                  <td>Product Name</td>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {list.map((value, index) => (
                  <tr key={index}>
                    <td align="center" valign="middle">
                      {value.item}
                    </td>
                    <td>
                      <img
                        src={value.img}
                        alt=""
                        style={{ width: "100px", height: "100px" }}
                      />
                      
                    </td>
                    <td align="center" valign="middle">
                      {value.price}
                    </td>
                    <td align="center" valign="middle">
                      <button
                        onClick={() => deleteFun(index)}
                        className="btn btn-close"
                      ></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* search canvas */}
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="top"
          id="search-modal"
          style={{ height: "500px" }}
        >
          <Offcanvas.Header>
            <Offcanvas.Title>Search</Offcanvas.Title>
            <button className="btn btn-close" onClick={closeOffcanvas}></button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <form action="" className="input-group" onSubmit={searchFun}>
              <input
                type="text"
                placeholder="Search"
                className="form-control"
                onChange={seacrhInput}
              />
              <input
                type="submit"
                className=" btn"
                style={{ backgroundColor: "#A89C29", color: "white" }}
              />
            </form>
            {searchdata ? (
              <div className="row">
                {searchdata && filteredItems.length !== 0 ? (
                  filteredItems.map((value, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                      {/* card start */}
                      <div className="card my-2" id="mapping-card">
                        <img
                          onClick={() => handleImageClick(value.id)}
                          src={value.img}
                          alt=""
                          height="300"
                        />
                        <div className="card-footer">
                          <span style={{ color: "#E52020" }}>Name : </span>
                          {value.item} <br />
                          <span style={{ color: "#E52020" }}>Price : </span>
                          {value.price}
                        </div>
                      </div>
                      {/* card end */}
                    </div>
                  ))
                ) : (
                  <div>
                    {" "}
                    <br />
                    <br />
                    <br />
                    <center>
                      <p>No matches found.</p>
                    </center>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {" "}
                <br />
                <br />
                <br />
                <center>
                  <p>No matches found.</p>
                </center>
              </div>
            )}
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      {/* cart canvas */}
      <div className="offcanvas offcanvas-top" id="cart-canvas" style={{height:"500px"}}>
        <div className="offcanvas-header">
          <h1>cart</h1>
          <button
            className="btn btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
            <h3 style={{textAlign:"end"}}>total Price : ₹{price}</h3><br />
          <table className="container table border-primary table-bordered text-center p-5 mt-2">
              <thead>
                <tr>
                  <td>Product Name</td>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Qyantity</td>
                  <td>Action</td>
                  <td>remove</td>
                </tr>
              </thead>
              <tbody>
                {cartlist.map((value, index) => (
                   <tr key={index}>
                    {/* item */}
                    <td align="center" valign="middle">
                      {value.item}
                    </td>
                    {/* img */}
                     <td align="center" valign="middle">
                      <img src={value.img} alt="" style={{ width: "100px", height: "100px" }}/>
                    </td>
                    {/* price */}
                    <td align="center" valign="middle">
                      {value.price}
                    </td>
                    {/* price */}
                    <td align="center" valign="middle">
                      <span>{value.quantity}</span>
                    </td>
                    {/* action */}
                    <td align="center" valign="middle">
                      <button className="btn btn-success" onClick={()=>quanI(value.id)}>increase</button>&nbsp;
                      <button className="btn btn-danger" onClick={()=>quand(value.id)}>decrease</button>
                    </td>
                    {/* remove */}
                     <td align="center" valign="middle">
                      <button
                        onClick={() => deleteCart(index)}
                        className="btn btn-close"
                      ></button>
                    </td>
                  </tr>
                ))
                 
                    }
              </tbody>
            </table>
        </div>
      </div>
      {/* icons  react bootstrap offcanvas start */}

      <br />
      {/* title end*/}
    </>
  );
}

export default Header_nav;
