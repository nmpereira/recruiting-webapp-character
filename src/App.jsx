import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";

function App() {
  const [attributes, setAttributes] = useState(ATTRIBUTE_LIST);
  const [skills, setSkills] = useState(SKILL_LIST);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div className="attribute-list">
          <h2>Attributes</h2>
          <div>
            {attributes.map((attribute) => (
              <p key={attribute}>{attribute}</p>
            ))}
          </div>
        </div>

        <div className="class-list">
          <h2>Classes</h2>
          <div>
            {Object.keys(CLASS_LIST).map((charClass) => (
              <p key={charClass}>{charClass}</p>
            ))}
          </div>
        </div>

        <div className="class-min">
          <h2>Class Minimums</h2>
          <div>
            {Object.keys(CLASS_LIST).map((charClass) => (
              <p key={charClass}>{charClass}</p>
            ))}
          </div>
        </div>

        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <p key={skill.name}>
              {skill.name} | {skill.attributeModifier}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
