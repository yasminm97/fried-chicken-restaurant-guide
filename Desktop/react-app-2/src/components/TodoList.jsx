import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault(); 
    if (newTodo.trim() === '') alert("enter todo item"); 
    setTodos([...todos, newTodo]);
    setNewTodo(''); 
  };

    const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1); 
    setTodos(newTodos);
  };
  return(
        <div className='todo'>
        <h2>Todo List</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className='delete' onClick={() => handleDelete(index)}> <FontAwesomeIcon icon={faTrashAlt} /></button>
          </li>
        ))}
      </ul>
        </div>
        
    );
}
export default TodoList;