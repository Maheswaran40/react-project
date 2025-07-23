import React from "react";
import {  useParams } from "react-router-dom";
import { all_product } from "../assets/Image";

function Product() {
   var { navid } = useParams()

    const selectProduct = all_product.find((value) => value.id === Number(navid))
  return (
    <>
    <div className="product-container">
        <div className="container " >
          {/* row div */}
          <div
            className="row product-container-row"
            style={{
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
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
                }}>
                <img
                  src={selectProduct.img}
                  style={{
                    position: "absolute",
                    width: "400px",
                    height: "100%",
                  }}/>
              </div>
            </div>
            {/* col div 2 */}
            <div className="col-lg-6 col-sm-12 " >
              <div
                className="p-2"
                style={{ position: "relative", top: "100px" }}>
                  {/* Product details */}
                    <div>
                      <h1>{selectProduct.item}</h1>
                      <hr />
                      <h3>Price : {selectProduct.price}</h3>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ipsa, quisquam?
                      </p>
                      <button className="border-0">
                        <i className="fa-regular fa-heart"></i>Add to Wishlist
                      </button>
                    </div>
                
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
                  <br /><br />
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
                <br /><br /><br />
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
