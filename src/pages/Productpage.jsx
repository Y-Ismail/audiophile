import ProductDetail from "../components/ProductDetail";

import { useState } from "react";
function Productpage(props){
    const {box} = props
    return(
        <div>
            <div className={`bgimg`}></div>
            <div>
                <h1>{props.prodname}</h1>
                <p>{props.proddesc}</p>
                <span>{props.price}</span>
                <div>
                    <button>-</button>
                    <p>{props.count}</p>
                    <button>+</button>
                </div>
                <button>Add to cart</button>
            </div>

            <div>
                <div>
                <h2>FEATURES</h2>
                <p>{props.p1}</p>
                <p>{props.p2}</p>
                </div>
                <div>
                    <h2>IN THE BOX</h2>
                    <ul>{box.map(item => <li ><span>{item.id}</span>{item.test}</li>)}</ul>
                </div>

                <div>
                    <img className="half" src={props.img1}/>
                    <img className="half" src={props.img2}/>
                    <img className="full" src={props.bigimg}/>
                </div>
            </div>
        </div>
    )
}

export default Productpage;