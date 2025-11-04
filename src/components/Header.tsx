import Button from './Button';

function Header() {
    return (
        <div className='header'>
            <div>
            <h4>NEW PRODUCT</h4>
            <h1 id='xx99'>XX99 Mark II
                Headphones</h1>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Button part='earphones'/>
            </div>
        </div>
    )
}

export default Header;