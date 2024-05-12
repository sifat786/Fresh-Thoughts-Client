// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


// const BlogDetails = () => {

//     const id = useParams();
//     const [singleData, setSingleData] = useState([]);

//     const {data : blog,isLoading, error} = useQuery({
//         queryKey: ['blog'],
//         queryFn: async () => {
//           try {
//             const res = await axios(`http://localhost:5000/blogs`);
//             return res.data;
            
//           } catch (e) {
//             console.log(e);
//             throw error;
//           }
//         }
//     })

//     useEffect(() => {
//         if(blog) {
//             const result = blog.find(i => i._id == id)
//             setSingleData(result);
//         }
//     }, [id,blog])

//     console.log(singleData);

//     return (
//         <div>
            
//         </div>
//     );
// };

// export default BlogDetails;