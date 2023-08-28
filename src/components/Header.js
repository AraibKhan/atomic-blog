function Header() {
  return (
    <header className="header">
      <h1>⚛️ The Atomic Blog</h1>
      <div className="header__posts">
        <span>🚀 30 atomic posts found</span>
        <input type="text" placeholder="Search posts..." />
        <button className="btn">Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
