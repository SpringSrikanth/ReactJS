import './App.css';
import WishMe from './WishMe';

function App() {
  const hours = new Date().getHours() || 10;
  const name = 'Srikanth'
  return (
    <div>
      {hours > 20 && hours < 24 ?
        <WishMe msg="Good Night" name={name}/>
        : hours < 20 && hours > 16 ? <WishMe msg="Good Evening" name={name}/>
        : hours < 16 && hours > 12 ? <WishMe msg="Good Afternoon" name={name}/> 
        : <WishMe msg="Good Morning" name={name}/>}

    </div>
  );
}

export default App;
