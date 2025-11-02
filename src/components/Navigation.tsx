import { Link } from "react-router";
const Navigation = () => {
    return(
        <>
        <nav className="top">

            <img id="burger" src="../assets/shared/tablet/icon-hamburger.svg"/>
        
            <p id="audio">audiophile</p>
            <ul className="links">
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/headphones'>HEADPHONES</Link></li>
                <li><Link to='speakers'>SPEAKERS</Link></li>
                <li><Link to='earphones'>EARPHONES</Link></li>
            </ul>

            <img  src="../assets/shared/desktop/icon-cart.svg"/>
        </nav>
        </>
    )
}

export default Navigation;