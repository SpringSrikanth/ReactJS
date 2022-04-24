import BlogDetails from "./BlogDetails";

const BlogList = ({ blogs }) => {
    return (
        <div>
            {blogs.map((blog) =>
                <BlogDetails key={blog.id} blog={blog} />)
            }
        </div>
    );
}
 
export default BlogList;