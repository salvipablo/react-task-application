import { createContext, useState, useEffect } from "react";

import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  let [newIdTask, setNewIdTask ] = useState(4);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, {
      id: newIdTask,
      title: task.title,
      description: task.description
    }]);
    setNewIdTask(newIdTask = newIdTask + 1);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}