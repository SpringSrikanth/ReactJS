const BlogDetails = ({blog}) => {
    return (  
        <div>
            <div>ID: {blog.id}</div>
            <div>Title: {blog.title}</div>
            <div>Description: {blog.description}</div>
        </div>
    );
}
 
export default BlogDetails;