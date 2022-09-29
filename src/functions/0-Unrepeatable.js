function solution(a){
    for(let b= 1; b< a.length; b++){
        for(let c= b; c>= 0; c--){
            if(a[b]===a[c] &&b!=c) {
                if(a[b] !== 0 && a[b]!== undefined) {
                    var catt= [a[b], a[c]]//Object.assign(a[c], a[b])
                    // return catt
                    return {
                        reps: [b,c],
                        vals: catt
                    }
                }
            }
        }
    }
    return -1
}

// module.exports = {
//     solution
// }
export {
    solution
}