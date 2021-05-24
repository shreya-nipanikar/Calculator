import React, { useState , useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import './App.css';

const App = () => {


  useEffect(() => {
		alanBtn({
			key: 'd1563df44f644d402e28f447289aa9092e956eca572e1d8b807a3e2338fdd0dc/stage',
			onCommand: (commandData) => {
				if (commandData.command === 'calculate') {
					// Call the client code that will react to the received command
          
				}
			}
		});
	}, []); 


  const [result,setResult] = useState("");

  const actionButton = (event) => {
     setResult(result.concat(event.target.value));
  }

  const actionClear = () => {
    setResult("");
  }

  const actionbackspace = () => {
    setResult(result.slice(0,result.length - 1));
    
  }

  const calculate = () => {
    try{
      setResult(eval(result).toString());
    }catch(error){
      setResult("Error");
    }
   
  }

  return (
   <div className="container">
      <div className="heading">
      <h1>Calculator</h1>
       </div>
        
        <div className="main">
          <form>
            <input type="text" value={result}></input>
          </form>

          <div className="keypad-container">
            <div className="keypad">
            <button onClick={actionClear} id="clear">Clear</button>
            <button onClick={actionbackspace} id="backspace">C</button>
            <button value="%" onClick={actionButton}>%</button>
            <button value="/" onClick={actionButton}>&divide;</button>
            
            <button value="7" onClick={actionButton}>7</button>
            <button value="8" onClick={actionButton}>8</button>
            <button value="9" onClick={actionButton}>9</button>
            <button value="*" onClick={actionButton}>&times;</button>
            
            <button value="4" onClick={actionButton}>4</button>
            <button value="5" onClick={actionButton}>5</button>
            <button value="6" onClick={actionButton}>6</button>
            <button value="-" onClick={actionButton}>&ndash;</button>
            
            <button value="1" onClick={actionButton}>1</button>
            <button value="2" onClick={actionButton}>2</button>
            <button value="3" onClick={actionButton}>3</button>
            <button value="+" onClick={actionButton}>+</button>
            <button value="." onClick={actionButton}>.</button>
            <button value="0" onClick={actionButton}>0</button>
            <button onClick={calculate}>=</button>
            
          </div>
        </div>
      </div>

   </div>
  );
}

export default App;
