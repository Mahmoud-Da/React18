import React, { useState } from "react";

const TodoList = () => {
  const [todoLists, setTodoLists] = useState([
    { id: 1, title: "List 1" },
    { id: 2, title: "List 2" },
  ]);

  const handleClick = () => {
    setTodoLists(
      todoLists.map((todoList) =>
        todoList.id === 1 ? { ...todoList, title: "List n" } : todoList
      )
    );
  };
  return (
    <>
      <div className="mb-3">TodoList</div>
      <ul>
        {todoLists.map((todoList) => (
          <li key={todoList.id}>{`Title: ${todoList.title}`}</li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleClick}>
        Click
      </button>
    </>
  );
};

export default TodoList;
