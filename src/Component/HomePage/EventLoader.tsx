import BlogService  from "../../services/BlogService"
import cookies from "js-cookie";

const EventLoader= ()=>{
      const lng = cookies.get('i18next') || 'en';
      const blogService =new BlogService({});
      const blogs = blogService.getBlogs(lng);
      console.log(blogs)
      return blogs
}

export default EventLoader;