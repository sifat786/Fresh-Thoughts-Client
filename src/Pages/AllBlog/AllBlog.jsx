import { useQuery } from "@tanstack/react-query";
import { MdOutlineCategory } from "react-icons/md";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";


const AllBlog = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const addToWishlist = async (blogId, userId, category, image, title, short_description, long_description) => {
      try {
        const res = await axiosSecure.get(`/wishlist/${userId}`);
        const wishlist = res.data;
        const isAlreadyInWishlist = wishlist.some(item => item.blogId === blogId);

        if (isAlreadyInWishlist) {
          toast.error('Blog is already wishListed');
        } else {
          await axiosSecure.post('/wishlist/add', { blogId, userId, category, image, title, short_description, long_description });
          toast.success('Blog added to wishlist');
        }
      } catch (error) {
        console.error(error);
      }
    };

    const {data : blogs,isLoading, error} = useQuery({
      queryKey: ['blog'],
      queryFn: async () => {
        try {
          const res = await axiosSecure(`/blogs`);
          return res.data;
          
        } catch (e) {
          console.log(e);
          throw error;
        }
      }
    })

    return (
        <div className="container my-10 md:my-[70px] lg:my-[100px]">
            
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
                    blogs?.map(blog => {

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

                                <button onClick={() =>  addToWishlist(_id, user?.uid, category, image, title, short_description, long_description)} className="px-8 lg:px-10 py-2 text-sm md:text-base  text-white uppercase duration-300  bg-black rounded-lg lg:w-auto cursor-pointer">
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

export default AllBlog;