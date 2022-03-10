import logo from './logo.svg';
import './App.css';
import Counter from './components/counter.js'
import { useState } from 'react';



function App() {

  const [value, setValue] = useState(0);



  return (
    <div className="App" >
     <Counter 
        value={value}
        setValue={setValue}         
     />
     
    </div>
  );
}

export default App;
