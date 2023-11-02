import React, { useEffect, useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import { getTasks } from '../services/api';

const TaskList = () => {
  const { tasks, dispatch } = useTaskContext();
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    getTasks()
      .then((tasks) => {
        dispatch({ type: 'SET_TASKS', payload: tasks });
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, [dispatch]);
  

  const filteredTasks =
    filter === 'completed'
      ? tasks.filter((task) => task.completed)
      : filter === 'not-completed'
      ? tasks.filter((task) => !task.completed)
      : tasks;

  return (
    <div className="task-filter">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
