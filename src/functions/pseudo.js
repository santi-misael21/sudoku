// inicio 
var ochouno= 0
setRows= new Set()
setBoxs= new Set() 

// arranco horizontal 0 
//     indice 0 
//         genero un random
//         pusheo
//         continuar con el siguiente indice, no hay nada que revisar, no puede haber reps, si solo hay un elemento

//     indice 1
//         genero un random 
//         pusheo 
//         reviso si _vale_ , o sea, si no hay reps en la fila horizonal que estamos
//         si no _vale_ , (hay reps, es distinto a -1)
//             agrego el random al Set setRows, para contar cuántas veces intenté con ese índice, 

//             si intenté 9 veces en ese indice y no _vale_ , 
//                 reinicio el Set setRows, reinicio la fila,
//                 repito desde el indice 0 vertical, dentro del mismo horizontal (¿podría comprobar que me moví en eje correcto y no me salí de la horizontal?)
            
//             si no llegué a 9 veces en el Set setRows,
//                 reinicio ese indice de la fila
//                 repito ese indice
//______________________________________________________________

        // Inciso: ¿hace falta hacer algo relacionado al box? 
        // posibs: agregarle, saltear índice, borrar 
        // recordemos, el indice del box no va con los bucles, sino con `ochouno`, que es una variable que sube
        //      cada vez que la iteración tiene éxito y no sucede un continue, lo cual altera el flujo normal del for
        //      cuando no hay esa alteración, y el bucle sigue normal, `ochouno` también sube +1 "normalmente"
        //

//          pusheo al box
//          reviso si _vale_ , o sea, si no hay reps en el box que estamos
//          si no _vale_ , (hay reps, es distinto a -1)
//              agrego el random al Set setBoxs, para contar cuántas veces intenté con ese índice, //acá usaría un Set para cada entidad, uno para row, otro para box
            

        
        
        
            



