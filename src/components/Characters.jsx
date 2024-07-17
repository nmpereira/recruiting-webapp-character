import { useContext, useState } from "react";

import { CLASS_LIST } from "../consts";
import AttributeList from "./AttributeList";
import ClassList from "./ClassList";
import ClassMin from "./ClassMin";
import SkillList from "./SkillsList";
import { CharacterContext } from "../utils/context";

const Character = ({ character, index }) => {
  const { setCharacters } = useContext(CharacterContext);
  // const [attributes, setAttributes] = useState(defaultAttributes(ATTRIBUTE_LIST));
  // const [skills, setSkills] = useState(defaultSkills(SKILL_LIST));
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <>
      <h2>{character.name}</h2>
      <div className="character">
        <AttributeList
          // attributes={attributes}
          // setAttributes={setAttributes}
          index={index}
          character={character}
          setCharacters={setCharacters}
        />
        <ClassList
          CLASS_LIST={CLASS_LIST}
          index={index}
          character={character}
          setSelectedClass={setSelectedClass}
          //   attributes={attributes}
        />
        <ClassMin
          selectedClass={selectedClass}
          CLASS_LIST={CLASS_LIST}
          setSelectedClass={setSelectedClass}
        />
        <SkillList
          // skills={skills}
          // setSkills={setSkills}
          // attributes={attributes}
          index={index}
          character={character}
          setCharacters={setCharacters}
        />
      </div>
    </>
  );
};

const CharactersWrapper = () => {
  const { characters, setCharacters } = useContext(CharacterContext);

  return (
    <div className="character-section">
      {characters.map((character, index) => {
        return <Character key={index} character={character} index={index} />;
      })}
    </div>
  );
};

export default CharactersWrapper;
