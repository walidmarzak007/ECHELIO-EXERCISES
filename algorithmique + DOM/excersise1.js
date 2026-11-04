function estPalindrome(mot){
    let reversedmot ="";
    let i = mot.length-1;
    while (i>=0) {
        reversedmot += mot[i];  
        i--;
    }
    return mot === reversedmot
    }
    console.log("walid")