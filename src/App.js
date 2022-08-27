import logo from './logo.svg';
import './App.css';
// import Zero from './components/0-Zero';
import One from './components/1-One';
import Two from './components/2-Two';


  //temporal hardcode:
  
  let cols, boxs ,rows

// (function (){//createRows
    rows= []
    for (let r= 0; r< 9; r++){
        rows[r]= []
    }
    // return rows
// })()

// (function (){//createCols
    cols= []
    for (let c= 0; c< 9; c++){
        cols[c]= []
    }
    // return cols
// })()

// (function (){//createBoxs
    boxs= []
    for (let b= 0; b< 9; b++){
        boxs[b]= []
    }
    // return boxs
// })()

let qubs
// (function (){//createQubs
    qubs= []
    for (let q= 1; q<= 81; q++){
        qubs.push({[q.toString()]:null})
    }
    // return qubs
// })()

// (function (){//possCols
    var find
    for(let q= 0; q< qubs.length; q++){
        find= q % 9
        cols[find].push(qubs[q])
    }
    // return cols
// })()

// (
// function (){//possRows
    var cont= 0
    for(let q= 0; q< qubs.length; q++){  
        rows[cont].push(qubs[q])
        if((q+1)%9 === 0) cont++
    }
    // return rows
// }
// )()

//inicializamos la funcion
// (function () { //possBoxs
        var gross
        var index
        var exact
//iteramos en los 81 Squares
        for (let q= 0; q< 81; q++) {
//lo dividimos entre 9 redondeado abajo
            gross= Math.floor(q / 9) //indica el numero de fila
//calculamos el index vertical
            index= Math.floor(gross / 3) //este da 0, 1 ó 2
//lo usamos para calcular el box exacto al cual pertenecerá
            var module= (q % 9) 
            exact= Math.floor(module / 3) + index * 3
            boxs[exact].push(qubs[q])
        }
    // return boxs
// })()


function App() {

  // console.log(rows)

  return (
    <div className="App">
      { rows && rows.length > 0 && <Two rows={rows} /> }
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
