// function that takes in input + base and fills in the converted vers.


export function decimalConvert (input, base) {
    // created an array to store all the values to be returned
    const allOutput = [0, 0, 0, 0];

    input = parseInt(input);

    // given a base, convert to decimal regardless:
    switch (base) {
      case 'Binary':
          input = parseInt(input, 2);
          console.log ("base is binary and the new input is: " + input);
          break;
        case 'Hexadecimal':
          input = parseInt(input, 16);
          console.log ("base is hex and the new input is: " + input);
          break;
      case 'Octal':
          input = parseInt(input, 8);
          console.log ("base is octal and the new input is: " + input);
          break;        
      default:
        console.log ("base is decimal and the new input is: " + input);
        break;

    }

    console.log ("The Input after Case: " + input);

    console.log (typeof input);
    
    // now, populate array with all converted values
    allOutput[0] = input;
    allOutput[1] = input.toString(2); // convert to binary
    allOutput[2] = input.toString(16); // convert to hexadecimal
    allOutput[3] = input.toString(8); //convert to octal

    console.log (allOutput);
    return allOutput;
}

export function passAns (arr) {
    return arr;
}



/*
    allOutput[0] = userInput
}



export const conversionFunctions = {
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
  */