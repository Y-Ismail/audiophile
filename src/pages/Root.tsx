import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Bring from "../components/Bring";
const Root = () => {
    return <>
    <Navigation />
    <div className="bodymargin">
    <Outlet />
    <Bring />
    </div>
    <Footer />
    </>
}

export default Root;