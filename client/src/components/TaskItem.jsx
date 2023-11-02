import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { deleteTask, getTasks, markTaskAsCompleted } from '../services/api';
import { toast } from 'react-toastify';

const TaskItem = ({ task }) => {
  const { dispatch } = useTaskContext();

  const toggleTask = async () => {
    try {
      await markTaskAsCompleted(task._id);
      dispatch({ type: 'TOGGLE_TASK', payload: task._id });
      toast.success("Task Completed")
      const tasks = await getTasks();
      dispatch({ type: 'SET_TASKS', payload: tasks });
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };
  
  const DeleteTask = async () => {
    try {
      await deleteTask(task._id);
      dispatch({ type: 'DELETE_TASK', payload: task._id });
      toast.success("Task deleted")
      const tasks = await getTasks();
      dispatch({ type: 'SET_TASKS', payload: tasks });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-cell">{task.title}</div>
      <div className="task-cell">{task.description}</div>
      <div className="task-cell">
        <input type="checkbox" checked={task.completed} onChange={toggleTask} />
        <button style={{marginLeft:"10px"}}  onClick={DeleteTask}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
