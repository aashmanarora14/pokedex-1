"use client";
import React, { useEffect, useState } from "react";
import PokeCard from "../Components/PokeCard";

const page = () => {
  const [allpokemons, setAllpokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getPokemon = async () => {
    const response = await fetch(loadMore);
    const data = await response.json();
    setLoadMore(data.next);

    function fetchPokemonDetails(result) {
      result.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.json();
        setAllpokemons((currentList) => [...currentList, data]);
      });
    }
    fetchPokemonDetails(data.results);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <div className="flex items-center flex-col">
        <h1 className="text pt-8 pb-4 text-2xl font-bold">Pokemon Kingdom.</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 px-5">
          {allpokemons.map((pokemon, id) => (
            <PokeCard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={id}
              height={pokemon.height}
              weight={pokemon.weight}
              stat1={pokemon.stats[0].stat.name}
              stat2={pokemon.stats[1].stat.name}
              stat3={pokemon.stats[2].stat.name}
              stat4={pokemon.stats[3].stat.name}
              stat5={pokemon.stats[4].stat.name}
              stat6={pokemon.stats[5].stat.name}
              bs1={pokemon.stats[0].base_stat}
              bs2={pokemon.stats[1].base_stat}
              bs3={pokemon.stats[2].base_stat}
              bs4={pokemon.stats[3].base_stat}
              bs5={pokemon.stats[4].base_stat}
              bs6={pokemon.stats[5].base_stat}
            />
          ))}
        </div>
        <button
          onClick={() => getPokemon()}
          className="my-5 py-2 px-7 rounded-lg font-bold border border-[#c6c6c6] bg-gradient-to-br from-[#76daff] to-[#fcd000] hover:bg-gradient-to-tl hover:from-[#ff0000] hover:to-[#ffed00]
          transition delay-150 duration-300 ease-in-out"
        >
          More Pokemons
        </button>
      </div>
    </>
  );
};

export default page;
