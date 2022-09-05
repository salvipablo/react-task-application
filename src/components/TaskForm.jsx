import { useState, useContext } from "react"

import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description
    });
    setTitle('');
    setDescription('');
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escriba su tarea" 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripcion de la tarea..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        >
        </textarea>
        <button className="bg-indigo-500 py-2 px-2 text-white rounded-md hover:bg-indigo-200">
          Guardar
        </button>
      </form>
    </div>
  )
}

export default TaskForm