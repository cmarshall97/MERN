import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [itemInfo,setItemInfo] = useState('')
  const[list, setList] = useState([])

  const submitToDoItem = (e) => {
    e.preventDefault()
    setList([...list,itemInfo]);
  }
  return (
    <div >
      <form onSubmit={e => submitToDoItem(e)} >
        <input type="text" onChange={e=>setItemInfo(e.target.value)} name="itemInfo" value={itemInfo}></input>
        <button> Add </button>
      </form>
    </div>
  );
}

export default App;
