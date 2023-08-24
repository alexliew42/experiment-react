import { PokemonIndex } from "./components/PokemonIndex"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([])

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
