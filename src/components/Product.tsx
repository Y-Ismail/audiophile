import Button from "./Button";

function Product(props:any){

   
    return(
        <div className="prodcont">
            <div className={`dash ${props.class}`}></div>
           <div className="prodwords">
                <p className="newporange">new product</p>
                <h1>{props.prodname}</h1>
                <p className="pdesc">{props.proddescription}</p>
                <Button part={props.part}/>
                </div>
           
        </div>
    )
}

export default Product;