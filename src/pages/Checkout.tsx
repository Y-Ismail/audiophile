import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Checkout = () => {
    return (
        <>
        <Navigation />
        <div className="formcontainer">
        <Link to='/'>Go back</Link>
        <form className="">
            <h2>CHECKOUT</h2>
            <div className="">
                <h3>BILLING DETAILS</h3>
                <label>Name</label>
                <input type="text"/>
                <label>Email Address</label>
                <input type="text"/>
                <label>Phone Number</label>
                <input type="text"/>
            </div>
            <div>
                <h3>SHIPPING INFO</h3>
                <label>Your Address</label>
                <input type="text"/>
                <label>Zip-Code</label>
                <input type="text"/>
                <label>City</label>
                <input type="text"/>
                <label>Country</label>
                <input type="text"/>
            </div>
            <div>
                <h3>PAYMENT DETAILS</h3>
                <label>Payment Method</label>

               <div>
               <input  className="raid" type="radio" name='meth' id="meth1" value='e-Money Number'/>
               <label htmlFor="meth1">e_money Number</label>
               </div>
                <input className="raid" id="pin" type="radio" name="meth" value='e-Money Pin'/>
                <label htmlFor="pin">e-Money Pin</label>
                

            </div>
        </form>

        <div className="sumary" > 
            <h2>SUMMARY</h2>
            <div>
             <img />
             <h3>XX99 MK ii</h3>
             <p>$2,999</p>
             <p>X1</p>
            </div>
            <div>
             <img />
             <h3>XX99 MK ii</h3>
             <p>$2,999</p>
             <p>X1</p>
            </div>
            <div>
             <img />
             <h3>XX99 MK ii</h3>
             <p>$2,999</p>
             <p>X1</p>
            </div>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Checkout;