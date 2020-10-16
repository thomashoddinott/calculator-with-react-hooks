import React, {useState} from 'react';
import './App.css';

function App() {
  const [stmt, setStmt] = useState("");
  const calcBtns = [];
  [9,8,7,6,5,4,3,2,1,0,".","%"].forEach(item => {
    //can we do anything with "%" ?
    calcBtns.push(
      <button 
        onClick={e => {setStmt(stmt + e.target.value)}}
        value={item}
        key={item}>
        {item}
      </button>
    )
  })

  return (
    <div className="wrapper">
      <div className="show-input">{stmt}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        <button onClick={() => setStmt(stmt.substr(0, stmt.length -1 ))}>Clear</button>
        <button onClick={() => setStmt("")}>AC</button>
      </div>
      <div className="operations subgrid">
        <button onClick={e => setStmt(stmt + e.target.value)} value = "+">+</button>
        <button onClick={e => setStmt(stmt + e.target.value)} value = "-">-</button>
        <button onClick={e => setStmt(stmt + e.target.value)} value = "*">*</button>
        <button onClick={e => setStmt(stmt + e.target.value)} value = "/">/</button>
        <button 
          onClick={e => {
            try {
              const eval_stmt = eval(stmt)
              setStmt(
                String(eval_stmt).length > 3 &&
                  String(eval_stmt).includes(".")
                    ? String(eval_stmt.toFixed(3)) //limit dp to 3
                    : String(eval_stmt)
              )
            } catch(err) {
              alert(err)
            }
          }}
          value = "="   
        >=</button>
      </div>
    </div>
  );
}

export default App;