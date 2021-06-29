import React from "react";
import ReactDOM from "react-dom";

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokeList(props) {
  const pokemon = props.pokedex;
  const listPoke = pokemon.map((poke) => <li>{poke.name}</li>)
  return <ul>{listPoke}</ul>
};

ReactDOM.render(
  <PokeList pokedex={pokedex} />,
  document.querySelector("#root")
);
