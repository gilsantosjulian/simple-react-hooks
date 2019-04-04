import React, { useState } from 'react';

const HelloWorldFinal = () => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    };

    return (
        <>
            <h1>
                Hola mundo cruel {count}
            </h1>
            <button onClick={handleCount}>añadir</button>
        </>
    );
};

export default HelloWorldFinal;