import { FaTrashArrowUp, FaClipboardCheck } from "react-icons/fa6";

function Task({ task, onDeleteTask, onChangeTasks }) {
  return (
    <tr
      className={task.isCompleted ? "completed" : null}
    >
      
      <td>
        {task.description}
      </td>
      <td>
        <FaTrashArrowUp size={20} color={'red'} className="icons" onClick={() => onDeleteTask(task.id)} />
      </td>
      <td>
        <FaClipboardCheck className="icons" size={20} color="green" onClick={() => onChangeTasks(task.id)} />
      </td>
    </tr>
  );
}

export default Task;