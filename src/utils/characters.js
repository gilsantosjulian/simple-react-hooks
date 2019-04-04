import {
    useState,
    useEffect
} from 'react'

const getCharacters = (url) => {
    const [characters, useCharacters] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => useCharacters(data.results))
    }, []);
    return characters
}

export default getCharacters;