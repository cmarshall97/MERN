import {useState,useEffect} from 'react';
//useEffect handles side effects
import axios from 'axios';

import './App.css';

function App() {

  const [state, setState] = useState([])

  useEffect(() =>{
    //base URL from API which is a request to an API endpoint/address
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    //no longer need to convert to json (axios already does that)
    .then((res)=>{
      console.log(res)
      setState(res.data.results) 
    }).catch((error)=>{ //handles the errors
      console.log(error)
    })
  },[])
  //dependency array is an empy array where there is no condition in which it should run again 

  return (
    <div className="App">
      {
        state.map((pokemon, index)=>(
          <div>
            <h1 key={index}> {pokemon.name} </h1>
          </div>
        ))
      }
    </div>
  );
}

export default App;
