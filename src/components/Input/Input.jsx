import React, { useState, useContext } from 'react';
import {FormContext} from '../../context/ContextoFormulario'



const Input = ({ name, label, type = "text" }) => {
  const [inputValue, setInputValue] = useState('');
  

  const {form, setForm} = useContext(FormContext)

  

  const onChange = (e) => {
    setInputValue(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();
    console.log('hola')
    setForm({
      ...form,
      [name]:inputValue
    })

  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={`Escriba el ${label}`}
        value={inputValue}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
