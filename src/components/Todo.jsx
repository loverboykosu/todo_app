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
    console.log(todoList);
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
        <div>
          <ul>
            {isAdd
              ? todoList.map((element) => {
                  return <li>{element}</li>;
                })
              : null}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
