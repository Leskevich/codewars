function descendingOrder(n){
    if (n<=10){
        return n
    }

return +(""+n).split("").map(Number).sort((a,b)=>b-a).join('')
}


console.log(descendingOrder(456))