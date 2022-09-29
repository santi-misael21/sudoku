import { useState } from 'react';
import '../styles/0-zero.css';
import { qubs, update, cols, boxs, restore, poss, detectdifficulty, megasolution, howmanyQubs, pointerMistakes } from '../functions/2-Estructures.js';
import { solution } from '../functions/0-Unrepeatable.js';

// const { qubs, update, cols, boxs, restore } = require('../functions/2-Estructures.js');
// const { solution } = require('../functions/0-Unrepeatable.js');
// const { create } = require('../functions/3-Creator.js')


export default function Four({unity, rows, loyalindex, carga, sendFill, sendRepsRows, sendRepsCols, sendRepsBoxs}){

    let [filas, setFilas]= useState(rows)
    
    function changeEach(e){
        console.log("unity, value", unity, loyalindex, e.target.value)
        var val= e.target.value
        if(val===''){
            unity= 0
        }
        if(val!==''){
            unity= parseInt(val)
        }
        qubs[loyalindex]= unity
        setFilas(update(loyalindex))
        sendFill(howmanyQubs(rows))
        // console.log("megasolution", megasolution()[rows])
        let repsRows=pointerMistakes('rows', megasolution())
        let repsCols=pointerMistakes('cols', megasolution())
        let repsBoxs=pointerMistakes('boxs', megasolution())
        // if(repsRows!== undefined){
            sendRepsRows(repsRows)
        // }
        // if(repsCols!== undefined){
            sendRepsCols(repsCols)
        // }
        // if(repsBoxs!== undefined){
            sendRepsBoxs(repsBoxs)
        // }
        // console.log(filas, 'cols: ', cols, 'boxs: ', boxs)

        function politica1(){if(val===''){
            return document.getElementsByTagName("input")[loyalindex].value=''
        }}
        politica1()
        function politica2(){if(parseInt(val)!==parseInt(val) || val==='0' || val==='') { // si no es un número, se desconsidera
            return document.getElementsByTagName("input")[loyalindex].value=''
        }}
        politica2()
        function politica3(){if(e.target.value.length > 1) { // si la cadena es mayor a 1, se considera solo el [0]
            politica2()
            return document.getElementsByTagName("input")[loyalindex].value= val[0]
        }}      
        politica3()
    }


    if (carga) {
        if(unity!==0){
            document.getElementsByTagName("input")[loyalindex].value= unity
        }
        if(unity===0){
            document.getElementsByTagName("input")[loyalindex].value= ''
        }
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