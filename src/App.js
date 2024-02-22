import {React, useState} from 'react' ;
import './App.css';

function App() {
  const [Input,setInput] = useState("");
  // [result,setresult] = useState(0);
  const inputHnadler = (e)=>{
    setInput(e.target.value);

  }
  const onclickhandler = ()=>{
    setInput(eval(Input));
    //setInput("");
  }
  return (
    // <div className="App">
    //   <center>
    //     <input className="input" type="text" placeholder="Enter your expression" name="Input" value={Input} onChange = {inputHnadler}/>
    //     <br/>
    //     <button onClick={onclickhandler}>Calculate</button>
    //     <h4>Your Output : {result}</h4>

    //     <div id="keys">
    //       <button onClick={() => setInput(Input+'1')}>1</button>
    //       <button onClick={() => setInput(Input+'2')}>2</button>
    //       <button onClick={() => setInput(Input+'3')}>3</button>
    //       <button onClick={() => setInput(Input+'4')}>4</button>
    //       <button onClick={() => setInput(Input+'5')}>5</button><br />
          
    //       <button onClick={() => setInput(Input+'6')}>6</button>
    //       <button onClick={() => setInput(Input+'7')}>7</button>
    //       <button onClick={() => setInput(Input+'8')}>8</button>
    //       <button onClick={() => setInput(Input+'9')}>9</button>
    //       <button onClick={() => setInput(Input+'0')}>0</button><br />

    //       <button onClick={() => setInput(Input+'+')}>+</button>
    //       <button onClick={() => setInput(Input+'-')}>-</button>
    //       <button onClick={() => setInput(Input+'*')}>*</button>
    //       <button onClick={() => setInput(Input+'/')}>/</button>
    //       <button onClick={() => {setInput('');setresult(0)}}>clr</button><br /> 
    //     </div>
    //   </center>
    // </div>
    <div className="main-container">
    <div className="main d-flex flex-column justify-content-center align-items-center">
        <div className="calc-container p-4 text-center">
            <h1>Calculator</h1>
            <div className="row mb-3">
                <input type="text" id="inputtext" name="Input" value={Input} placeholder="0" onChange={inputHnadler} readOnly/>
            </div> 
            <div className="row mb-3">
                <button onClick={() => {setInput('')}}>C</button>
                <button onClick={() => {
                  if (Input.length > 0) {
                    setInput(Input.slice(0,-1))
                  }}}
                >DEL</button>
                <button onClick={() => setInput(Input+'%')}>%</button>
                <button onClick={() => setInput(Input+'/')}>/</button>
            </div>
            <div className="row mb-3">
                <button onClick={() => setInput(Input+'7')}>7</button>
                <button onClick={() => setInput(Input+'8')}>8</button>
                <button onClick={() => setInput(Input+'9')}>9</button>
                <button onClick={() => setInput(Input+'*')}>*</button>
            </div>
            <div className="row mb-3">
                <button onClick={() => setInput(Input+'4')}>4</button>
                <button onClick={() => setInput(Input+'5')}>5</button>
                <button onClick={() => setInput(Input+'6')}>6</button>
                <button onClick={() => setInput(Input+'-')}>-</button>
            </div>
            <div className="row mb-3">
                <button onClick={() => setInput(Input+'1')}>1</button>
                <button onClick={() => setInput(Input+'2')}>2</button>
                <button onClick={() => setInput(Input+'3')}>3</button>
                <button onClick={() => setInput(Input+'+')}>+</button>
            </div>
            <div className="row">
                <button className="zero" onClick={() => setInput(Input+'0')}>0</button>
                <button onClick={() => setInput(Input+'.')}>.</button>
                <button onClick={onclickhandler}>=</button>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
