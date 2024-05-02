import Nav from './components/Nav';
import InputBox from './components/InputBox.js';
import SelectBox from './components/SelectBox.js';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState([]);
  
  const updateResults = (fillResults) => {
    setResults(fillResults);
  };

  return (
    <div className='App'>
      <Nav />
      <InputBox updateResults={ updateResults }/>
      <SelectBox results={ results } />
      
    </div>
  );
};

export default App;