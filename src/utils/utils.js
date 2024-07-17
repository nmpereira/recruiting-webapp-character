export const getModifier = (attribute) => {
  let modifier = Math.floor((attribute - 10) / 2);
  return modifier;
};

export const defaultRequirements = (CLASS_LIST) =>
  Object.keys(CLASS_LIST).map(() => false);

export const createNewCharacter = ({
  characters,
  ATTRIBUTE_LIST,
  SKILL_LIST,
}) => {
  const newCharacter = {
    name: "",
    attributes: {},
    skills: {},
  };

  newCharacter.name = `Character ${characters.length + 1}`;

  for (let i = 0; i < ATTRIBUTE_LIST.length; i++) {
    const attribute = ATTRIBUTE_LIST[i];
    const initialPoints = 10;
    newCharacter.attributes[attribute] = initialPoints;
  }

  for (let i = 0; i < SKILL_LIST.length; i++) {
    const skill = SKILL_LIST[i];
    const initialPoints = 0;
    newCharacter.skills[skill.name] = initialPoints;
  }

  return newCharacter;
};
