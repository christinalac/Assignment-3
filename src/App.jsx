import { useState } from "react";
import Header from "./components/Header";
import Home from "./views/Home";
import Add from "./views/Add";
import Footer from "./components/Footer";


function App() {

  const [view, setView] = useState("home");

  const [breeds, setBreeds] = useState([
    {
      id: 1,
      name: "Golden Retriever",
      group: "Sporting",
      lifespan: "10-12 years"
    },
    {
      id: 2,
      name: "German Shepherd",
      group: "Hearding",
      lifespan: "9-13 years"
    },
    {
      id: 3,
      name: "Dachshund",
      group: "Hunting",
      lifespan: "12-16 years"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      <Header
        title="Dog Breed Explorer"
        view={view}
        setView={setView}
      />
      {view === "home" && (
        <Home breeds={breeds} 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setBreeds={setBreeds}
        />
      )}

      {view === "add" && 
      (<Add 
        breeds={breeds}
        setBreeds={setBreeds}
        setView={setView}
      />)}

      <Footer />
    </div>
  );
}

export default App;
