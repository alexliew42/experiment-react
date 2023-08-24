export function PokemonIndex(props) {
  return (
    <div>
      {props.data.map((pokemon) => (
        <div key={pokemon.name}>
          <h1> {pokemon.name} </h1>
        </div>
      ))}
    </div>
  )
}