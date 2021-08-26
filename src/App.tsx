import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Part2 from  './part2'
import { type } from 'os';
interface CV {
  name:string
}
interface Place extends CV {
  city:string,
  country:string
}


function App() {
  const [EE,setEE] = useState<string | number>('2')

  let myString: string = "Banana";
  
  const initialState:Place = {
    city: 'Rosebud',
    country: 'USA',
    name:'aaa'
  };

  return (
    <div className="App">
        {EE}
        <Part2 sendToPart2={initialState.city}  />
    </div>
  );
}

export default App;
