function Navigation({ setView }) {
  return (
    <nav>
      <button onClick={() => setView("home")}>Home</button>
      <button onClick={() => setView("add")}>Add Breed</button>
    </nav>
  );
}

export default Navigation;

