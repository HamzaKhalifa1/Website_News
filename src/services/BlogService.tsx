import axios from "axios";

class BlogService {

     static getBlogs = async (lng:string) => {
        try {
            const response = await axios.get(`http://localhost:8000/${lng}`);
            const data = response.data;
            return data || [];
        } catch (error) {
            console.error("Error fetching blogs:", error);
            return [];
        }
    };

    static postBlog = async (data: { title: string; description: string; imageUrl: string },lng:string) => {
        try {
            await axios.post(`http://localhost:8000/${lng}`, data);
        } catch (error) {
            console.error("Error posting blog:", error);
        }
    };

    static putBlog=async (data: { title: string; description: string; imageUrl: string },id:any,lng:string)=>{
        try{
            await axios.put(`http://localhost:8000/${lng}/${id}`, data)
        }catch (error){
            console.log("Error updating blog:", error)
        }

    }

    static deleteBlogs = async (id: any,lng:string) => {
        try {
            await axios.delete(`http://localhost:8000/${lng}/${id}`);
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

}

export default BlogService;
