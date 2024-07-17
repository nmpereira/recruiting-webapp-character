import React, { useEffect, useState } from "react";
import { getModifier } from "../utils/utils";
import { SKILL_LIST } from "../consts";

/**
[
    {
        "name": "Character 1",
        "attributes": {
            "Strength": 10,
            "Dexterity": 10,
            "Constitution": 10,
            "Intelligence": 10,
            "Wisdom": 10,
            "Charisma": 10
        },
        "skills": {
            "Acrobatics": 0,
            "Animal Handling": 0,
            "Arcana": 0,
            "Athletics": 0,
            "Deception": 0,
            "History": 0,
            "Insight": 0,
            "Intimidation": 0,
            "Investigation": 0,
            "Medicine": 0,
            "Nature": 0,
            "Perception": 0,
            "Performance": 0,
            "Persuasion": 0,
            "Religion": 0,
            "Sleight of Hand": 0,
            "Stealth": 0,
            "Survival": 0
        }
    }
]
 */

const SkillList = ({ character, setCharacters, index }) => {
  const [skillPoints, setSkillPoints] = useState(5);
  const getIntelligenceModifier = getModifier(
    character.attributes.Intelligence
  );

  const incrementSkill = (skill) => {
    if (skillPoints > 0) {
      setSkillPoints(skillPoints - 1);
      setCharacters((characters) => {
        const newCharacters = [...characters];

        const characterSkills = characters.find((c) => c === character).skills;

        newCharacters[index] = {
          ...characters[index],
          skills: {
            ...characterSkills,
            [skill]: characterSkills[skill] + 1,
          },
        };

        return newCharacters;
      });
    }

    // show popup if no points left
    if (skillPoints === 0) {
      window.alert(
        "No points left to spend! Please update intelligence to get more points."
      );
    }
  };

  const decrementSkill = (skill) => {
    if (character.skills[skill] === 0) return;

    setSkillPoints(skillPoints + 1);
    setCharacters((characters) => {
      const newCharacters = [...characters];

      const characterSkills = characters.find((c) => c === character).skills;

      newCharacters[index] = {
        ...characters[index],
        skills: {
          ...characterSkills,
          [skill]: characterSkills[skill] - 1,
        },
      };

      return newCharacters;
    });
  };

  useEffect(() => {
    setSkillPoints(10 + 4 * getIntelligenceModifier);
  }, [getIntelligenceModifier]);

  return (
    <div className="skills-list">
      <h2>Skills</h2>
      <span>Total points available: {10 + 4 * getIntelligenceModifier}</span>
      <span>Points to spend: {skillPoints}</span>
      {Object.keys(character.skills).map((skill) => {
        const attributeModifier = SKILL_LIST.find(
          (s) => s.name === skill
        ).attributeModifier;

        const attributeModifierPoints = getModifier(
          character.attributes[attributeModifier]
        );
        return (
          // <div key={skill}>
          //     <span>{skill}: {character.skills[skill].points} (Modifier: {character.skills[skill].attributeModifier}): {attributeModifier} </span>
          //     <button onClick={() => incrementSkill(skill)}>+</button>
          //     <button onClick={() => decrementSkill(skill)}>-</button>
          //     <span> Total: {character.skills[skill].points + attributeModifier}</span>
          // </div>

          <div key={skill}>
            <span>
              {skill}: {character.skills[skill]} (Modifier: {attributeModifier}
              ): {attributeModifierPoints}{" "}
            </span>
            <button onClick={() => incrementSkill(skill)}>+</button>
            <button onClick={() => decrementSkill(skill)}>-</button>
            <span>
              {" "}
              Total: {character.skills[skill] + attributeModifierPoints}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SkillList;
