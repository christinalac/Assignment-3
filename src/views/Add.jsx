import { useState } from "react";

function Add({breeds, setBreeds, setView}) {

  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [lifespan, setLifespan] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newBreed = {
      id: Date.now(),
      name,
      group,
      lifespan,
    };

    setBreeds([...breeds, newBreed]);

    setName("");
    setGroup("");
    setLifespan("");

    setView("home");
  }

  return (
    <div className="input-containter">
      <h1>Add a Dog Breed</h1>

      <form className="input-form" onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Breed Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}/>
        <input 
        type="text" 
        placeholder="Group" 
        value={group}
        onChange={(e) => setGroup(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="Lifespan" 
        value={lifespan}
        onChange={(e) => setLifespan(e.target.value)}/>
        <button type="submit">Add Breed</button>
      </form>
    </div>
  );
}

export default Add;