import React,{useState} from "react";
import './App.css';

const App=()=>{
  const [result,setresult]=useState("");
  const clickHandler=(event)=>{
    setresult(result.concat(event.target.value))
  }
  const clear=()=>{
    setresult("");
  }
  const output=()=>{
    setresult(eval(result).toString());
  }
  return(
    <div class="calc">
      <input type="text" placeholder="calculations" id='ans' value={result}/>
      <input type="button" value="9" className="button" onClick={clickHandler}/>
      <input type="button" value="8" className="button" onClick={clickHandler}/>
      <input type="button" value="7" className="button" onClick={clickHandler}/>
      <input type="button" value="6" className="button" onClick={clickHandler}/>
      <input type="button" value="5" className="button" onClick={clickHandler}/>
      <input type="button" value="4" className="button" onClick={clickHandler}/>
      <input type="button" value="3" className="button" onClick={clickHandler}/>
      <input type="button" value="2" className="button" onClick={clickHandler}/>
      <input type="button" value="1" className="button" onClick={clickHandler}/>
      <input type="button" value="0" className="button" onClick={clickHandler}/>
      <input type="button" value="+" className="button" onClick={clickHandler}/>
      <input type="button" value="*" className="button" onClick={clickHandler}/>
      <input type="button" value="-" className="button" onClick={clickHandler}/>
      <input type="button" value="\" className="button" onClick={clickHandler}/>
      <input type="button" value="^" className="button" onClick={clickHandler}/>
      <input type="button" value="." className="button" onClick={clickHandler}/>
      <input type="button" value="Clear"  className=" button button1" onClick={clear}/>
      <input type="button" value="=" className=" button button1" onClick={output}/>
    </div>
  )
}




export default App;
