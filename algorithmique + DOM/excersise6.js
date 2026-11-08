function jouerFizzBuzz(max) {
    let resultas =[];
    for (let i = 1 ; i <= max ; i++){
        if (i% 3 === 0 && i% 5 === 0){
            resultas.push("FizzBuzz")
        }

    else if ( i% 3 === 0){
        resultas.push("Fizz")
}  
    else if (i% 5 === 0){
        resultas.push("Buzz")
}
    else {
        resultas.push(i)
    }
    }
    return resultas
}
console.log(jouerFizzBuzz(5))