export const TaskTable = ({ taskItems, toggleTask }) => {
  return (
    <table className="tasksTable">
      <thead>
        <tr>
          <th>Task Name</th>
        </tr>
      </thead>
      <tbody>
        {taskItems.map((task) => (
          <tr key={task.name} >
            
            <td>{task.name}</td>
            <input type="checkbox"
            checked = {task.done}
            onChange={() => toggleTask(task)}></input>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
