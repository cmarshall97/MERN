import {useState,useEffect} from 'react';
//useEffect handles side effects

import logo from './logo.svg';
import './App.css';

function App() {

  const [state, setState] = useState(0)

  useEffect(() =>{
    setState(state +1)
  },[])
  //dependency array is an empy array where there is no conditiion in which it should run again 

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
