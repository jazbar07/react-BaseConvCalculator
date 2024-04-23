import React, { useState } from 'react';
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
                <input className="input-box" type="text" name="input" 
                    value={ input } onChange={ handleInput }/>
                <select className="select-box" name="base cases"
                    value={ baseCase } onChange={ handleCase } >
                    <option value="Decimal">Decimal</option>
                    <option value="Binary">Binary</option>
                    <option value="Hexadecimal">Hexadecimal</option>
                    <option value="Octal">Octal</option>
                </select>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default InputBox;