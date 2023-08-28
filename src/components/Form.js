function Form() {
  return (
    <form className="form-container">
      <input placeholder="Post title" />
      <textarea placeholder="Post body" rows={1} cols={60} />
      <button className="btn add-btn">Add Post</button>
    </form>
  );
}

export default Form;
