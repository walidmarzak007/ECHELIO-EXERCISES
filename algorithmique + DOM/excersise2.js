function creerAcronyme(phrase){
    let Acronyme = "";
    let newPhrase = phrase.split(" ");
    for ( let word of newPhrase)
        {Acronyme += word [0]}
    return Acronyme.toUpperCase();
}
console.log(creerAcronyme("you code nador"));