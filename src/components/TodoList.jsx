import React from 'react';

const TodoList = ({ todos, handleDelete, handleToggle, isDoneState }) => {
  return (
    <div>
      <h2>{isDoneState ? 'done...🎉' : 'ing...🤔'}</h2>
      <div>
        {todos
          .filter((todo) => todo.isDone === isDoneState)
          .map((todo) => {
            return (
              <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <button onClick={() => handleDelete(todo.id)}>삭제</button>
                <button onClick={() => handleToggle(todo.id)}>
                  {isDoneState ? '취소' : '완료'}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
