// Code your solutions in this file
function writeCards(names) {
    let result = [];
    result.length = names.length;
    for (let x=0;x<names.length;x++) {
      result[x]=`Thank you, ${names[x]}, for the wonderful surprise gift!`;
    }
    return result;
}

function countDown(number){
    for (let x=number;x>=0;x--) {
        console.log(x);       
    }
}