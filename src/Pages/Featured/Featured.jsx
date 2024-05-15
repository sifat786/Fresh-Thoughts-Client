import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DataTable from "react-data-table-component";

const Featured = () => {
  const axiosSecure = useAxiosSecure();
 
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["featuredBlogs"],
    queryFn: async () => {
      try {
        const res = await axiosSecure("/featuredBlogs");
        return res.data;
      } catch (e) {
        console.error("Error fetching featured blogs:", e);
      }
    },
  });
  

  const columns = [
    { name: "Serial Number", selector: (row, index) => index + 1 , sortable: true},
    { name: "Profile Picture", cell: (blogs) => <img className="w-12 h-12 rounded-full my-2" src={blogs.profilePic} alt={blogs.title} />, sortable: true },
    { name: "Name", selector: (blogs) => blogs.name, sortable: true },
    { name: "Title", selector: (blogs) => blogs.title, sortable: true},
  ];

  return (
    <div className="container my-10 md:my-[70px] lg:my-[100px]">
      {isLoading ? (
          <p>Loading...</p>
      ) : (
          <DataTable 
          title="Featured Blogs"
          columns={columns} 
          data={blogs}
        />
      )}

    </div>
  );
};

export default Featured;
