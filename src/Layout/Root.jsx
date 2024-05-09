import { Outlet, ScrollRestoration } from "react-router-dom";



const Root = () => {
    return (
        <div>
            
            <Outlet/>
            
            <ScrollRestoration/>
        </div>
    );
};

export default Root;