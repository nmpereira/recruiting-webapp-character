import React, { useContext } from "react";
import { CharacterContext } from "../utils/context";
import { createNewCharacter } from "../utils/utils";
import { ATTRIBUTE_LIST, SKILL_LIST } from "../consts";

const CreateCharacterButton = () => {
  const { characters, setCharacters } = useContext(CharacterContext);

  const handleCreateCharacter = () => {
    const newChar = createNewCharacter({
      characters,
      ATTRIBUTE_LIST,
      SKILL_LIST,
    });
    setCharacters((characters) => [...characters, newChar]);
  };

  return (
    <button className="fancy-button" onClick={handleCreateCharacter}>
      Create Character
    </button>
  );
};

export default CreateCharacterButton;
