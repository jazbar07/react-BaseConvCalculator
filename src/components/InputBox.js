import React, { useState } from 'react';
import { TextField } from "@mui/material";

import './styles/inputbox.css';

const InputBox = () => {
    const [input, setInput] = useState ('');
    const [baseCase, setCase] = useState ('Decimal');

    const handleInput = (e) => {
        setInput (e.target.value);
    };

    const handleCase = (e) => {
        setCase (e.target.value);
    }

    const handleSubmit = (e) => {
        // keeps page froom doing normal html default response of refreshing when submit
        e.preventDefault();

        console.log ('Inputed Value', input);
        console.log ('Base Case:', baseCase);
    }


    return (
        <div>
            <form className="main-input" onSubmit={ handleSubmit }>
                <TextField className="input-box" type="text" name="input" 
                    value={ input } onChange={ handleInput }/>
                <select className="select-box" name="base cases"
                    value={ baseCase } onChange={ handleCase } >
                    <option value="Decimal">Decimal</option>
                    <option value="Binary">Binary</option>
                    <option value="Hexadecimal">Hexadecimal</option>
                    <option value="Octal">Octal</option>
                </select>
                <input className="submit-box" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default InputBox;


/* code that may be added to mod select section-
import Select from 'react-select'

const options = ([
    { value: 'decimal', label: 'Decimal' },
    { value: 'binary', label: 'Binary' },
    { value: 'hexadecimal', label: 'Hexadecimal' },
    { value: 'octal', label: 'Octal' }
  ]);

  
const selectBox = () => {
    return (
        <Select options={ option }
        />
    )
}

export default selectBox; */