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

  const deleteToDoItem = (i) => {
    const filteredList = list.filter((newItem, index) => {
      return index!== i;
    });

    setList (filteredList)
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
                <li key={index} input='checkbox'> {newItem} </li>
                <button onClick={e=>deleteToDoItem(index)}> Delete </button>
              </ul>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
