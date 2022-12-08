const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <h1 id={props.taskIndex}>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)}>completed</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};

export default Task;
