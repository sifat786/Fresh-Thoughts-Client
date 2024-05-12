import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const UseBlogs = () => {

    const {data : blog,isLoading, error} = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
          try {
            const res = await axios(`http://localhost:5000/blogs`);
            return res.data;
            
          } catch (e) {
            console.log(e);
            throw error;
          }
        }
    })

    return {blog, isLoading, error};
    
};

export default UseBlogs;