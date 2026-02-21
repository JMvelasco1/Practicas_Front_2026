import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./api/api";
import type { CharacterData } from "./types";
import { CharacterList } from "./components/CharacterList";

function App() {
  const [pagina, setPagina] = useState<number>(1);
  const [newCharacters, setNewCharacters] = useState<CharacterData[]>([]);
  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchCharacter = () => {
    api
      .get(`/people/${pagina ? "?page=" + pagina : 1}`)
      .then((e) => {
        console.log(e.data.results);
        const results = e.data.results;
        setCharacters(results);
        setNewCharacters([...newCharacters, ...results]);
      })
      .catch((e) => {
        if (e.response.status === 404) {
          setError("No hay más personajes para cargar");
        } else {
          setError(`Ha habido un error: ${e}`);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCharacter();
  }, [pagina]);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  return (
    <>
      <div>
        {loading && <h2>Loading...</h2>}
        <div>
          <CharacterList characters={newCharacters} />
        </div>
        <button onClick={() => setPagina(pagina + 1)}>Ver más</button>
        {error && <h3 className="error">{error}</h3>}
      </div>
    </>
  );
}

export default App;
