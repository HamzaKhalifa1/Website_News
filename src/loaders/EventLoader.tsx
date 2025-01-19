import BlogService  from "../services/BlogService"
import cookies from "js-cookie";

const EventLoader= ()=>{
      const lng = cookies.get('i18next') || 'en';
      const blogs = BlogService.getBlogs(lng);
      return blogs
}

export default EventLoader;