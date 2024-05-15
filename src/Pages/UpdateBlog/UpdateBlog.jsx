import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const UpdateBlog = () => {

    const axiosSecure = useAxiosSecure();
    const loadedData = useLoaderData();
    const navigate = useNavigate();
    const { _id, category, image, title, short_description, long_description } = loadedData;

    const handleUpdateBlog = e => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const category = form.category.value;
        const image = form.photo.value;
        const short_description = form.short.value;
        const long_description = form.long.value;
        const updateBlog = {title, category, image, short_description, long_description};
         

        axiosSecure.put(`/blogs/${_id}`, updateBlog)
        .then(res => {
            if(res.data.modifiedCount > 0) {
                toast.success('Blog updated successfully');
                navigate(-1);
            }
        }).catch(err => console.log(err))
    }

    return (
        <div className="container my-10 md:my-[70px] lg:my-[100px]">
            <form onSubmit={handleUpdateBlog} className="border-2 border-red-400 py-10 px-6 md:px-10 lg:px-14 rounded-xl">
                <h1 className="text-center text-2xl md:text-[35px] font-semibold mb-5 md:mb-10">Update <span className="text-red-500">Blog</span></h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="md:text-xl ">Title</label>
                            <input type="text" name="title" defaultValue={title} required placeholder="Enter blog title" className="input input-error mt-2 py-[11px] pl-[11px]   text-base w-full rounded-md " />
                        </div>
                        <div className=" flex flex-col">
                            <label className=" md:text-xl">Category</label>
                            <select name="category" defaultValue={category} required className="select select-error mt-2 pl-[11px]  text-base w-full  rounded-md">
                                <option selected hidden>Enter blog category</option>
                                <option>Travel</option>
                                <option>Food</option>
                                <option>Arts & Culture</option>
                                <option>Health & Wellness</option>
                                <option>Technology</option>
                                <option>Fashion</option>
                                <option>Education</option>
                                <option>Photography</option>
                                <option>Gaming</option>
                            </select>
                        </div>
                        <div>
                            <label className="md:text-xl">Image</label>
                            <input type="url" name="photo" defaultValue={image} required placeholder="Enter blog photo" className="input input-error mt-2 py-[11px] pl-[11px]   text-base w-full  rounded-md " />
                        </div>
                        <div>
                            <label className="md:text-xl ">Short Description</label>
                            <input type="text" name="short" defaultValue={short_description} required placeholder="Enter a short description" className="input input-error mt-2 py-[11px] pl-[11px]   text-base w-full font-rale rounded-md " />
                        </div>

                        <div className="col-span-full">
                            <label className="md:text-xl">Long Description</label>
                            <textarea name="long" defaultValue={long_description} required className="textarea textarea-error text-base w-full  rounded-md h-32 pl-[11px] mt-1" placeholder="write a long description here..."></textarea>
                        </div>
                        <div className="col-span-full mt-5 flex justify-center lg:justify-end">
                            <input type="submit" value="Update Blog" className='py-[10px] bg-red-600 text-center rounded-[5px] w-full lg:w-auto px-0 lg:px-[60px] cursor-pointer text-white text-2xl font-medium'/>
                        </div>
                    </div>
            </form>
        </div>
    );
};

export default UpdateBlog;