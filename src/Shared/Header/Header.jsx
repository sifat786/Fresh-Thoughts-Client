import useAuth from "../../Hooks/useAuth";
import {  Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import userDefaultPic from '../../assets/images/userDefaultPic.png';



const Header = () => {

    const {user, logOut} = useAuth();
    
    const navLinks = (
        <>
            <li>
                <NavLink className={({ isActive }) =>
                            isActive
                                ? " font-semibold text-lg bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text"
                                : "font-medium text-lg"
                            } 
                            to="/"
                >Home</NavLink>
            </li>

            <li>
                <NavLink className={({ isActive }) =>
                            isActive
                                ? " font-semibold text-lg bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text"
                                : "font-medium text-lg"
                            } 
                            to="/addBlogs"
                >Add Blogs</NavLink>
            </li>

            <li>
                <NavLink className={({ isActive }) =>
                            isActive
                                ? " font-semibold text-lg bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text"
                                : "font-medium text-lg"
                            } 
                            to="/allBlogs"
                >All Blogs</NavLink>
            </li>

            <li>
                <NavLink className={({ isActive }) =>
                            isActive
                                ? " font-semibold text-lg bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text"
                                : "font-medium text-lg"
                            } 
                            to="/featured"
                >Featured Blogs</NavLink>
            </li>

            <li>
                <NavLink className={({ isActive }) =>
                            isActive
                                ? " font-semibold text-lg bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text"
                                : "font-medium text-lg"
                            } 
                            to="/wishlist"
                >Wishlist</NavLink>
            </li>
        </>
    ); 

  return (
    <div className="bg-purple-50 shadow-md md:px-14">
        <div className="navbar py-4 md:py-[30px] px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden px-0 md:px-3">
                            <FaBars className="text-xl md:text-2xl"/>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-10 p-3 shadow rounded-box w-52 bg-gradient-to-bl from-rose-100 to-teal-100"
                        >
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <h1 className="ml-3 text-xl md:ml-2 lg:ml-0 md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">Fresh Thoughts</h1>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>

                <div className="navbar-end gap-2 md:gap-5 items-center ">

                    {
                        !user && 
                        <div>
                            <Link to={'/login'}>
                                <button className="w-fit py-1 px-[10px] md:py-2 md:px-5 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-red-600 via-red-400 to-red-200 rounded-[5px] text-white text-sm md:text-lg md:font-medium">Sign In</button>
                            </Link>
                            <Link to={'/register'} className="ml-1 md:ml-2">
                                <button className="w-fit py-1 px-[10px] md:py-2 md:px-5 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-red-600 via-red-400 to-red-200 rounded-[5px] text-white text-sm md:text-lg md:font-medium">Sign Up</button>
                            </Link>
                        </div>
                    }
                    {
                        user &&
                        <button onClick={logOut} className="w-fit py-1 px-[10px] md:py-2 md:px-5 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-red-600 via-red-400 to-red-200 rounded-[5px] text-white text-sm md:text-lg md:font-medium">Sign Out</button> 
                    }
                    {
                        user && 
                        <div title={user.displayName} className="dropdown dropdown-end flex z-10">
                            <div role="button" className= 'tooltip tooltip-left md:tooltip-bottom border-4 border-red-500 rounded-full'>
                                <div  className="w-8 h-8 md:w-10 md:h-10 rounded-full">
                                    <img referrerPolicy="no-referrer" className="rounded-full w-full h-full" src={user.photoURL === null ? userDefaultPic : user?.photoURL}/>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
    </div>
  );
};

export default Header;