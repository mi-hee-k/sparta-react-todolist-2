const AddTodo = ({ handleSubmit, title, body, setTitle, setBody }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='할 일 제목'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='할 일 내용'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type='submit'>추가</button>
    </form>
  );
};

export default AddTodo;
