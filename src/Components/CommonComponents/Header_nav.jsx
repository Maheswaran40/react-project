import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../index.css";

function Header_nav() {
  const location = useLocation();
  return (
    <>
      <div 
        className="header d-flex justify-content-between px-5 pt-2 align-items-center"
        id="header-main-div"
      >
        <p className="m-0 " id="heading-title" style={{color:"white"}}>
          Free shipping on US orders $100+ & Free exchanges
        </p>
        <div className="d-flex align-items-center justify-content-between ">
          {/* language dropdown start */}
          <div className="mx-2 header-subdiv">
            <select name="" id="" style={{backgroundColor:"transparent",color:"white",borderRadius:"15px"}}>
              <option value="" hidden  >
                language
              </option>
              <option value="">English</option>
              <option value="">Tamil</option>
              <option value="">French</option>
            </select>
          </div>
          {/* language dropdown end */}

          {/* Money dropdown start */}
          <div className="mx-2 header-subdiv" >
            <select name="" id=""  style={{backgroundColor:"transparent",color:"white",borderRadius:"15px"}}>
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
      <hr style={{margin:"0"}}/>
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
              color:location.pathname === "/" ? "#E52020" : "#A89C29",
              textDecoration: location.pathname==="/" ? "underline" :"none"
            }}
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="Link"
            style={{
              color: location.pathname === "/about" ? "#E52020" : "#A89C29",
              textDecoration: location.pathname==="/about" ? "underline" :"none"
            }}
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="Link"
            style={{
              color: location.pathname === "/shop" ? "#E52020" : "#A89C29",
              textDecoration: location.pathname==="/shop" ? "underline" :"none"
            }}
            to={"/shop"}
          >
            Shop
          </Link>
          <Link
            className="Link"
            style={{
              color: location.pathname === "/faq" ? "#E52020" : "#A89C29",
              textDecoration: location.pathname==="/faq" ? "underline" :"none",
            }}
            to={"/faq"}
          >
            Blog
          </Link>
          <Link
            className="Link"
            style={{
              color: location.pathname === "/contect" ? "#E52020" : "#A89C29",
              textDecoration: location.pathname==="/contect" ? "underline" :"none"
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
          <span data-bs-toggle="modal" data-bs-target="#search-modal">
            <i className="fa-solid fa-magnifying-glass nav-icon"></i>
          </span>
          <span data-bs-toggle="offcanvas" data-bs-target="#like-canvas">
            <i className="fa-regular fa-heart nav-icon"></i>
          </span>
          <span data-bs-toggle="offcanvas" data-bs-target="#cart-canvas">
            <i className="fa-solid fa-cart-shopping nav-icon"></i>
          </span>
        </div>
        {/* icons end */}

        {/* icons offcanvas start */}

        {/* user canvas */}
        <div className="offcanvas offcanvas-end " id="user-canvas">
          <div className="offcanvas-header"><h1>Users</h1><button className="btn btn-close" data-bs-dismiss="offcanvas"></button></div>
          <div className="offcanvas-body">hi</div>
        </div>

        {/* like model */}
        <div className="offcanvas offcanvas-end" id="like-canvas">
          <div className="offcanvas-header"><h1>Like</h1><button className="btn btn-close" data-bs-dismiss="offcanvas"></button></div>
          <div className="offcanvas-body">hi</div>
        </div>

        {/* search modal */}

        <div className="modal fade" id="search-modal">
          <div className="modal-dialog modal-xl">
            <div className="modal-contet bg-white">
               <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>
           <div className="modal-body"> {/*onSubmit={searchFun}*/}
            <form action="" className="input-group ">
              <input type="text" placeholder="Search" className="form-control" />
              <input type="submit" className=" btn btn-primary" />
            </form>
          </div>
          </div>
          </div>
        </div>
      

        {/* cart canvas */}
        <div className="offcanvas offcanvas-end" id="cart-canvas">
          <div className="offcanvas-header"><h1>cart</h1><button className="btn btn-close" data-bs-dismiss="offcanvas"></button></div>
          <div className="offcanvas-body">hi</div>
        </div>
        {/* icons offcanvas start */}

      </div>
      <br />
      {/* title end*/}
    </>
  );
}

export default Header_nav;
