import { FaTrashArrowUp, FaClipboardCheck } from "react-icons/fa6";
import Task from "./Task";


function TaskList({ tasks, onDeleteTask, onChangeTasks }) {
  return (
    <table >
      <thead>
        <tr>
          
          <th >Tarea</th>
          <th >borrar</th>
          <th >marcar</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(t => (
          <Task key={t.id} task={t} onDeleteTask={onDeleteTask} onChangeTasks={onChangeTasks} />
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
