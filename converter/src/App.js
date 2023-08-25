import './App.css';
import Select from 'react-select';
import { useState } from 'react';

function App() {

const options = [
  { value: 'decimal', label: 'Decimal' },
  { value: 'binary', label: 'Binary' },
  { value: 'hexadecimal', label: 'Hexadecimal' },
  { value: 'octal', label: 'Octal' }
];

const [selectedTypeA, setSelectedTypeA] = useState ('null');
const [selectedTypeB, setSelectedTypeB] = useState ('null');
const [userInput, setUserInput] = useState ('');
const [userOutput, setUserOutput] = useState ('');


const conversionFunctions = {
  decimal: decimalConvert,
  binary: binaryConvert,
  hexadecimal: hexaConvert,
  octal: octConvert
}; 

// Conversion Functions go Below:

function decimalConvert (input, typeB) {
  let out = input;
  switch (typeB) {
    case 'binary':
      out = parseInt(out, 10).toString(2);
      break;
    case 'hexadecimal':
      out = parseInt(input, 10).toString(16);
      break;
    case 'octal':
      out = parseInt(input, 10).toString(8);
      break;
    default:
      break;
  }
  return out;
}

function binaryConvert (input, typeB) {
  let out = input;
  switch (typeB) {
    case 'decimal':
      out = parseInt(out, 2).toString(10);
      break;
    case 'hexadecimal':
      out = parseInt(out, 2).toString(16);
      break;
    case 'octal':
      out = parseInt(out, 2).toString(8);
      break;
    default:
      break;
  }
  return out;
}

function hexaConvert (input, typeB) {
  let out = input;
  switch (typeB) {
    case 'decimal':
      out = parseInt(out, 16).toString(10);
      break;
    case 'octal':
      out = parseInt(out, 16).toString(8);
      break;
    case 'binary':
      out = parseInt(out, 16).toString(2);
      break;
    default:
      break;
  }
  return out;
}

function octConvert (input, typeB) {
  let out = input;
  switch (typeB) {
    case 'decimal':
      out = parseInt(out, 8).toString(10);
      break;
    case 'binary':
      out = parseInt(out, 8).toString(2);
      break;
    case 'hexadecimal':
      out = parseInt(out, 8).toString(16);
      break;
    default:
      break;
  }
  return out;
}

const convertMain = () => {
    if ( (selectedTypeA && selectedTypeB) && userInput !== ' ') { // if True that neither are Null or False values, proceed
      setUserOutput (conversionFunctions[selectedTypeA.value](userInput, selectedTypeB.value));
    }
};

  return (
    <div className="calculator-grid">
      <div className="item-title">
        Binary, Decimal & Hexadecimal Number Converter
      </div>
      <input type="1_number" 
            class="item-a" 
            onChange={(e)  => 
            setUserInput(e.target.value)} />
      <input type="2_number" 
            class="item-b" 
            value={userOutput} 
            disabled/>
      <Select className="numTypes-a" 
              name="types" 
              options={ options } 
              onChange={ (option) => 
              setSelectedTypeA(option) }
              placeholder={ 'Choose an Option ...' }
              menuPlacement='top'
              required
      />
      <Select className="numTypes-b" 
              name="types" 
              options= { options }
              onChange={ (option) => 
              setSelectedTypeB(option) }
              placeholder={ 'Choose an Option ...' }
              menuPlacement='top'
              required
      />

      <button className="item-c" 
              onClick={ convertMain }>
      Convert
      </button>
    </div>
  )
}

export default App;
