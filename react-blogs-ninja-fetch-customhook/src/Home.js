import BlogList from "./BlogList";
import useFetch from "./Hooks/useFetch";

const Home = () => {
    const {data,pending,errorMessage} = useFetch('http://localhost:3001/blogs?_page=1&_limit=5');

    return ( 
        <div className="home">
           { pending ? <h4>Loading</h4> : <BlogList blogs={data} />  }
        </div>
     );
}
 
export default Home;