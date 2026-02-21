import type { CharacterData } from "../../types";
import CharacterCard from "../CharacterCard";

export const CharacterList = (params: { characters?: CharacterData[] }) => {
  const { characters } = params;

  return (
    <>
      <div>
        <h2>
          {characters?.map((e) => {
            return (
              <div>
                <CharacterCard character={e} />
              </div>
            );
          })}
        </h2>
      </div>
    </>
  );
};
