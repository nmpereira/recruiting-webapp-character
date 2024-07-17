import { useContext } from "react";
import { CharacterContext } from "../utils/context";

const API_ENDPOINT =
  "https://recruiting.verylongdomaintotestwith.ca/api/{nmpereira}/character";

export const ResetCharacters = () => {
  const { setCharacters } = useContext(CharacterContext);

  const handleResetCharacters = async () => {
    try {
      const apiResponse = await fetch(API_ENDPOINT, {
        method: "GET",
      });

      const jsonResponse = await apiResponse.json();
      const characters = jsonResponse.body;

      setCharacters(characters);
    } catch (e) {
      window.alert("Error resetting characters");
    }
  };

  return (
    <button className="fancy-button" onClick={handleResetCharacters}>
      Reset Characters
    </button>
  );
};

export const SaveCharacters = () => {
  const { characters } = useContext(CharacterContext);

  const handleSaveCharacters = async () => {
    try {
      await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(characters),
      });
      window.alert("Characters saved!");
    } catch (e) {
      window.alert("Error saving characters");
    }
  };
  return (
    <button className="fancy-button" onClick={handleSaveCharacters}>
      Save Characters
    </button>
  );
};
