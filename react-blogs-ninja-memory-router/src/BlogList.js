const BlogList = ({blogs}) => {
    return ( 
        <div className="blog-list">
            {blogs.map(blog=>(
                <div className="blog-preview" key={blog.id}>
                    <h1>Title: {blog.title}</h1> 
                    <p>Written By: {blog.author}</p>   
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;