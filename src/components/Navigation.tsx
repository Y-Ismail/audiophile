import { Link } from "react-router-dom";
import iconburger from '../assets/shared/tablet/icon-hamburger.svg';
import iconcart from '../assets/shared/desktop/icon-cart.svg'
import logo from '../assets/shared/desktop/logo.svg';

const Navigation = () => {
    return(
        <>
        <nav className="top">

            <img id="burger" src={iconburger}/>
        
            <p id="audio"><img src={logo} alt="logo" /></p>
            <ul className="links">
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/headphones'>HEADPHONES</Link></li>
                <li><Link to='/speakers'>SPEAKERS</Link></li>
                <li><Link to='/earphones'>EARPHONES</Link></li>
            </ul>

            <img id="carticon" src={iconcart}/>
        </nav>
        </>
    )
}

export default Navigation;