import { useState } from 'react';
import { actualizarCubos, create } from '../functions/3-Creator.js';
import '../styles/0-zero.css';
import { qubs, update, cols, boxs, restore, poss, detectdifficulty, megasolution } from '../functions/2-Estructures.js';
import { solution } from '../functions/0-Unrepeatable.js';

// const { qubs, update, cols, boxs, restore } = require('../functions/2-Estructures.js');
// const { solution } = require('../functions/0-Unrepeatable.js');
// const { create } = require('../functions/3-Creator.js')



export default function Four({unity, rows, loyalindex}){
    
    console.log(unity, loyalindex) //rows = [  [  0,0,0,  0,0,0,  0,0,0  ]  ,  [...]  ]

    if(loyalindex===9){
    }

    let [filas, setFilas]= useState(rows)

    // create()
    
    function changeEach(e){
        console.log("unity, value", unity, loyalindex, e.target.value)
        var val= e.target.value
        // // // // for (let a in unity) {
        // // // //     prop= a
        // // // //     // console.log(unity[a])
        // // // // }
        if(parseInt(val)!==parseInt(val) || val==='0') { // si no es un número, se desconsidera
            // // // // console.log(unity[a], a)
            return document.getElementsByTagName("input")[loyalindex].value=''
            // // // // return document.getElementsByTagName("input")[0].value=''
        }
        if(e.target.value.length > 1) { // si la cadena es mayor a 1, se considera solo el [0]
            return document.getElementsByTagName("input")[loyalindex].value= val[0]
        }
        // console.log(rows)
        // for(let n= 0; n< 9; n++) {
        //     console.log(solution(rows[n]))
        //     if(solution(rows[n]) !== -1) {
        //         console.log(-1)
        //         repeat= true
        //     }
        // }
        unity= parseInt(val)
        qubs[loyalindex]= unity
        setFilas(update(loyalindex))
        console.log(filas, 'cols: ', cols, 'boxs: ', boxs)

        //Etapa de repetidos
        function findReps(entidad) {
            var finder
            for (let b= 0; b< 9; b++) {
                finder= solution(entidad[b])
                if (finder !== -1) return finder
            }
            return finder
        }
        console.log( "cols: ",
            findReps(cols), 'rows: ',
            findReps(rows), 'boxs: ',
            findReps(boxs),
        )
        // return setEach(val)
    }

    if(unity!==0){
        console.log('loyalindex: ', loyalindex)
        document.getElementsByTagName("input")[loyalindex].value= unity
    }
    if(unity===0){
        document.getElementsByTagName("input")[loyalindex].value= ''
    }

    return (
        <span >
            <input 
            // id={repeat ? 'rep':''} 
            className=
            // {(prop%9!== 0 && prop%3 === 0)?'border': (divis === 3 || divis === 6)? 'under':
            {'unity'}
            // // value= {each}
            onChange= {e=>changeEach(e)}
            // // name= {each}
            />
        </span>
    )
}