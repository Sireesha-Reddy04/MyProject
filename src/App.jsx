

import { useState } from "react";
import TodoItem from "./TodoItem";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const removeTaskWithIndex = (index) => {
    setTasks((currentValue) => {
      const updatedArray = currentValue.filter((_, i) => i !== index);
      return updatedArray;
    });
  };

  const handleButtonClick = () => {
    setTasks((currentValue) => {
      const updatedArray = [...currentValue, currentTask];
      return updatedArray;
    });
    setCurrentTask("");
  };

  return (
    <main className="text-center">
      <h1 className="text-black text-4xl font-bold py-10">MY TODO LIST</h1>
      <div>
        <input
          type="text"
          value={currentTask}
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
          placeholder="Add A New Task"
          className="p-4 w-[70%] border border-blue-800"
        />
        <button
          onClick={handleButtonClick}
          className="bg-gray-700 text-white p-4 rounded-md ml-6"
        >
          ADD
        </button>
      </div>
      <ol id="taskList" className="space-y-3 p-6 max-w-lg mx-auto">
        {tasks.map((task, index) => (
          <TodoItem
            todo={task}
            removeTaskWithIndex={removeTaskWithIndex}
            index={index}
            key={index}
          />
        ))}
      </ol>
    </main>
  );
};

export default App;

