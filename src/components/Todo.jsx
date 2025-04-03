import { useState } from "react";
const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [priority, setPriority] = useState("");
  const [priorityList, setPriorityList] = useState([]);
  const priorities = ["H", "M", "L"];
  const [status, setStatus] = useState("");
  const getChange = (e) => {
    setInput(e.target.value);
  };

  const addList = () => {
    if (priority && input) {
      setIsAdd(true);
      setTodoList([...todoList, input]);
      setPriorityList([...priorityList, priority]);
      setInput("");
      setPriority("");
    } else {
      window.alert("Priorityとタスクを入力してください");
    }
  };
  const pushReset = () => {
    setIsAdd(false);
    setTodoList([]);
    setPriority("");
    setInput("");
  };
  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };
  return (
    <>
      <div>
        <h1 className="bg-gray-900 text-white text-center p-4 text-lg ">
          Todo app
        </h1>

        <div className="flex justify-center mt-4">
          {/* ドロップダウンの実装 */}
          <div className="p-2 text-center text-black rounded border-1 border-solid">
            <select value={priority} onChange={handlePriorityChange}>
              <option value="">Priority</option>
              {priorities.map((priority) => {
                return (
                  <option value={priority} key={priority}>
                    {priority}
                  </option>
                );
              })}
            </select>
          </div>
          <input
            className="ml-4 border-2 border-solid"
            type="text"
            placeholder="Add task form"
            onChange={getChange}
            value={input}
          />

          <button
            onClick={addList}
            className="border-2 border-solid rounded bg-gray-700 text-white p-1"
          >
            Add
          </button>
        </div>

        {isAdd && (
          <div className="mt-4 flex justify-center">
            <div className="relative">
              <table className="border-collapse border border-gray-400">
                <thead className="bg-gray-400">
                  <tr>
                    <th className="border border-gray-300 px-4">Index</th>
                    <th className="border border-gray-300 px-4">Priority</th>
                    <th className="border border-gray-300 px-4">Task name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {todoList.map((element, index) => {
                    return (
                      <tr key={index}>
                        <td className="border border-gray-300 text-center">
                          {index + 1}
                        </td>
                        <td className="border border-gray-300 text-center">
                          {priorityList[index]}
                        </td>
                        <td className="border border-gray-300">{element}</td>
                        <td>
                          <div className="flex justify-center">
                            <input type="checkbox" />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="absolute -bottom-10 right-0">
                <button
                  onClick={pushReset}
                  className="bg-gray-900 text-white p-1 rounded"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Todo;
