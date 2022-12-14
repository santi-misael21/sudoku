import React from "react";
import { useState } from "react";
import { boxs, cols, create3, detectdifficulty, megasolution, poss, possRandC, qubs, restore, rows, sudoku, update, howmanyQubs, rows_cols_to_squares } from "../functions/2-Estructures";

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
    // let [sending, reSending] = useState({
    //     b: [], c: [], r: [], t: false
    // })

    // console.log(repsRows, repsBoxs, repsCols)
    // let first, second1, second2, square1, square2, test

    // if(typeof repsRows==='object' && !sending.t){
    //     first= repsRows['indice']
    //     second1= repsRows['subindice']['reps'][0]
    //     second2= repsRows['subindice']['reps'][1]
    //     square1= rows_cols_to_squares(first, second1, 'rows')
    //     square2= rows_cols_to_squares(first, second2, 'rows')
    //     test= true
    //     reSending({
    //         ...sending,
    //         b: [square1, square2],
    //         t: true
    //     })
    // }
    // console.log(first, second1, second2, square1, square2)
    // document.getElementsByTagName('input')[0].style.color= 'red'


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
            <h6 style={{color:'white'}}>
                {(!fill && initFilled) || (fill && fill)}/81 casilleros completos
            </h6>
            {/* {rows && rows.length > 0 && rows.map((r, i)=> {a= modules[i]; console.log(a)} )} */}
            {rows.map((r, i)=> <Three key={i} rows={rows} row={r} module={modules[i]} carga={carga && carga} sendFill={sendFill} sendRepsBoxs={sendRepsBoxs} sendRepsCols={sendRepsCols} sendRepsRows={sendRepsRows} />)}
            <button onClick={cargar} >
                Cargar
            </button>

            {/* despu??s puede haber un ranking del mismo jugador para cada nivel que 
            compita, tipo jug?? en 3 niveles, su ranking tiene 3 particiones, algo as??
            como un club que tiene divisiones inferiores, las cuales son independientes
            en tanto a posici??n en la tabla se refiere */}
            {/* <iframe width="1447" height="525" src="https://www.youtube.com/embed/EGEHxqIh5zU" title="REBOBINANDO UN VENTILADOR O AVANICO, INDUSTRIAL DE 24 RANURA PARTE 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </div>
    )
} 