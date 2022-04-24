import logo from './logo.svg';
import './App.css';
import BlogList from './BlogList';
const blogs =[
  {
    "id":1,
    "title":"Blog 1",
    "description":"Blog 1 Description",
    "author":"Srikanth Yenagandula"
  },
  {
    "id":2,
    "title":"Blog 2",
    "description":"Blog 2 Description",
    "author":"Srikanth Yenagandula"
  },
  {
    "id":3,
    "title":"Blog 3",
    "description":"Blog 3 Description",
    "author":"Srikanth Yenagandula"
  },
  {
    "id":4,
    "title":"Blog 4",
    "description":"Blog 4 Description",
    "author":"Rajkumar Dusa"
  },
  {
    "id":5,
    "title":"Blog 5",
    "description":"Blog 5 Description",
    "author":"Saikumar Lagishetty"
  },
  {
    "id":6,
    "title":"Blog 6",
    "description":"Blog 6 Description",
    "author":"Saikumar Lagishetty"
  }
]
function App() {
  return (
    <div>
      <BlogList blogs={blogs}/>
    </div>
  );
}

export default App;
