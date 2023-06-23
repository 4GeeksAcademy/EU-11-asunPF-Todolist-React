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

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };
  

  useEffect(() => {
    let data = localStorage.getItem('task')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taskItems))
  }, [taskItems])

  const deleteTask = (taskName) => {
    setTaskItems(taskItems.filter((task) => task.name !== taskName));
  };

  const taskCount = taskItems.length;

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
          <tr key={task.name} >
            
            <td>{task.name}</td>

            <td><input className="toMarkDoneTask" type="checkbox"
            checked = {task.done}
            onChange={() => toggleTask(task)}></input>  </td>

           <td className="toDeleteTask"><i  class="fas fa-trash-alt"  onClick={() => deleteTask(task.name)}></i></td>
          </tr>
        ))}
        <div className="taskCount">{taskCount} tasks </div>
      </tbody>
    </table>




        
      </div>
    </div>
  );
};

export default TodoList;


/*

I'm doing the same project but in a much more simpler way in this other repository, here is the url:

https://github.com/4GeeksAcademy/EU-11-asunPF-todolistReact-useState-ul


*/