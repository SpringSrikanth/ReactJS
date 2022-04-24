import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import axios from "axios";

const Home = () => {
    const [blogs,setBlogs] = useState([]);
    const [pending,setPending] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const [page,setPage] =useState(1);

    const loadData = () =>{
        loadLazyData(page+1);
        setPage(page+1);
    }

    useEffect(()=>{
        axios.get(
            'http://localhost:3001/blogs',
             { params: { _page: 1, _limit: 5 } }
        ).then(res => {
            return res.data
        }).then(data=>{
            setBlogs(data);
            setPending(false);
            setErrorMessage(null)
        })
        .catch(err=>{
            console.log('Error occuring while calling the api' , err.message)
            setPending(false);
            setBlogs([]);
            setErrorMessage(err.message)
        })
    },[]);

    function loadLazyData(index){
        axios.get(
            'http://localhost:3001/blogs',
             { params: { _page: index, _limit: 5 } }
        ).then(res => {
            return res.data
        }).then(data=>{
            setBlogs([...blogs,...data]);
        })
        .catch(err=>{
            console.log('Error occuring while calling the api' , err.message)
        })
    }

    return ( 
        <div className="home">
           { errorMessage ? <h4 style={{color:'red'}}>{errorMessage}</h4> : null}
           { pending ? <h4>Loading</h4> : <BlogList blogs={blogs} loadData={loadData} />  }
        </div>
     );
}
 
export default Home;