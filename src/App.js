import { useState } from 'react';
import './App.css';


function App() {
  const [num,setNum] = useState(0)
  function incre(){
    setNum(num+1)
  }
  function decre(){
    setNum(num-1)
  }
  function reset(){
    setNum(0)
  }


  return (
    <div className="App">
      <div className='container w-75 shadow'>
        <h1 className='text-center'>Counter App</h1>
        <h2 className='text-center'>{num}</h2>
        <button type="button" class="btn btn-primary" onClick={incre}>+1</button>
        <button type="button" class="btn btn-secondary" onClick={reset}>Reset</button>
        <button type="button" class="btn btn-primary" onClick={decre}>-1</button>

      </div>   
 </div>
  );
}

export default App;
