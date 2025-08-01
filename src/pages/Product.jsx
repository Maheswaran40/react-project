import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { all_product } from "../assets/Image";
import Mycontext from "../contextfile/Mycontext";

function Product() {
  var { navid } = useParams();
  var { likeFun,cartFun } = useContext(Mycontext);
  const selectProduct = all_product.find((value) => value.id === Number(navid));
  return (
    <>
      <div className="product-container" style={{ zIndex: "1" }}>
        <div className="container ">
          {/* row div */}
          <div
            className="row product-container-row"
            style={{
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* col div 1 */}
            <div className="col-lg-6 col-sm-12">
              <div
                style={{
                  height: "400px",
                  position: "relative",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  id="selectProduct-img"
                  src={selectProduct.img}
                  style={{
                    position: "absolute",
                    width: "400px",
                    height: "100%",
                  }}
                />
              </div>
            </div>
            {/* col div 2 */}
            <div className="col-lg-6 col-sm-12 ">
              <div
                className="p-2"
                style={{ position: "relative", top: "25px" }}
              >
                {/* Product details */}
                <div>
                  <h1>{selectProduct.item}</h1>
                  <hr />
                  <h3>Price : {selectProduct.price}</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa, quisquam?
                  </p>
                  <button
                    className="border-0"
                    onClick={() => likeFun(selectProduct.id)}
                  >
                    <i className="fa-regular fa-heart"></i>Add to Wishlist
                  </button>
                  <br />
                </div><br />
                  <button type="button" className="mainbutton" onClick={()=>cartFun(selectProduct.id)}>
                    <span class="button__text">Add Item</span>
                    <span class="button__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke="currentColor"
                        height="24"
                        fill="none"
                        class="svg"
                      >
                        <line y2="19" y1="5" x2="12" x1="12"></line>
                        <line y2="12" y1="12" x2="19" x1="5"></line>
                      </svg>
                    </span>
                  </button>

                <br />
                {/* collapse start */}

                {/* collapse 1 */}
                <button
                  className="btn btn-primary dropdown-toggle"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse"
                >
                  Description
                </button>
                <div className="collapse" id="collapse">
                  <div className=" card card-body ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, debitis!
                  </div>
                </div>
                <br />
                <br />
                {/* collapse 2 */}
                <button
                  className="btn btn-primary  dropdown-toggle"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                >
                  Additional information
                </button>
                <div className="collapse" id="collapse2">
                  <div className=" card card-body ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam, debitis!
                  </div>
                </div>
                <br />
                <br />
                <br />
                {/* collapse end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
