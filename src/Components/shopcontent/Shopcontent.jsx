
import React from 'react'
import { all_product } from '../../assets/Image'
import { useNavigate } from 'react-router-dom'

function Shopcontent() {
 const navigate = useNavigate() 
  return (
    <>
    <div className="container" id='shop-content'>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                {/* collapse start */}
                {/* collapse 1 */}
                <div>
                    <button className='btn dropdown-toggle'data-bs-toggle="collapse" data-bs-target="#shop-collapse1">Product Category</button>
                    <div id='shop-collapse1' className='collapse'><br /><p className='card card-body' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eius.</p></div>
                </div>
                <br />
                {/* collapse 2 */}
                 <div>
                    <button className='btn dropdown-toggle' data-bs-toggle="collapse" data-bs-target="#shop-collapse2">Price</button>
                    <div id='shop-collapse2' className='collapse'><br /><p className='card card-body' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eius.</p></div>
                </div>
                 <br />
                {/* collapse 3 */}
                 <div>
                    <button className='btn dropdown-toggle' data-bs-toggle="collapse" data-bs-target="#shop-collapse3">Colour</button>
                    <div id='shop-collapse3' className='collapse'><br /><p className='card card-body' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eius.</p></div>
                </div>
                 <br />
                {/* collapse 4 */}
                 <div>
                    <button className='btn dropdown-toggle' data-bs-toggle="collapse" data-bs-target="#shop-collapse4">Size</button>
                    <div id='shop-collapse4' className='collapse'><br /><p className='card card-body' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eius.</p></div>
                </div>
                 <br />
                {/* collapse 5 */}
                 <div>
                    <button className='btn dropdown-toggle' data-bs-toggle="collapse" data-bs-target="#shop-collapse5">Tage</button>
                    <div id='shop-collapse5' className='collapse'><br /><p className='card card-body' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eius.</p></div>
                </div>
                {/* collapse end */}
            </div>
            <div className="col-lg-9 col-md-6 col-sm-12" >
                <div className="row">
                {all_product.map((value)=>(<div className="col-lg-4 col-md-6 col-sm-12" >
                    {/* card start */}
                    <div className="card my-2" id="mapping-card">
                    <img src={value.img} onClick={()=>navigate(`/shop/${value.id}`)} alt="" height="350"/>
                     <div className="mapping-nav-icons">
                         <span> <i className="fa-regular fa-heart"></i></span><br />
                         <span> <i className="fa-solid fa-cart-shopping"></i></span>
                    </div>     
                    <div className="card-footer">
                        <span style={{color:"#E52020"}}>Name : </span>{value.item} <br />
                        <span style={{color:"#E52020"}}>Price : </span>{value.price}
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
  )
}

export default Shopcontent