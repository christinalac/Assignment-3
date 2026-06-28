function Header({ title, view, setView }) {
  return (
    <header className="header">
      <h1>{title}</h1>

      <nav>
        <button
          onClick={() => setView("home")}>
          Home
        </button>

        <button
          onClick={() => setView("add")}>
          Add Breed
        </button>
      </nav>
    </header>
  );
}

export default Header;


