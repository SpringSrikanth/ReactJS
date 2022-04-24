const MoviesList = ({movies}) => {
    return ( 
        <ul className="list-group">
            {
                movies.map((item,index) =>
                    <li className="list-group-item" key={index}>{item}</li>
                )
            }
        </ul>
     );
}
 
export default MoviesList;