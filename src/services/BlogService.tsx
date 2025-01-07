import { Component } from "react";
import axios from "axios";

interface Blog {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

interface State {
    blogs: Blog[];
}

class BlogService extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            blogs: [],
        };
    }

    getBlogs = async (lng:string) => {
        try {
            const response = await axios.get(`http://localhost:8000/${lng}`);
            const data = response.data;
            console.log(data);
            this.setState({ blogs: data || [] });
            return data || [];
        } catch (error) {
            console.error("Error fetching blogs:", error);
            return [];
        }
    };

    postBlog = async (data: { title: string; description: string; imageUrl: string },lng:string) => {
        try {
            await axios.post(`http://localhost:8000/${lng}`, data);
        } catch (error) {
            console.error("Error posting blog:", error);
        }
    };

    putBlog=async (data: { title: string; description: string; imageUrl: string },id:any,lng:string)=>{
        try{
            await axios.put(`http://localhost:8000/${lng}/${id}`, data)
        }catch (error){
            console.log("Error updating blog:", error)
        }

    }

    deleteBlogs = async (id: any,lng:string) => {
        try {
            await axios.delete(`http://localhost:8000/${lng}/${id}`);
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

}

export default BlogService;
