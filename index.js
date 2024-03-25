// Code your solutions in this file

function writeCards(name, event){
    const cards = [];
    for (let name of name){
        cards.push(`Thank you, ${name}, for the wonderful ${event} gift!`)
    }
    return cards;
}
function countDown(number){
    for(let i = number; i >= 0; i --){
        console.log(i);
    }
}