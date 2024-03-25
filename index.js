// Code your solutions in this file
for (let age = 30; age < 40; age ++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}
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