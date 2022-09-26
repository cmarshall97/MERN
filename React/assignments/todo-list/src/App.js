import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [newItem,setNewItem] = useState('');
  const[list, setList] = useState([]);

  const submitToDoItem = (e) => {
    e.preventDefault()
    setList([...list,newItem])
    //allows empty items to not be added
    if (newItem.length == 0){
      return;
    }

    const todoItem = {
      text: newItem,
      complete: false
    };
  }
//delete function
  const deleteToDoItem = (i) => {
    //do a loop over the array your working with and give you the index of the item
    const filteredList = list.filter((newItem, index) => {
      // if the index does not equal the index (i) of the item I want to delete, I want to keep it. If the index matches then it return true and we delete the item
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
              <ul style={{display: 'flex'}}>
                <input type="checkbox" ></input>
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
