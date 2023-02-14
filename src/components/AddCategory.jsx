import { useState } from 'react';


export const AddCategory = () => {
  
    const [inputValue, setInputValue] = useState('ValorInicial Input');

    const onInputChange = ({target}) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Evita refresh de la pag
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
  )
};