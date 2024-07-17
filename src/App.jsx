import { useState } from "react";
import "./App.css";

import TopButtonSection from "./components/TopButtonSection";
import { CharacterContext } from "./utils/context";
import CharactersWrapper from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <CharacterContext.Provider value={{ characters, setCharacters }}>
          <TopButtonSection />
          <CharactersWrapper />
        </CharacterContext.Provider>
      </section>
    </div>
  );
}

export default App;
