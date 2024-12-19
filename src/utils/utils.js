/**
 * Get the modifier for an attribute. The modifier is calculated by adding 1 to every 2 points above 10.
 * @param {string} attribute
 * @returns number
 */
export const getModifier = (attribute) => {
  let modifier = Math.floor((attribute - 10) / 2);
  return modifier;
};

/**
 * The default requirements for each class are set to false.
 */
export const defaultRequirements = (CLASS_LIST) =>
  Object.keys(CLASS_LIST).map(() => false);

/**
 * Create a new character with a name, attributes and skills.
 * @param {{name: string, attributes: {...}, skills: {...}}[]} characters
 * @param {string[]} ATTRIBUTE_LIST
 * @param {{name: string, attributeModifier: string}[]} SKILL_LIST
 * @returns {{name: string, attributes: {...}, skills: {...}}} newCharacter
 */
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

  // Set the name of the new character.
  newCharacter.name = `Character ${characters.length + 1}`;

  // Add the attributes to the new character with an initial value of 10.
  for (let i = 0; i < ATTRIBUTE_LIST.length; i++) {
    const attribute = ATTRIBUTE_LIST[i];
    const initialPoints = 10;
    newCharacter.attributes[attribute] = initialPoints;
  }

  // Add the skills to the new character with an initial value of 0.
  for (let i = 0; i < SKILL_LIST.length; i++) {
    const skill = SKILL_LIST[i];
    const initialPoints = 0;
    newCharacter.skills[skill.name] = initialPoints;
  }

  return newCharacter;
};
