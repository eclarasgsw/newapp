
import '../App.css';
import {useState, useEffect} from 'react';

function ToDo(){
  const url='https://jsonplaceholder.typicode.com/todos';
  const [items, setItems]=useState([]);
  const [inputStatus, setInputStatus]=useState("All");

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(result => {setItems(result);})
    }, []);

  const listItems = items
  .filter(item => {
    if(inputStatus==="Done"){
      return item.completed
    }
    else if(inputStatus==="To Do"){
      return !item.completed
    }
    else{return item}})
  .map(item => {return <li key={item.id}>{item.title} - {item.completed ? "Done" : "To Do"}</li>;})

  return(    
    <div>
     <h2>To Do List</h2>

     <label htmlFor="status">Choose status </label>
     <select 
     id="status" 
     name="status" 
     value={inputStatus} 
     onChange={(e) => {setInputStatus(e.target.value)}}>
      <option value="All" name="All">All</option>
      <option value="To Do" name="To Do">To Do</option>
      <option value="Done" name="Done">Done</option>
     </select>  

     <h3>{inputStatus}</h3>
     <ol>{listItems}</ol>

    </div>
  );
}

export default ToDo;
