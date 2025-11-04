import Single from "./Single"
import headphoneimg from '../assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import speakerimg from '../assets/shared/mobile/image-zx9-speaker.jpg';
import earphoneimg from '../assets/shared/mobile/image-xx99-mark-two-headphones.jpg'
import desktop from '../assets/home/desktop//image-earphones-yx1.jpg'
function Shop(){
    return(<>
    <div className="shop">
        <Single item='HEADPHONES' img={headphoneimg} deskimg={desktop}/>
        <Single item='SPEAKERS' img={speakerimg}/>
        <Single item='EARPHONES' img={earphoneimg}/>
        </div>
    </>)
}

export default Shop