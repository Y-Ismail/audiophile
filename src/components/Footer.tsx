import { Link } from "react-router";
import iconfb from '../assets/shared/desktop/icon-facebook.svg';
import icontwtr from '../assets/shared/desktop/icon-twitter.svg';
import iconinstg from '../assets/shared/desktop/icon-instagram.svg';
import logo from '../assets/shared/desktop/logo.svg'

function Footer(){
    return(
        <footer>
            <div className="deskflex">
            <h4><img src={logo} alt="logo" /></h4>
             <ul>
                <li><a>HOME</a></li>
                <li><a>HEADPHONES</a></li>
                <li><a>SPEAKERS</a></li>
                <li><a>EARPHONES</a></li>
            </ul>
            </div>

            <p id="audtext">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <div className="tabflex">
            <p id="copy">Copyright 2021. All Rights Reserved</p>
        
        
           <ul id="socials">
            <li><Link to='ter'><img src={iconfb} alt="" /></Link></li>
            <li><Link to='dds'><img src={icontwtr} alt="" /></Link></li>
            <li><Link to='ddd'><img src={iconinstg} alt="" /></Link></li>
           </ul>
           
           </div>
       
        </footer>
        
    )
}

export default Footer;