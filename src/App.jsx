import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [newTask, ...todoList];
    setTodoList(newTodoList);
  };

  const deleteTask = (index) => {
    const newTodoList = todoList.filter((value, key) => {
      if (key === index) {
        return false;
      } else {
        return true;
      }
    });

    setTodoList(newTodoList);
  };

  return (
    // <div className="App">
    //   <h1 style={{color: "red", fontFamily: "fantasy"}}>Hello World</h1>
    // </div>
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task, key) => {
          return (
            <div>
              <h1 key={key}>{task}</h1>
              <button onClick={() => deleteTask(key)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
