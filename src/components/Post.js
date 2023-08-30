function Post({ post }) {
  return (
    <li className="post-list__item">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </li>
  );
}

export default Post;
