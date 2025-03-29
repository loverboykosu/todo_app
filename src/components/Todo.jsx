import { useState } from "react";
const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const getChange = (e) => {
    setInput(e.target.value);
  };
  const addList = () => {
    setIsAdd(true);
    setTodoList([...todoList, input]);
    setInput("");
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
        <div className="mt-4 flex justify-center">
          <table className="border-collapse border border-gray-400 ...">
            <thead className=" bg-gray-400">
              <tr>
                <th className="border border-gray-300 px-4">Index</th>
                <th className="border border-gray-300 px-4">Task name</th>
              </tr>
            </thead>
            <tbody>
              {isAdd &&
                todoList.map((element, index) => {
                  return (
                    <tr key={element}>
                      <td className="border border-gray-300">{index + 1}</td>
                      <td className="border border-gray-300">{element}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Todo;
