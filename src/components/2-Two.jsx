import React from "react";
import { actualizarCubos, boxs, cols, create3, detectdifficulty, difficult, megasolution, poss, qubs, restore, rows } from "../functions/2-Estructures";
// import { actualizarCubos, create, create3, create4 } from "../functions/3-Creator";
import Three from "./3-Three";

function sudoku(level, entity){
    var suerte
    var array= []
    for (let index = 0; index < 9; index++) {
        for (let ii = 0; ii < 9; ii++) {
            suerte= difficult(level) 
            if (!suerte) {
                entity[index][ii]= 0
                array.push(index)            
            }
        }
    }
    return array.length
}

console.log(cols, rows, boxs, qubs)
poss()
restore()
// create()
create3()
let qubes= actualizarCubos()
console.log(cols, rows, boxs, qubes)
// console.log(create())

sudoku(3, rows)
console.log(rows)

// let diff= (detectdifficulty(qubs).length)
// let realizabilidad= megasolution()

export default function Two() { //9 rows con 9 squares cada una  


// //     let qubs= actualizarCubos()

// //     console.log(qubes, qubs, rows)
    
//     console.log('cubos llenos: ', diff)
    
//     console.log('veracidad: ', realizabilidad)

    let numbers= new Array()
    let modules= new Array()
    
    for(let nn= 0; nn< 81; nn++){
        numbers.push(nn)
    }
    for (let mm= 0; mm< 9; mm++){
        modules.push(numbers.slice( mm * 9 , (mm + 1) * 9 ))
    }

    
    return (
        <div>
            {/* <Three/> */}
            {rows && rows.length > 0 && rows.map((r, i)=> <Three key={i} rows={rows} row={r} macroindex= {i} module={modules[i]}/>)}
        </div>
    )
} 