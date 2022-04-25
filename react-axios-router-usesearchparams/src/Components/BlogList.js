import { useEffect, useState } from "react";
import Api from "../Axios/Api";


const BlogList = () => {
    const [blogs,setBlogs]= useState([]);
    const [totalCount,setTatalCount]= useState(0);
    const [pageIndex,setPageIndex]= useState(0);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        async function loadData(page,pageSize){
            const res = await Api.get(`blogs/userId/${page}/${pageSize}/true`);
            setBlogs(res.data.blogs);
            setTatalCount(res.data.totalCount);
            setPageIndex(pageIndex+1);
        }
        setLoading(true);
        loadData(0,5);
        setLoading(false);
    },[])

    async function lazyLoad(page,pageSize){
        const res = await Api.get(`blogs/userId/${page}/${pageSize}/true`);
        setBlogs([...blogs, ...res.data.blogs]);
        setTatalCount(res.data.totalCount);
        setPageIndex(pageIndex+1);
    }

    const handleScroll = async (e)=>{
        // console.log(e.target.clientHeight, Math.round(e.target.scrollTop),e.target.scrollHeight)
        if(e.target.clientHeight + Math.round(e.target.scrollTop) === e.target.scrollHeight  &&  blogs.length !== totalCount){
            setLoading(true);
            await lazyLoad(pageIndex,5)
            setLoading(false);
        }
    }
    
    return ( 
        <div className="container">
            {
            loading ?
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> : null
            }
            <ul className="list-group" style={{maxHeight:"400px", height:"400px" , overflowX:"auto"}} onScroll={handleScroll}>
                {blogs.map(({_id,title,description})=>(
                    <li className="list-group-item col-md-6" key={_id}>
                       <h3>{title}</h3>
                       <p>{description}</p>  
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default BlogList;