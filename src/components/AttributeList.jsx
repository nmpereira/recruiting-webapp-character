import { getModifier } from "../utils/utils";
import { ATTRIBUTE_LIST } from "../consts";

const AttributeList = ({ character, index, setCharacters }) => {
  const handleIncrement = (attribute) => {
    if (getTotalAttributePoints() >= 70) {
      window.alert(
        "You have exceeded the total number of attribute points of 70. Please adjust your attributes."
      );
      return;
    }

    setCharacters((characters) => {
      const newCharacters = [...characters];

      newCharacters[index] = {
        ...characters[index],
        attributes: {
          ...characters[index].attributes,
          [attribute]: characters[index].attributes[attribute] + 1,
        },
      };

      return newCharacters;
    });
  };

  const handleDecrement = (attribute) => {
    setCharacters((characters) => {
      const newCharacters = [...characters];

      newCharacters[index] = {
        ...characters[index],
        attributes: {
          ...characters[index].attributes,
          [attribute]: characters[index].attributes[attribute] - 1,
        },
      };

      return newCharacters;
    });
  };

  const getTotalAttributePoints = () => {
    return Object.values(character.attributes).reduce(
      (acc, curr) => acc + curr
    );
  };

  return (
    <div className="attribute-list">
      <h2>Attributes</h2>
      <span>Total attribute points: {getTotalAttributePoints()}</span>

      {ATTRIBUTE_LIST.map((attribute) => (
        <div key={attribute}>
          <span>
            {attribute}: {character.attributes[attribute]}
          </span>
          <span>
            {" "}
            (Modifier: {getModifier(character.attributes[attribute])}){" "}
          </span>

          <button onClick={() => handleIncrement(attribute)}>+</button>
          <button onClick={() => handleDecrement(attribute)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default AttributeList;
