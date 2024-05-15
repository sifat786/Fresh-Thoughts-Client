import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root';
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from '../Pages/Home/Home';
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";
import WishlistDetails from "../Pages/WishlistDetails/WishlistDetails";
import AddBlog from './../Pages/AddBlog/AddBlog';
import AllBlog from './../Pages/AllBlog/AllBlog';
import Featured from './../Pages/Featured/Featured';
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import Wishlist from './../Pages/Wishlist/Wishlist';
import PrivateRoute from './PrivateRoute';


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
            element: <PrivateRoute><AddBlog/></PrivateRoute>
        },
        {
            path: '/updateBlog/:id',
            element: <PrivateRoute><UpdateBlog/></PrivateRoute>,
            loader: ({params}) => fetch(`https://fresh-thoughts-server.vercel.app/blogs/${params.id}`)
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
            element: <PrivateRoute><Wishlist/></PrivateRoute>
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
          loader: ({params}) => fetch(`https://fresh-thoughts-server.vercel.app/blogs/${params.id}`)
        },
        {
          path: '/wishlistDetails/:id',
          element: <PrivateRoute><WishlistDetails/></PrivateRoute>,
          loader: ({params}) => fetch(`https://fresh-thoughts-server.vercel.app/wishlistById/${params.id}`)
        },
      ]
    },
]);

export default router;