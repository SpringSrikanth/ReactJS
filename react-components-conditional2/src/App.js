import './App.css';
import Message from './Message';

const isUserLoggedIn = true;

function App() {
  if (isUserLoggedIn) {
    return <Message msg="User Logged In Success fully" />
  }
  else {
    return <Message msg="User Login Failed" />
  }
}

export default App;
