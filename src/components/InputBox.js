import React, { useState } from 'react';
import Select from 'react-select';

import { decimalConvert } from './utils/conversions';

import { TextField } from "@mui/material";
import './styles/inputbox.css';

const InputBox = ({ updateResults }) => {
    
    const options = [
        { value: 'Decimal', label: 'Decimal' },
        { value: 'Binary', label: 'Binary' },
        { value: 'Hexadecimal', label: 'Hexadecimal' },
        { value: 'Octal', label: 'Octal' }
      ];

    const [input, setInput] = useState ('');
    const [base, setBase] = useState (null);

    const handleInput = (e) => {
        setInput (e.target.value);
    };

    const handleBase = ( base ) => {
        setBase (base);
    }

    const handleSubmit = (e) => {
        // keeps page from doing normal html default response of refreshing when submit
        e.preventDefault();

        const fillResults = decimalConvert (input, base.value);
        console.log ("the base being passed in is: " + base.value);
        updateResults(fillResults);

    }


    return (
        <div>
            <form className="main-input" onSubmit={ handleSubmit }>
                <TextField className="input-box" type="text" name="input" 
                    value={ input } onChange={ handleInput }/>
                <Select className="select-box" options={ options } 
                    defaultValue={ options[0] } value={ base }
                    onChange={ handleBase }  />
                <input className="submit-box" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default InputBox;