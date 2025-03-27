const Todo = () => {
  return (
    <>
      <div>
        <h1 className="bg-gray-900 text-white text-center p-4 text-lg ">
          Todo app
        </h1>

        <p>Add task form</p>
        <input
          className="border-2 border-solid"
          type="text"
          placeholder="Add task form"
        />
        <button className="border-2 border-solid rounded bg-gray-700 text-white p-1">
          Add
        </button>
      </div>
    </>
  );
};

export default Todo;
