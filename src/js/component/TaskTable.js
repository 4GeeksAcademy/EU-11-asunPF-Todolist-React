export const TaskTable = ({ taskItems }) => {
  return (
    <table className="tasksTable">
      <thead>
        <tr>
          <th>Task Name</th>
        </tr>
      </thead>
      <tbody>
        {taskItems.map((task) => (
          <tr key={task.name}>
            <td>{task.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
