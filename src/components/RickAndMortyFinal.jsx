import React from 'react';
import getCharacters from '../utils/characters'

const RickAndMortyFinal = () => {
	const characters = getCharacters('https://rickandmortyapi.com/api/character/')

	return (
		<>
			{
				characters.map(character => (
					<div>
						<h2>{character.name}</h2>
						<img src={character.image} alt={character.name}></img>
					</div>

				))
			}
		</>
	);
};

export default RickAndMortyFinal;