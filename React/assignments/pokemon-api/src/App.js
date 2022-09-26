import {useState,useEffect} from 'react';
//useEffect handles side effects

import './App.css';

function App() {

  const [state, setState] = useState([])

  useEffect(() =>{
    //base URL from API which is a request to an API endpoint/address
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    //two functions chained together on fetch function
    //.then handles success
    //.catch handles any errors
    .then((result)=>{
      return result.json() //convert what we get back to json
    }).then((res)=>{
      console.log(res)
      setState(res.results)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  //dependency array is an empy array where there is no conditiion in which it should run again 

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
