import React, { useState, useEffect } from "react";
import TaskCreator from "./TaskCreator.js";
import { TaskTable } from "./TaskTable.js";

const TodoList = () => {
  const [taskItems, setTaskItems] = useState([])

  function createNewTask(taskName) {
    if (!taskItems.find(task => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  useEffect(() => {
    let data = localStorage.getItem('task')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <div className="parentContainer">
      <h1>toDos</h1>
      <div className="TodoList-Container">
        <TaskCreator createNewTask={createNewTask} />

        <table className="tasksTable">
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {taskItems.map((task) => (
          <tr key={task.name}>
            <td>{task.name}</td>
            <input type="checkbox"
            checked = {task.done}
            onChange={() => }></input>
          </tr>
        ))}
      </tbody>
    </table>



        
      </div>
    </div>
  );
};

export default TodoList;
