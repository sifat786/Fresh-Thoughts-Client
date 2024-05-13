
import { MdOutlineCategory } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import {useState } from "react";


const BlogDetails = () => {

    const { id } = useParams();
    const { user } = useAuth();
    const loadedData = useLoaderData();
    const {category, image, title, short_description, long_description} = loadedData;
    const [commentText, setCommentText] = useState('');

    const { data: commentsData, refetch: refetchComments } = useQuery({
        queryKey: ['comments', id],
        queryFn: async () => {
            try {
                const res = await axios.get(`http://localhost:5000/comments/${id}`);
                return res.data;
            } catch (error) {
                console.log(error);
            }
        }
    });

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (user.email === loadedData.email) {
            toast.error('You cannot comment on your own blog!');
            return;
        }
        try {
            await axios.post('http://localhost:5000/comments', {
                blogId: id,
                text: commentText,
                userId: user.uid,
                userName: user.displayName,
                userProfilePic: user.photoURL
            });
            toast.success('Your comment has been successfully posted!');
            setCommentText('');
            refetchComments();
        } catch (error) {
            console.error('Error posting comment:', error);
            toast.error('Failed to post comment. Please try again later.');
        }
    };

    const isBlogOwner = user && user.email === loadedData.email;

    return (
        <div className="container my-10">

            <div className="mx-auto md:p-16">
                <div className="flex flex-col max-w-4xl mx-auto overflow-hidden rounded-xl">
                    <img src={image} className="w-full h-[300px] md:h-[400px] rounded-xl object-cover" />
                    <div className="p-6 pb-10 m-4 mx-auto -mt-16 space-y-3 lg:max-w-3xl lg:rounded-md bg-gray-50 shadow-md">
                        <p className=" text-xl md:text-2xl font-semibold lg:text-3xl">{title}</p>
                        <div className="flex items-center gap-1">
                            <MdOutlineCategory className="text-xl text-red-500"/>
                            <h6 className="text-lg font-medium text-red-500">{category}</h6>
                        </div>
                        <div>
                            <p>{short_description}</p>
                            <p className="mt-3">{long_description}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* //* comments section: */}
            <hr className="md:w-[82%] lg:w-[72%] mx-auto border-2 border-red-500 mt-[-30px] hidden md:block"/>
            <div className="md:max-w-xl lg:max-w-3xl mx-auto md:mt-3">
                <h4 className="md:text-xl lg:text-2xl font-semibold mb-3">Comments</h4>
                {
                    isBlogOwner ? 
                        (
                            <p className="text-gray-600">You cannot comment on your own blog.</p>
                        ) 
                        
                        : 

                        (
                            <form onSubmit={handleCommentSubmit}>
                                <textarea
                                    placeholder="Write your comment..."
                                    className="textarea textarea-bordered textarea-lg w-full text-base md:h-[150px]"
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                />
                                <div className="flex justify-end mt-1">
                                    <input
                                        type="submit"
                                        value="Post"
                                        className="px-10 py-2 w-full text-white uppercase bg-red-600 rounded-lg md:w-auto hover:bg-red-700 focus:bg-black cursor-pointer"
                                    />
                                </div>
                            </form>
                        )
                }

                {
                    commentsData?.map(comment => (
                        <div key={comment._id} className="p-4 md:px-6 bg-red-50 rounded-md mt-6 shadow">
                            <div className="flex items-center gap-3">
                                <img src={comment.userProfilePic} className="self-center flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border rounded-full " />
                                <div>
                                    <h4 className="md:text-lg font-semibold text-left">{comment.userName}</h4>
                                    <p className="text-xs md:text-sm">{comment.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>

            {
                isBlogOwner && 
                (
                    <button onClick={() => {/* Navigate to update route */}} className="block mx-auto mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg">
                        Update Blog
                    </button>
                )
            }

        </div>
    );
};

export default BlogDetails;