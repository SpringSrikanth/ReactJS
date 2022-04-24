import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState([]);
    const [pending,setPending] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:3001/blogs?_page=1&_limit=5')
            .then((res) => {
                if(!res.ok){
                    throw Error('Something Went Wrong')
                }
                return res.json()
            })
            .then((data)=>{
                setBlogs(data);
                setPending(false);
                setErrorMessage(null)
            }).catch((err) =>{
                console.log('Error occuring while calling the api' , err.message)
                setPending(false);
                setBlogs([]);
                setErrorMessage(err.message)
            })
        },2000)
    },[]);

    return ( 
        <div className="home">
           { errorMessage ? <h4 style={{color:'red'}}>{errorMessage}</h4> : null}
           { pending ? <h4>Loading</h4> :  blogs?.length > 0 ? <BlogList blogs={blogs} /> : <h3>No blogs !!!</h3> }
        </div>
     );
}
 
export default Home;