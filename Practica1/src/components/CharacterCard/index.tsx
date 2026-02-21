import type { CharacterData } from "../../types";
import "./styles.css";
const CharacterCard = (params: { character: CharacterData }) => {
  const character = params.character;

  const handleGender = (gender: string) => {
    if (gender === "n/a") {
      gender = "unkown";
    }
    return gender;
  };

  return (
    <>
      <div className="cardContainer">
        <span className="dot">.</span>
        <h1>{character.name}</h1>
        <p>Gender: {handleGender(character.gender)}</p>
        <p>Birth year: {character.birth_year}</p>
          <span className="dot">.</span>
      </div>
    </>
  );
};

export default CharacterCard;
