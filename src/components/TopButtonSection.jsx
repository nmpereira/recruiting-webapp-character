import CreateCharacterButton from "./CreateCharacterButton";
import { ResetCharacters, SaveCharacters } from "./SaveResetButtons";

const TopButtonSection = () => {
  return (
    <div className="top-button-section">
      <CreateCharacterButton />
      <ResetCharacters />
      <SaveCharacters />
    </div>
  );
};

export default TopButtonSection;
