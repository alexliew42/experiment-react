import { PokemonIndex } from "./components/PokemonIndex"
import { useEffect } from "react"
function App() {

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/charizard"

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, [])



  return (
    <div>
      <PokemonIndex />
    </div>
  )
}

export default App
