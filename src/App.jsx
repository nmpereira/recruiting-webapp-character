import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";
import ClassList from "./components/ClassList.jsx";
import SkillsList from "./components/SkillsList.jsx";
import ClassMin from "./components/ClassMin.jsx";
import AttributeList from "./components/AttributeList.jsx";

function App() {
  const [attributes, setAttributes] = useState(ATTRIBUTE_LIST);
  const [skills, setSkills] = useState(SKILL_LIST);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <AttributeList attributes={attributes} />
        <ClassList />
        <ClassMin />
        <SkillsList skills={skills} />
      </section>
    </div>
  );
}

export default App;
