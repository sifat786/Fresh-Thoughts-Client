import {createBrowserRouter} from "react-router-dom";
import Root from '../Layout/Root';
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from '../Pages/Home/Home';
import AddBlog from './../Pages/AddBlog/AddBlog';
import AllBlog from './../Pages/AllBlog/AllBlog';
import Featured from './../Pages/Featured/Featured';
import Wishlist from './../Pages/Wishlist/Wishlist';
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import BlogDetails from "../Pages/BlogDetails/BlogDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/addBlogs',
            element: <AddBlog/>
        },
        {
            path: '/allBlogs',
            element: <AllBlog/>
        },
        {
            path: '/featured',
            element: <Featured/>
        },
        {
            path: '/wishlist',
            element: <Wishlist/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/blogDetails/:id',
          element: <PrivateRoute><BlogDetails/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
        },
      ]
    },
]);

export default router;