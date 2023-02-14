
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['ejemplo1', 'ejemplo2']);

    const onAddCategory = () => {
        setCategories([ 'Valorant', ...categories ]);
        // setCategories( categories => [...categories, 'Valorant']);
    }

    return(
        <>
            <h1>GifExpertApp</h1>

            <AddCategory/>

            <button onClick={onAddCategory}>Agregar</button>

            <ol>
                { categories.map( category => {
                    return <li key={category} >{ category }</li>
                }) }
            </ol>
        </>
    )
};
