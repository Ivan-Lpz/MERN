import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';


function App() {

    const [newTodo, setNewTodo] = useState("");

    const [todos, setTodos] = useState([]);



    const handleNewTodoSubmit = (event) => {
        event.preventDefault();


        if (newTodo.length < 3) {
            return;
        }


        const todoItem = {
            text: newTodo,
            complete: false
        }

        // setTodos and pass in a brand new array containing all current todos plus 1 more.
        setTodos([...todos, todoItem]);
        setNewTodo("");
    };

    const handleTodoDelete = (delIdx) => {
        const filterdTodos = todos.filter((todo, i) => {
            return i !== delIdx;
        });

        setTodos(filterdTodos);
    }

    const handleToggleComplete = (idx) => {
        const updatedTodos = todos.map((todo, i) => {
            if (idx === i) {
                todo.complete = !todo.complete;

                //To avoid mutating the todo directly, do this:
                // const updatedTodo = { ...todo, complete: !todo.complete };
                // return updatedTodo;
            }
            return todo;
        });

        setTodos(updatedTodos);
    }



    return (
        <div style={{ textAlign: "center" }}>
            <form onSubmit={(event) => {
                handleNewTodoSubmit(event);
            }}>
                <input onChange={(event) => {
                    setNewTodo(event.target.value);
                }}
                    text="text"
                    value={newTodo} />
                <div>
                    <button>Add</button>
                </div>
            </form>


            {
                todos.map((todo, i) => {

                    return (
                        <Todo 
                        key={i} 
                        todo={todo} 
                        handleToggleComplete={handleToggleComplete} 
                        i={i} 
                        handleTodoDelete={handleTodoDelete}/>
                    );
                })
            }
        </div>
    );
}

export default App;
