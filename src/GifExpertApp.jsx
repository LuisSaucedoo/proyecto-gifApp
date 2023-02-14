
import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['ejemplo1', 'ejemplo2']);

    const onAddCategory = () => {
        setCategories([ 'Valorant', ...categories ]);
        // setCategories( categories => [...categories, 'Valorant']);
    }

    return(
        <>
            <h1>GifExpertApp</h1>

            <button onClick={onAddCategory}>Agregar</button>

            <ol>
                { categories.map( category => {
                    return <li key={category} >{ category }</li>
                }) }
            </ol>
        </>
    )
};
