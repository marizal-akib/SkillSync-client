import { Outlet } from "react-router-dom";
import Navbar from "../commons/Navbar";
import Footer from "../commons/Footer";


const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;