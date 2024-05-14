
import { useQuery } from "@tanstack/react-query";
import { MdOutlineCategory } from "react-icons/md";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from "react-router-dom";
import useAxiosSecure from './../../Hooks/useAxiosSecure';
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Blogs = () => {

  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();

  const addToWishlist = async (blogId, userId, name, email, category, image, title, short_description, long_description) => {
    try {
      const res = await axiosSecure.get(`/wishlist/${userId}`);
      const wishlist = res.data;
      const isAlreadyInWishlist = wishlist.some(item => item.blogId === blogId);

      if (isAlreadyInWishlist) {
        toast.error('Blog is already wishListed');
      } else {
        await axiosSecure.post('/wishlist/add', { blogId, userId, name, email, category, image, title, short_description, long_description });
        toast.success('Blog added to wishlist');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      try {
        const res = await axiosSecure("/blogs");
        return res.data;
      } catch (e) {
        console.log(e);
        throw error;
      }
    },
  });
 

  return (
    <div id="blog" className="mt-0 mb-10 md:my-[60px] lg:my-[110px]">

        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white lg:text-4xl">Our Recent <span className="text-red-500">Blogs</span></h2>
        <p className="w-auto md:w-[580px] text-center mx-auto mt-4 mb-8 text-neutral-600 dark:text-gray-600">Stay up to date with our latest blog posts! Discover insightful articles, helpful tips, and engaging stories on a variety of topics. Explore our most recent content below and dive into the world of inspiration and knowledge.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-10">

          {
            isLoading ?
                <SkeletonTheme baseColor="#e6e9ed" highlightColor="#c1c4c7">
                    <p><Skeleton count={20} /></p>
                    <p><Skeleton count={20} /></p>
                    <p><Skeleton count={20} /></p>
                    <p><Skeleton count={20} /></p>
                    <p><Skeleton count={20} /></p>
                    <p><Skeleton count={20} /></p>
                </SkeletonTheme>
                
            :
                <>      
                  {
                    blogs.slice(0, 6)?.map(blog => {

                      const {_id, category, image, title, short_description, long_description} = blog;

                      return (
                        <div key={_id} className="card lg:w-96 glass">
                          <figure><img className="object-cover h-[230px] w-full" src={image} alt="blog-image" /></figure>

                          <div className="card-body">
                            <h2 className="card-title text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
                            <div className="flex items-center gap-1">
                              <MdOutlineCategory className="text-xl text-red-500"/>
                              <h6 className="text-lg font-medium text-red-500">{category}</h6>
                            </div>
                            <p>{short_description}</p>

                            <div className="flex justify-between lg:justify-center lg:gap-12 mt-2">
                                <Link to={`/blogDetails/${_id}`}>
                                  <button className="px-8 lg:px-10 py-2 text-sm md:text-base text-white uppercase duration-300  bg-red-600 rounded-lg lg:w-auto hover:bg-red-700 cursor-pointer">
                                    Details
                                  </button>
                                </Link>

                                <button onClick={() =>  addToWishlist(_id, user?.uid, user?.displayName, user?.email, category, image, title, short_description, long_description)} className="px-8 lg:px-10 py-2 text-sm md:text-base  text-white uppercase duration-300  bg-black rounded-lg lg:w-auto cursor-pointer">
                                  Wishlist
                                </button>
                            </div>

                          </div>
                        </div>
                      )
                    })
                  }
                </>
          }


        </div>

    </div>
  );
};

export default Blogs;
