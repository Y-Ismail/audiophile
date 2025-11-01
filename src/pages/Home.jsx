import Header from "../components/Header"
import Single from "../components/Single";
import headphoneimg from '../assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import speakerimg from '../assets/shared/mobile/image-zx9-speaker.jpg';
import earphoneimg from '../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg'
import Orange from "../components/Orange";
import Zx7 from "../components/Zx7";
import Yx1 from "../components/Yx1";
import Bring from "../components/Bring";

function Home(){
    return(
        <>
        <Header />
        <Single item='HEADPHONES' img={headphoneimg}/>
        <Single item='SPEAKERS' img={speakerimg}/>
        <Single item='EARPHONES' img={earphoneimg}/>
        <Orange />
        <Zx7 />
        <Yx1 />
        <Bring />
        </>
    )
}
export default Home;