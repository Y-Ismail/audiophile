import Button from "./Button";
import zx9 from '../assets/home/mobile/image-speaker-zx9.png'
const Orange = () => {
    return <div className="orange">
        <img src={zx9} alt="zx9"/>
        <h1 id="zx">ZX9 SPEAKER</h1>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Button variant="black"/>
    </div>
}
export default Orange;