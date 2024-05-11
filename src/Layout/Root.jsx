import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";



const Root = () => {
    return (
        <div className="overflow-x-hidden">
            <Header/>
            <div>
                <Outlet/>
            </div>
            <Footer/>

            <ScrollRestoration/>
        </div>
    );
};

export default Root;