import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineCategory } from "react-icons/md";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import toast from "react-hot-toast";


const Wishlist = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [wishlistData,setWishlistData] = useState([]);

    const { isLoading, refetch } = useQuery({
        queryKey: ["wishlist", user?.uid],
        queryFn: async () => {
          try {
            const res = await axiosSecure.get(`/wishlist/${user?.uid}`);
            setWishlistData(res.data);
            return res.data;
          } catch (error) {
            console.log(error);
          }
        },
      });
    
      useEffect(() => {
        refetch();
      }, [user, refetch]);


      const handleDeleteWishlist = id => {
        axiosSecure.delete(`/wishlist/${id}`)
        .then(res => {
            if(res.data.deletedCount > 0) {
                toast.success('Blog deleted successfully');
                const remaining = wishlistData.filter(item => item._id !== id);
                setWishlistData(remaining);
            }
        })
      }
    

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
                    wishlistData?.map(blog => {

                      const {_id, category, image, title, short_description} = blog;

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

                                <button onClick={() => handleDeleteWishlist(_id)} className="px-8 lg:px-10 py-2 text-sm md:text-base  text-white uppercase duration-300  bg-black rounded-lg lg:w-auto cursor-pointer">
                                  Delete
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

export default Wishlist;