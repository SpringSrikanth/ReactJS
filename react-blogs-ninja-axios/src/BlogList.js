import React, { useRef } from 'react';
const BlogList = ({blogs,loadData}) => {
    const listInnerRef = useRef();
    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (Math.round(scrollTop) + clientHeight === scrollHeight) {
                loadData(); 
            }
        }
    };
    return ( 
        <div className="blog-list" style={{maxHeight:"300px", height:"280px",overflowX:"auto"}} onScroll={onScroll}  ref={listInnerRef}>
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