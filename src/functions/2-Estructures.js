import { solution } from "./0-Unrepeatable.js";
// const {solution} = require('../functions/0-Unrepeatable.js');

let cols, boxs ,rows

// (function (){//createRows
    rows= []
    for (let r= 0; r< 9; r++){
        rows[r]= []
    }
//     return rows
// })()

// (function (){//createCols
    cols= []
    for (let c= 0; c< 9; c++){
        cols[c]= []
    }
//     return cols
// })()

// (function (){//createBoxs
    boxs= []
    for (let b= 0; b< 9; b++){
        boxs[b]= []
    }
//     return boxs
// })()

let qubs
// (function (){//createQubs
    qubs= []
    for (let q= 1; q<= 81; q++){
        qubs.push(0)
    }
//     return qubs
// })()
// _________________________________________
/* Funciones auxiliares usadas para updatear */
function floor (a,b) { 
    return Math.floor(a/b)
}
function modul (a,b) {
    return a % b
}
// _________________________________________

function updateCol(inx) {
    cols[modul(inx,9)][floor(inx,9)]= qubs[inx]
    return qubs[inx]
}

function updateRow(inx) {
    rows[floor(inx,9)][modul(inx,9)]= qubs[inx]
    return qubs[inx]
}

function updateBox(q) {
        
    var gross= Math.floor(q / 9) //indica el numero de fila
//calculamos el index vertical
    var index= Math.floor(gross / 3) //este da 0, 1 ó 2
//lo usamos para calcular el box exacto al cual pertenecerá
    var module= (q % 9) 

    var foundbox= Math.floor(module / 3) + index * 3 //índice del box -> 0 al 8
    let indexbox = (Math.floor(q/9)*3 + q%3) %9 //índice puntual -> 0 al 8
    
    boxs[foundbox][indexbox] = qubs[q]

    return `boxs[${foundbox}][${indexbox}], actualizado: ${boxs[foundbox][indexbox]}`

}
//Exportables solo las siguientes functions
const update = (q) => {
    updateBox(q)
    updateCol(q)
    updateRow(q)
}

function resetSquare(q) {
    qubs[q]= 0
    updateBox(q)
    updateCol(q)
    updateRow(q)
}


// (
function possCols (){//possCols

    //    pseudo 
    //    tengo que agarrar qubs que va del 1 al 81
    //    hacer iteraciones de 0 a 8
    //    a todos los 0, mandarlos al indice cols[0]
    //    a todos los 8, mandarlos al indice cols[8]
    
    var ochouno= 0

    for(let alfa= 0; alfa <= 8; alfa++) {
        for(let beta= 0; beta <= 8; beta++) {
            cols[beta][alfa]= qubs[ochouno] //escribiendo esa línea conecté una neurona al ver que beta iba antes que alfa
            ochouno++
        }
    }

    return cols
}
    
    // (
    // 
function possRows(){//

    var ochouno= 0

    for(let alfa= 0; alfa <= 8; alfa++) {
        for(let beta= 0; beta <= 8; beta++) {
            rows[alfa][beta]= qubs[ochouno] //escribiendo esa línea conecté una neurona al ver que beta iba antes que alfa
            ochouno++
        }
    }

    return rows
}
    // )()
    
    //inicializamos la funcion
    // (
    // function possBoxs() { //
    //     var gross
    //     var index
    //     var exact
    // //iteramos en los 81 Squares
    //     for (let q= 0; q< 81; q++) {
    // //lo dividimos entre 9 redondeado abajo
    //         gross= Math.floor(q / 9) //indica el numero de fila
    // //calculamos el index vertical
    //         index= Math.floor(gross / 3) //este da 0, 1 ó 2
    // //lo usamos para calcular el box exacto al cual pertenecerá
    //         var module= (q % 9) 
    //         exact= Math.floor(module / 3) + index * 3
    //         boxs[exact].push(qubs[q])
    //     }
    //     // return boxs
    // }

function possBoxs(){
    for (let a= 0; a < 81; a++) {
        updateBox(a)
    }
    return boxs
}

function poss(){
    for (let a= 0; a < 81; a++) {
        update(a)
    }
}


function restore(){
    for (let a= 0; a < 81; a++) {
        resetSquare(a)
    }
}

function updateEvery(){
    for (let a= 0; a < 81; a++) {
        update(a)
    }
}

function megasolution(){
    let b= []
    let c=[]
    let r=[]
    for (let a= 0; a < 9; a++) {
        r.push(solution(rows[a])) 
        c.push(solution(cols[a])) 
        b.push(solution(boxs[a])) 
    }
    let concat= {rows: r, boxs: b, cols: c}
    return concat
}

function detectdifficulty(qubs){
    let cont=[]
    for(let a=0;a<81;a++){
        if(qubs[a]!==0){
            cont.push(a)
        }
    }
    return cont
}
function updateEveryCols(){ //Hace un bucle de 81 iteraciones para actualizar las cols respecto a los qubs
    for(let b=0;b<81;b++) updateCol(b) 
}
// module.exports={
export {
    //Para testing
    rows, cols, boxs, qubs,
    updateRow,
    updateCol,
    updateBox,
    //Para update
    update,
    //Para reset
    resetSquare,
    //Para crear estructura sudoku
    possCols,
    possRows,
    possBoxs,
    poss,
    restore,
    detectdifficulty,
    megasolution,
    //Para crear sudoku lógico:
    //Pendiente en proceso
}

