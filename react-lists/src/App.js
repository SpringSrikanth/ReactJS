import './App.css';
import MoviesList from './MoviesList';

const iplTeams = ['Chennai Super Kings', 'Mumbai Indians', 'Rajastan Royals','Gujarat Titans','Kolkata Knight Riders']
const liItems = iplTeams.map((item,index) =>( 
  <li className="list-group-item" key={index}>{item}</li>
))

const movies =['KGF Chapter 2', 'RRR'];

function App() {
  return (
    <div className='container'>
      <div className='row mb-3 mt-3'>
        <h4>IPL Teams 2022</h4>
        <ul className="list-group">{liItems}</ul>
      </div>
      <div className='row mb-3 mt-3'>
        <h4>IPL Teams 2022</h4>
        <MoviesList movies={movies}/>
      </div>
    </div>
  );
}

export default App;
