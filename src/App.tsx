import React,{useState} from 'react';
import Part2 from  './part2'
import { useDispatch, useSelector } from "react-redux";

interface CV {
  name:string
}

interface Place extends CV {
  city:string,
  country:string
}

function App() {
  const [EE,setEE] = useState<string | number>('2')
  const { product }:any = useSelector(state => ({
    product: state
  }));
  let myString: string = "Banana";

  console.log(product)
  
  const initialState:Place = {
    city: 'Rosebud',
    country: 'USA',
    name:'aaa'
  };

  const initialStateTwo:any = {
    city: 21,
    country: 2121,
    name:3187
  };

  return (
    <div className="App">
        {/* {EE} */}
        <Part2 sendToPart2={initialState.city}  />
    </div>
  );
}

export default App;
