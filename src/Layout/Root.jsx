import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";



const Root = () => {
    return (
        <div>
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