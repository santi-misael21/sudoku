import { solution } from "./0-Unrepeatable"
import { boxs, cols, poss, qubs, resetSquare, rows, update, updateBox, updateCol, updateRow } from "./2-Estructures";
poss()
// qubs
// let qubs= []
// for(let a=0; a<81; a++){
//     qubs.push(0)
// }
var rs= [   [],[],[],  [],[],[],   [],[],[]    ]
var cs= [   [],[],[],  [],[],[],   [],[],[]    ]
var bs= [   [],[],[],  [],[],[],   [],[],[]    ]

// const { solution } = require('../functions/0-Unrepeatable.js');
// const { cols, qubs, resetSquare, rows, update, updateCol, updateRow } = require('../functions/2-Estructures.js');

//Funcion para dificultad
//level -> number between 1 to 5, the lower level is the easier sudoku
function difficult(level) {
    var coef= level *0.4 +5

    var diff= Math.random() * 15 
    var float= parseFloat(diff.toString().slice(0,3))

    if(float > coef) {
        return true //se busca un numero
    }
    return false //no se busca un carajo
}

function sudoku(level, qube){
    var suerte
    var array= []
    for (let index = 0; index < 81; index++) {
        suerte= difficult(level) 
        if (!suerte) {
            qube[index]= 0
            array.push(index)            
        }
    }
    return array.length
}

function create(){
    
    var ochouno= 0
    let theSet= new Set() 
    for (let aa= 0; aa < 9; aa++) {
        for (let a= 0; a < 9; a++) {

            // var sorteo= difficult(5)
            // if (!sorteo) { //bueno Lampone
            //     ochouno++ //pagale a los mariachis
            //     continue //y despedilos
            // }
    
            // function findUnique (string)  {
                let random= Math.ceil( Math.random() * 9 ) // Genera un random 1 al 9

                // rows[aa][a]= random 

                // resetSquare(ochouno)
                // qubs[ochouno]= 0
                // updateRow(ochouno)
                // updateCol(ochouno)

                // qubs[ochouno]= random
                // updateRow(ochouno)
                // updateCol(ochouno)

                rows[aa][a]= random
                cols[a][aa]= random

                // console.log(string)
                
                var q= ochouno
                // function findBox(q) {
                    var gross= Math.floor(q / 9) //indica el numero de fila
                    var index= Math.floor(gross / 3) //este da 0, 1 ó 2
                    var module= (q % 9)
                    let indexbox = (Math.floor(q/9)*3 + q%3) %9 //índice puntual -> 0 al 8
                    var foundbox= Math.floor(module / 3) + index * 3 //índice del box -> 0 al 8
                    // return foundbox
                // }

                var littleBox= foundbox
                boxs[foundbox][indexbox]= random
                
                // if ( q >= 29 && (q + 1) % 3 === 0) {
                if ( solution( boxs[littleBox] ) !== -1 ) {
                    theSet.add(random)
                    console.log(theSet)
                    if(theSet.size >= 9) {
                        theSet= new Set()
                        a= -1
                        continue
                    }
                    a--
                    continue
                    // return findUnique("boxs")
                }

                if (a > 0){
                    if ( solution( rows[aa] ) !== -1 ) {
                        theSet.add(random)
                        console.log(theSet)
                        if(theSet.size >= 9) {
                            theSet= new Set()
                            a= -1
                            continue
                        }
                        a--
                        continue
                        // return findUnique("boxs")
                    }
                }
                if (aa > 0){
                    if ( solution( cols[a] ) !== -1 ) {
                        theSet.add(random)
                        console.log(theSet)
                        if(theSet.size >= 9) {
                            theSet= new Set()
                            a= -1
                            continue
                        }
                        a--
                        continue
                        // return findUnique("boxs")
                    }
                }

                if(solution(cols[a ])=== -1 && solution(rows[aa])=== -1){
                    // theSet.add(random)
                    // return random
                    rows[aa][a]= random
                    cols[a][aa]= random
                    boxs[foundbox][indexbox]= random
                }
                // }
            // }

            // qubs[ochouno]= findUnique()
            // rows[aa][a]= random 
            // update(ochouno)
            // rows[aa][a]= findUnique()
            ochouno++
        }
        theSet= new Set()
    }
    return "ok"
}

function updateQubsBy(what){
    var q= 0
    var qubes= []
    for(let aa= 0; aa < 9; aa++){
        for(let a= 0; a < 9; a++){
            if(what==="rows") {
                qubes.push(rows[aa][a])
            }
            if(what==="cols") {
                qubes.push(cols[a][aa])
            }
            if(what==="boxs") {
                var gross= Math.floor(q / 9) //indica el numero de fila
                var index= Math.floor(gross / 3) //este da 0, 1 ó 2
                var module= (q % 9)
                let indexbox = (Math.floor(q/9)*3 + q%3) %9 //índice puntual -> 0 al 8
                var foundbox= Math.floor(module / 3) + index * 3 //índice del box -> 0 al 8
                qubes.push(boxs[foundbox][indexbox])
                q++
            }            
        }
    }
    return qubes
}

function actualizarCubos(){
    let qubes= updateQubsBy("rows")
    return qubes
}

function create2(){
    var ochouno= 0
    let theSet= new Set() 
    for (let aa= 0; aa < 9; aa++) {
        for (let a= 0; a < 9; a++) {
            let random= Math.ceil( Math.random() * 9 ) 
            var q= ochouno
            var gross= Math.floor(q / 9) //indica el numero de fila
            var index= Math.floor(gross / 3) //este da 0, 1 ó 2
            var module= (q % 9)
            let indexbox = (Math.floor(q/9)*3 + q%3) %9 //índice puntual -> 0 al 8
            var foundbox= Math.floor(module / 3) + index * 3 //índice del box -> 0 al 8
            boxs[foundbox][indexbox]= random
            
            if( indexbox > 0 ) {
                if ( solution( boxs[foundbox] ) !== -1 ) {
                    theSet.add(random)
                    boxs[foundbox][indexbox]= 0      
                    if(theSet.size >= 9) {
                        console.log(theSet, aa, a, random, ochouno)
                        theSet= new Set()
                        a= -1
                        continue
                    }
                    a=a-1
                    continue
                }
            }
            rows[aa][a]= random
            cols[a][aa]= random                


            if (a > 0){
                if ( solution( rows[aa] ) !== -1 ) {       
                    theSet.add(random)
                    rows[aa][a]= 0
                    cols[a][aa]= 0         
                    if(theSet.size >= 9) {
                        // console.log("set a 9 en rows",theSet)
                        theSet= new Set()
                        a= -1
                        continue
                    }
                    a--
                    continue
                }
            }
            

            if (aa > 0){
                if ( solution( cols[a] ) !== -1 ) {
                    theSet.add(random)
                    rows[aa][a]= 0
                    cols[a][aa]= 0       
                    if(theSet.size >= 9) {         
                        // console.log("set a 9 en cols",theSet)
                        theSet= new Set()
                        a= -1
                        continue
                    }
                    a--
                    continue
                }
            }
            
            if(solution(cols[a ])=== -1 && solution(rows[aa])=== -1){
                rows[aa][a]= random
                cols[a][aa]= random
            }
            ochouno++
        }
        theSet= new Set()
    }
    return "ok"
    
}

function verificate81(){

    var ochouno= 0
    for (let aa= 0; aa < 3; aa++) {
        for (let a= 0; a < 3; a++) {

        }
    }

}

function z(q){
    var gross= Math.floor(q / 9) //indica el numero de fila
    var index= Math.floor(gross / 3) //este da 0, 1 ó 2
    var module= (q % 9)
    let indexbox = (Math.floor(q/9)*3 + q%3) %9 //índice puntual -> 0 al 8
    var foundbox= Math.floor(module / 3) + index * 3 //índice del box -> 0 al 8
    // qubes.push(boxs[foundbox][indexbox])
    return [foundbox, indexbox]

}



function create3(){
    var molino= 0
    var ochouno= 0
    let setRows= new Set()
    let setBoxs= new Set()
    let theSet= new Set() 
    for (let aa= 0; aa < 9; aa++) {
        for (let a= 0; a < 9; a++) {
            molino++
            let random= Math.ceil( Math.random() * 9 ) 
            rows[aa][a]= random
            // if (a > 0){
                if ( solution( rows[aa] ) !== -1 ) {
                    setRows.add(random)             
                    if(setRows.size >= 9) {
                        // rows[aa][a]= 0
                        // console.log("set a 9 en rows",theSet)
                        // console.log(setRows, aa, a, random, ochouno, 'rows == 9', rows[aa])     
                        setBoxs= new Set()
                        setRows= new Set()
                        rows[aa]= [0,0,0,  0,0,0,  0,0,0]
                        qubs= updateQubsBy("rows")
                        for(let b=0;b<9;b++){
                            updateBox((aa * 9) +b)
                            updateCol((aa * 9) +b)
                        }
                        ochouno= aa* 9
                        a= -1
                        continue
                    }
                    // console.log(setRows, aa, a, random, ochouno, 'rows', rows[aa])     
                    a= a-1
                    continue
                }
            // }
            cols[a][aa]= random
            if (aa > 0){
                if ( solution( cols[a] ) !== -1 ) {
                    setRows.add(random)             
                    if(setRows.size >= 9) {
                        // rows[aa][a]= 0
                        // console.log("set a 9 en rows",theSet)
                        // console.log(setRows, aa, a, random, ochouno, 'rows == 9', rows[aa])     
                        setBoxs= new Set()
                        setRows= new Set()
                        rows[aa]= [0,0,0,  0,0,0,  0,0,0]
                        qubs= updateQubsBy("rows")
                        for(let b=0;b<9;b++){
                            updateBox((aa * 9) +b)
                            updateCol((aa * 9) +b)
                        }
                        ochouno= aa* 9
                        a= -1
                        continue
                    }
                    // console.log(setRows, aa, a, random, ochouno, 'rows', rows[aa])     
                    a= a-1
                    continue
                }
            }
                // console.log("pasé los continue")
            // }

            var q= ochouno
            var gross= Math.floor(q / 9) //indica el numero de fila
            var index= Math.floor(gross / 3) //este da 0, 1 ó 2
            var module= (q % 9)
            let indexbox = (Math.floor(q/9)*3 + q%3) %9 //índice puntual -> 0 al 8
            var foundbox= Math.floor(module / 3) + index * 3 //índice del box -> 0 al 8
            boxs[foundbox][indexbox]= random
            
            // if( indexbox > 0 ) {
                if ( solution( boxs[foundbox] ) !== -1 ) {
                    setRows.add(random)
                    boxs[foundbox][indexbox]= 0                     
                    // console.log(setRows, aa, a, random, ochouno)                    
                    if(setRows.size >= 9) {
                        setBoxs= new Set()
                        setRows= new Set()
                        rows[aa]= [0,0,0,  0,0,0,  0,0,0]
                        qubs= updateQubsBy("rows")
                        for(let b=0;b<9;b++){
                            updateBox((aa * 9) +b)
                            updateCol((aa * 9) +b)
                        }
                        ochouno= aa* 9
                        a= -1
                        // ochouno= aa * 9
                        continue
                    }
                    a=a-1
                    // ochouno--
                    continue
                }
            // }
            if(/*solution(cols[a ])=== -1 &&*/ solution(rows[aa])=== -1){
                rows[aa][a]= random
                // cols[a][aa]= random
            }
            ochouno++
            setBoxs= new Set()
            setRows= new Set()
        }
        theSet= new Set()
    }
    return {ok:"ok", molino}
}

function create4(){
    var ochouno= 0
    let theSet= new Set() 
    for (let aa= 0; aa < 9; aa++) {
        for (let a= 0; a < 9; a++) {
            let random= Math.ceil( Math.random() * 9 ) 
            rows[aa][a]= random
            cols[a][aa]= random                


            // if (a > 0){
                if ( solution( rows[aa] ) !== -1 ) {       
                    theSet.add(random)
                    rows[aa][a]= 0
                    cols[a][aa]= 0         
                    if(theSet.size >= 9) {
                        // console.log("set a 9 en rows",theSet)
                        theSet= new Set()
                        a= -1
                        continue
                    }
                    a--
                    continue
                }
            // }
            

            if (aa > 0){
                if ( solution( cols[a] ) !== -1 ) {
                    theSet.add(random)
                    rows[aa][a]= 0
                    cols[a][aa]= 0       
                    if(theSet.size >= 9) {         
                        // console.log("set a 9 en cols",theSet)
                        theSet= new Set()
                        a= -1
                        continue
                    }
                    a--
                    continue
                }
            }
            
            var q= ochouno
            var gross= Math.floor(q / 9) //indica el numero de fila
            var index= Math.floor(gross / 3) //este da 0, 1 ó 2
            var module= (q % 9)
            let indexbox = (Math.floor(q/9)*3 + q%3) %9 //índice puntual -> 0 al 8
            var foundbox= Math.floor(module / 3) + index * 3 //índice del box -> 0 al 8
            boxs[foundbox][indexbox]= random
            
            if( aa % 3 !== 0 ) {
                if ( solution( boxs[foundbox] ) !== -1 ) {
                    theSet.add(random)
                    boxs[foundbox][indexbox]= 0      
                    if(theSet.size >= 9) {
                        // console.log(theSet, aa, a, random, ochouno)
                        theSet= new Set()
                        a= -1
                        // ochouno= aa * 9
                        continue
                    }
                    a--
                    // ochouno--
                    continue
                }
            }
            
            if(solution(cols[a ])=== -1 && solution(rows[aa])=== -1){
                rows[aa][a]= random
                cols[a][aa]= random
            }
            ochouno++
        }
        theSet= new Set()
    }
    return "ok"

}

// export {
//     create,
//     create2,
//     create3,
//     create4,
//     actualizarCubos
// }