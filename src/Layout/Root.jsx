import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Shared/Header/Header";



const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            

            <ScrollRestoration/>
        </div>
    );
};

export default Root;