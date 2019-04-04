import React, { useState, } from 'react';

const RickAndMorty = () => {
    const [characters, useCharacters] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => useCharacters(data.results))
    }, []);

    return (
        <>

            {
                characters.map(character => (
                    <div>
                        <h2>{character.name}</h2>
                        <img src="/" alt={character.name}></img>
                    </div>

                ))
            }
        </>
    );
};

export default RickAndMorty;