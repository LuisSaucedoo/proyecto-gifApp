
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['ejemplo1', 'ejemplo2']);

    const onAddCategory = ( newCategory ) => {
        console.log(newCategory);
        setCategories([ newCategory, ...categories ]);
    }

    return(
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ onAddCategory }
            />


            <ol>
                { categories.map( category => {
                    return <li key={category} >{ category }</li>
                }) }
            </ol>
        </>
    )
};
