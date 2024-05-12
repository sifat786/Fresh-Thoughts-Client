
import { MdOutlineCategory } from "react-icons/md";
import { useLoaderData } from "react-router-dom";


const BlogDetails = () => {

    const blogData = useLoaderData();
    const {category, image, title, short_description, long_description} = blogData;

    const handleComments = (e) => {
        e.preventDefault();
        const form = e.target;
        const comments = form.comments.value;
        form.reset();
    }

    return (
        <div className="container my-10">

            <div className="mx-auto md:p-16">
                <div className="flex flex-col max-w-4xl mx-auto overflow-hidden rounded-xl">
                    <img src={image} className="w-full h-[300px] md:h-[400px] rounded-xl" />
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
                <form onSubmit={handleComments}>
                    <textarea 
                        placeholder="Write your comment..." 
                        className="textarea textarea-bordered textarea-lg w-full text-base md:h-[150px]"
                        name="comments"
                    />
                    <div className="flex justify-end mt-1">
                        <input 
                            type="submit" 
                            value="Post" 
                            className="px-10 py-2 w-full text-white uppercase bg-red-600 rounded-lg md:w-auto hover:bg-red-700 focus:bg-black cursor-pointer"
                        />
                    </div>
                </form>

                <div className="p-4 md:px-6  bg-red-50 rounded-md mt-6 shadow">
                    <div className="flex items-center gap-3">
                        <img src="https://source.unsplash.com/75x75/?portrait" className="self-center flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border rounded-full " />
                        <div className="md:space-y-1">
                            <h4 className="md:text-lg font-semibold text-left">Leroy Jenkins</h4>
                            <p className="text-xs md:text-sm">Sed non nibh iaculis, posuere diam vitae, consectetur neque.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BlogDetails;