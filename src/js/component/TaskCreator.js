import React, { useState} from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskInput, setNewTaskInput] = useState(' ');

  const handleInput = (e) => {
    setNewTaskInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask (newTaskInput);
    localStorage.setItem("tasks", newTaskInput);
    setNewTaskInput(" ");
  };

  return (
    
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="What needs to be done?"
            type="text"
            value={newTaskInput}
            onChange={handleInput}
          />
         
        </form>
      
    
  );
};

export default TaskCreator;


/*<button type="submit">add task</button>*/
