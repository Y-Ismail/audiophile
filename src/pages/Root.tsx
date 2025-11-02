import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
const Root = () => {
    return <>
    <Navigation />
    <Outlet />
    <Footer />
    </>
}

export default Root;