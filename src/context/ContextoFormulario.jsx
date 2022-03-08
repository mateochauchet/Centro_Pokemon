import React, { useState, createContext } from 'react';

export const FormContext = createContext();

let initialForm = {
    nombre:'',
    apellido:'',
    email:'',
    nombrePokemon:''
}

const FormContextProvider = ({children}) => {
    const [form, setForm] = useState(initialForm);

    

    return(
        <FormContext.Provider value={{
            setForm,
            form
        }} >
            {children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;

