import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: '할일1',
      body: '할일1',
      isDone: false,
    },
    {
      id: uuidv4(),
      title: '할일2',
      body: '할일2',
      isDone: true,
    },
    {
      id: uuidv4(),
      title: '할일3',
      body: '할일3',
      isDone: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
    return;
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    );
  };

  return (
    <div className='App'>
      <Header />
      <AddTodo
        handleSubmit={handleSubmit}
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
      />
      <div>
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          isDoneState={false}
        />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          isDoneState={true}
        />
      </div>
    </div>
  );
}

export default App;
