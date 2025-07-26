import React from "react";
import { all_product } from "../../assets/Image";
import { useNavigate } from "react-router-dom";

function Shopcontent() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container" id="shop-content">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            {/* collapse start */}
            {/* collapse 1 */}
            <div className="accordion" >
              <div className="accordion-item" >
                <div className="accordion-header">
                <h2>
                  <button
                    className="accordion-button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    Product Category
                  </button>
                </h2>
                </div>
                <div
                  className="accordion-collapse accordion-body collapse show "
                  id="collapseOne"
                >
                  <div className="mx-2 collapse-div">
                    {/* content start */}
                      <div className="d-flex justify-content-between">
                        <span>HOODIE</span>
                        <span>5</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>T-SHIRTS</span>
                        <span>12</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>SHOES</span>
                        <span>25</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>BAGS</span>
                        <span>10</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>TOPS</span>
                        <span>15</span>
                      </div>
                    {/* content end */}

                  </div>
                </div>
              </div>
            </div>
            <br />
            
            {/* collapse 2 collapse-div */}
               <div className="accordion">
              <div className="accordion-item">
                <h2>
                  <button
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsetwo"
                  >
                    Price
                  </button>
                </h2>
                <div
                  className="accordion-collapse accordion-body collapse "
                  id="collapsetwo"
                >
                  <div className="mx-2 collapse-div">
                  {/* content start */}
                      <div className="d-flex justify-content-between">
                       <span>200-400</span>
                        <span>₹</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>400-800</span>
                        <span>₹</span>
                      </div>
                      <div className="d-flex justify-content-between">
                       <span>800-1200</span>
                        <span>₹</span>
                      </div>
                      <div className="d-flex justify-content-between">
                       <span>1200-1500</span>
                        <span>₹</span>
                      </div>
                      <div className="d-flex justify-content-between">
                       <span>1500-2000</span>
                        <span>₹</span>
                      </div>
                    {/* content end */}
                    </div>
                </div>
              </div>
            </div>
            <br />
            {/* collapse 3 */}
              <div className="accordion">
              <div className="accordion-item">
                <h2>
                  <button
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsethree"
                  >
                    Colour
                  </button>
                </h2>
                <div
                  className="accordion-collapse accordion-body collapse "
                  id="collapsethree"
                >

                  <div className="mx-2 collapse-div">
                  {/* content start */}
                      <div className="d-flex justify-content-between">
                        <span><i class="fa-solid fa-circle" style={{color:"red"}}></i>&nbsp;HOODIE</span>
                        <span>(46)</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span><i class="fa-solid fa-circle" style={{color:"blue"}}></i>&nbsp;T-SHIRTS</span>
                        <span>(46)</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span><i class="fa-solid fa-circle" style={{color:"yellow"}}></i>&nbsp;SHOES</span>
                        <span>(46)</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span><i class="fa-solid fa-circle" style={{color:"green"}}></i>&nbsp;BAGS</span>
                        <span>(46)</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span><i class="fa-solid fa-circle" style={{color:"black"}}></i>&nbsp;TOPS</span>
                        <span>(46)</span>
                      </div>
                    {/* content end */}
                    </div>
                </div>
              </div>
            </div>
            <br />
            {/* collapse 4 */}
               <div className="accordion">
              <div className="accordion-item">
                <h2>
                  <button
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefour"
                  >
                    Size
                  </button>
                </h2>
                <div
                  className="accordion-collapse accordion-body collapse "
                  id="collapsefour"
                >
                  <div className="mx-2 collapse-div">
                  {/* content start */}
                      <div className="d-flex justify-content-between">
                        <span>SMALL</span>
                        <span>(46)</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>MEDIUM</span>
                        <span>(46)</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>SMALL</span>
                        <span>(46)</span>
                      </div>
                    {/* content end */}
                    </div>
                </div>
              </div>
            </div>
            <br />
            {/* collapse 5 */}
                <div className="accordion">
              <div className="accordion-item">
                <h2>
                  <button
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefive"
                  >
                    Tags
                  </button>
                </h2>
                <div
                  className="accordion-collapse accordion-body collapse "
                  id="collapsefive"
                >
                  <div className="mx-2 collapse-div">
                  {/* content start */}
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-light m-2" style={{color:"gray"}}>CLOTHINGS</button>
                        <button className="btn btn-light m-2" style={{color:"gray"}}>porduct</button>
                      </div>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-light m-2" style={{color:"gray"}}>MENS</button>
                        <button className="btn btn-light m-2" style={{color:"gray"}}>M12</button>
                      </div>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-light m-2" style={{color:"gray"}}>WOMENS</button>
                        <button className="btn btn-light m-2" style={{color:"gray"}}>M25</button>
                      </div>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-light m-2" style={{color:"gray"}}>PRODUCTS</button>
                        <button className="btn btn-light m-2" style={{color:"gray"}}>S10</button>
                      </div>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-light m-2" style={{color:"gray"}}>FASHION</button>
                        <button className="btn btn-light m-2" style={{color:"gray"}}>Z15</button>
                      </div>
                    {/* content end */}
                    </div>
                </div>
              </div>
            </div>
            {/* collapse end */}
          </div>
          {/* products start */}
          <div className="col-lg-9 col-md-6 col-sm-12">
            <div className="row">
              {all_product.map((value) => (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  {/* card start */}
                  <div className="card my-2" id="mapping-card">
                    <img
                      src={value.img}
                      onClick={() => navigate(`/shop/${value.id}`)}
                      alt=""
                      height="300"
                    />
                    <div className="mapping-nav-icons">
                      <span>
                        {" "}
                        <i className="fa-regular fa-heart"></i>
                      </span>
                      <br />
                      <span>
                        {" "}
                        <i className="fa-solid fa-cart-shopping"></i>
                      </span>
                    </div>
                    <div className="card-footer">
                      <span style={{ color: "#E52020" }}>Name : </span>
                      {value.item} <br />
                      <span style={{ color: "#E52020" }}>Price : </span>
                      {value.price}
                    </div>
                  </div>
                  {/* card end */}
                </div>
              ))}
              {/* <div className="col-lg-4 col-md-6 col-sm-12"><p>hih</p></div>
                <div className="col-lg-4 col-md-6 col-sm-12"><p>hih</p></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopcontent;
