import { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // const newTodoList = [newTask, ...todoList];
    // setTodoList(newTodoList);
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    // setTodoList(task.taskName !== "" ? [task, ...todoList] : todoList);
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  // const deleteTask = (index) => {
  //   const newTodoList = todoList.filter((value, key) => {
  //     // if (key === index) {
  //     //   return false;
  //     // } else {
  //     //   return true;
  //     // }
  //     return key !== index;
  //   });

  //   setTodoList(newTodoList);
  // };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
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
        {todoList
          .map((task, key) => {
            return (
              <Task
                taskIndex={key}
                taskName={task.taskName}
                completed={task.completed}
                id={task.id}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            );
          })
          .sort()
          .reverse()}
        {/* sort().reverse() is to show the last input first */}
      </div>
    </div>
  );
}

export default App;
