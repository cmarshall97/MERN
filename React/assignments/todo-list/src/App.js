import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [newItem,setNewItem] = useState('');
  const[list, setList] = useState([]);

  const submitToDoItem = (e) => {
    e.preventDefault()
    setList([...list,newItem])
  }

  const deleteToDoItem = (e, i) => {
    const filteredList = list.filter((item, index) => {
      list.pop(i);
      return list
    })
  }
    
  return (
    <div >
      <form onSubmit={e => submitToDoItem(e)} >
        <input type="text" onChange={e=>setNewItem(e.target.value)} name="newItem" value={newItem}></input>
        <button> Add </button>
      </form>
      <div>
        {
          list.map((newItem, index) => {
            return (
              <ul>
                <li key={index}> {newItem} </li>
                <button onClick={e=>deleteToDoItem()}> Delete </button>
              </ul>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
