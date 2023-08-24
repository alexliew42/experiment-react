import { PokemonIndex } from "./components/PokemonIndex"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([])
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const url1 = 'https://pokeapi.co/api/v2/pokemon?limit=20'

    const fetchData = async () => {
      try {
        const response = await fetch(url1);
        const json = await response.json();
        setData(json.results)
      } catch (error) {
        console.log("error", error);
      }


      // function newPokemonObject(pokemon_list) {
      //   pokemon_list.forEach(async (pokemon) => {
      //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?${pokemon.name}`)
      //     const data = await response.json();
      //     setPokemons(currentList => [...currentList, data])
      //   });
      // }
      // newPokemonObject(data.results)
      // await console.log(pokemons)
    }
    fetchData();
  }, [])

  console.log(data)

  return (
    <div>
      <PokemonIndex data={data} />
    </div>
  )
}

export default App
