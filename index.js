
function writeCards(name, event) {
    let message = []
    for (let n = 0; n < name.length; n++) {
        message.push(`Thank you, ${name[n]}, for the wonderful ${event} gift!`);
    }
    return message;
}

function countDown(n) {
    while (n>-1){
        console.log(n);
        n--;
    }
}


