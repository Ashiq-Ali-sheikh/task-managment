import React, { useState } from 'react';
import './App.css'; // You can create your CSS for styling
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import DarkModeToggle from './components/DarkModeToggle';
import { TaskContextProvider } from './context/TaskContext'; // Create a TaskContext to manage state
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      
      <div className="task-manager">
        <h1 className='heading'>Task Managment</h1>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <TaskContextProvider>
        <TaskForm />
        <TaskList />
        <ToastContainer />
      </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
