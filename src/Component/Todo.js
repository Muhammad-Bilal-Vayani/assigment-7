// src/Todo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../Stored/Slice/todoSlice';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    dispatch(updateTodo({ id: todo.id, text: editText }));
    setEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div>
          {todo.text}
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Todo;
