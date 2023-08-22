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

const [selectedTypeA, setSelectedTypeA] = useState ('Decimal');
const [selectedTypeB, setSelectedTypeB] = useState ('Binary');
const [userInput, setUserInput] = useState ('');
const [userOutput, setUserOutput] = useState('');

const conversionFunctions = {
  decimal: decimalConvert,
  binary: binaryConvert,
  hexadecimal: hexaConvert,
  octal: octConvert
};

// Conversion Functions go Below:

function decimalConvert (input, typeB) {
  let out = 0;
  switch (typeB) {
    case 'binary':
      out = parseInt (input, 10).toString(2);
      return out;
    case 'hexadecimal':
      out = parseInt (input, 16).toString(2);
      return out;    
    case 'octal':
      out = parseInt (input, 8).toString(2);
      return out;    
    default:
      break;
  }

}

function binaryConvert (input, typeB) {
  let out = 0;
  switch (typeB) {
    case 'decimal':
      out = parseInt (input, 2);
      return out;
    case 'hexadecimal':
      out = parseInt (input, 2);
      out = out.toString(16).toUpperCase();
      return out;
    case 'octal':
      out = parseInt (input, 2);
      out = out.toString(8);
      return out;
    default:
      break;
  }
}

function hexaConvert (input, typeB) {
  let out = 0;
  switch (typeB) {
    case 'binary':
      out = parseInt (input, 16);
      out = out.toString(2);
      return out;
    case 'octal':
      out = parseInt (input, 16);
      out = out.toString(8);
      return out;
    case 'decimal':
      out = parseInt (input, 16);
      return out;
    default:
      break;
  }
}

function octConvert (input, typeB) {
  let out = 0;
  switch (typeB) {
    case 'binary':
      out = parseInt (input, 8);
      out = out.toString(2);
      return out;
    case 'decimal':
      out = parseInt (input, 8);
      return out;
    case 'hexadecimal':
      out = parseInt (input, 8);
      out = out.toString(16);
      return out;
    default:
      break;
  }
}


const convertMain = () => {
  if (selectedTypeA && selectedTypeB) { // if True that neither are Null or False values, proceed
    setUserOutput (conversionFunctions[selectedTypeA.value](userInput, selectedTypeB.value));
  }
};

  return (
    <div className="calculator-grid">
      <div className="item-title">Binary, Decimal & Hexadecimal Number Converter</div>
      <input type="1_number" class="item-a" onChange={(e)  => setUserInput(e.target.value)} />
      <input type="2_number" class="item-b" value={userOutput} disabled/>
      <Select className="numTypes-a" name="types" options={ options } onChange={(option) => setSelectedTypeA(option) }/>
      <Select className="numTypes-b" name="types" options= { options } onChange={(option) => setSelectedTypeB(option) }/>
      <button className="item-c" onClick={ convertMain }>Convert</button>
    </div>
  )
}

export default App;
