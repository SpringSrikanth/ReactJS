import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState([
        {
            id:1,
            title:'Blog 1',
            description:'Blog 1 Description',
            author:'Srikanth Y'
        },
        {
            id:2,
            title:'Blog 2',
            description:'Blog 2 Description',
            author:'Srikanth Y'
        },
        {
            id:3,
            title:'Blog 3',
            description:'Blog 3 Description',
            author:'Srikanth Y'
        },
        {
            id:4,
            title:'Blog 4',
            description:'Blog 4 Description',
            author:'Srikanth Y'
        }
    ])
    return ( 
        <div className="home">
            <BlogList blogs={blogs} />
        </div>
     );
}
 
export default Home;