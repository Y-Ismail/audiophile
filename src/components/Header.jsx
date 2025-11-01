import Button from './Button';
import './Header.css';
function Header() {
    return (
        <div className='header'>
            <h4>NEW PRODUCT</h4>
            <h1>XX99 Mark II
                Headphones</h1>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Button />
        </div>
    )
}

export default Header;