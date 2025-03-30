import { useState } from "react";
const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const getChange = (e) => {
    setInput(e.target.value);
  };
  const changeOpenState = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };
  const addList = () => {
    setIsAdd(true);
    setTodoList([...todoList, input]);
    setInput("");
  };
  const pushReset = () => {
    setIsAdd(false);
    setTodoList([]);
  };
  return (
    <>
      <div>
        <h1 className="bg-gray-900 text-white text-center p-4 text-lg ">
          Todo app
        </h1>

        <div className="flex justify-center mt-4">
          <input
            className="border-2 border-solid"
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
                    <th className="border border-gray-300 px-4">Task name</th>
                  </tr>
                </thead>
                <tbody>
                  {todoList.map((element, index) => {
                    return (
                      <tr key={index}>
                        <td className="border border-gray-300 text-right pr-4">
                          {index + 1}
                        </td>
                        <td className="border border-gray-300">{element}</td>
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

      {/* ドロップダウンの実装 */}
      <div>
        <button onClick={changeOpenState}>open</button>
        {isOpen && (
          <>
            <p>hello</p>
            <p>hello</p>
          </>
        )}
      </div>
    </>
  );
};

export default Todo;
