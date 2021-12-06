function writeCards(names, event) {
    let newArray = [];

    for (let i = 0; i < names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
    
}

function countDown(num) {
    while(num >= 0) {
        console.log(num--);
    }
}