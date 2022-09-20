import React from "react";
import { useState } from "react";
import { boxs, cols, create3, detectdifficulty, megasolution, poss, possRandC, qubs, restore, rows, sudoku, update } from "../functions/2-Estructures";

import Three from "./3-Three";

// console.log(cols, rows, boxs, qubs, 'sudoku', sudoku)
// console.log(create())

// let diff= (detectdifficulty(qubs).length)
// let realizabilidad= megasolution()

export default function Two() { //9 rows con 9 squares cada una  


//     let qubs= actualizarCubos()

//     console.log(qubes, qubs, rows)
    
    // console.log('cubos llenos: ', diff)
    
    // console.log('veracidad: ', realizabilidad)

    let [carga, setCarga] = useState(false)

    let numbers= new Array()
    let modules= new Array()
    
    for(let nn= 0; nn< 81; nn++){
        numbers.push(nn)
    }
    for (let mm= 0; mm< 9; mm++){
        modules.push(numbers.slice( mm * 9 , (mm + 1) * 9 ))
    }

    function cargar(){
        setCarga(true)
    }

    let a
    
    return (
        <div>
            {/* {rows && rows.length > 0 && rows.map((r, i)=> {a= modules[i]; console.log(a)} )} */}
            {rows.map((r, i)=> <Three key={i} rows={rows} row={r} module={modules[i]} carga={carga && carga}/>)}
            <button onClick={cargar}>
                Cargar
            </button>
        </div>
    )
} 