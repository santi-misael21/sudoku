import React from "react";
import { useState } from "react";
import { boxs, cols, create3, detectdifficulty, megasolution, poss, possRandC, qubs, restore, rows, sudoku, update, howmanyQubs } from "../functions/2-Estructures";

import Three from "./3-Three";

// console.log(cols, rows, boxs, qubs, 'sudoku', sudoku)
// console.log(create())

// let diff= (detectdifficulty(qubs).length)
// let realizabilidad= megasolution()
let initFilled= howmanyQubs(rows)

export default function Two() { //9 rows con 9 squares cada una  

    let [fill, sendFill] = useState()
    let [carga, setCarga] = useState(false)
    let [repsRows, sendRepsRows] = useState()
    let [repsCols, sendRepsCols] = useState()
    let [repsBoxs, sendRepsBoxs] = useState()

    console.log(repsRows, repsBoxs, repsCols)


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
            <h6>
                {(!fill && initFilled) || (fill && fill)}/81 casilleros completos
            </h6>
            {/* {rows && rows.length > 0 && rows.map((r, i)=> {a= modules[i]; console.log(a)} )} */}
            {rows.map((r, i)=> <Three key={i} rows={rows} row={r} module={modules[i]} carga={carga && carga} sendFill={sendFill} sendRepsBoxs={sendRepsBoxs} sendRepsCols={sendRepsCols} sendRepsRows={sendRepsRows}/>)}
            <button onClick={cargar} >
                Cargar
            </button>
            {/* Quiero meter un indicador que me diga cuántos qubs están completos
            así: 40/81 cuadrados llenos, 0 incorrectos 
            entonces la ecuación es: si cuadrados llenos es 81 e incorrectos es 0,
            felicitame al jugador, porque lo logró, el maldito lo logró. 
            Entonces, cómo hago para medir los qubs y su estado*/}

            {/* después puede haber un ranking del mismo jugador para cada nivel que 
            compita, tipo jugó en 3 niveles, su ranking tiene 3 particiones, algo así
            como un club que tiene divisiones inferiores, las cuales son independientes
            en tanto a posición en la tabla se refiere */}
        </div>
    )
} 